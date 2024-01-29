"use server";

import { commentFormSchema } from "@/components/comment/CommentForm";
import { Client } from "@notionhq/client";
import Filter from "bad-words";
import { z } from "zod";
import { GITHUB_USERNAME } from "./config";
import { cache } from "react";

const notion = new Client({ auth: process.env.NOTION_API_TOKEN });
const filter = new Filter();

export const addComment = async ({
  username,
  comment,
}: z.infer<typeof commentFormSchema>) => {
  if (filter.isProfane(comment) || filter.isProfane(username)) {
    throw new Error("Comment is profane");
  }

  if (!username || !comment) {
    throw new Error("Username and Comment are required");
  }

  if (process.env.NOTION_DATABASE_ID) {
    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Username: {
          title: [
            {
              text: {
                content: username,
              },
            },
          ],
        },

        Comment: {
          rich_text: [
            {
              text: {
                content: comment,
              },
            },
          ],
        },
      },
    });
    return response;
  } else {
    throw new Error("NOTION_DATABASE_ID is required");
  }
};

export const getComments = cache(async () => {
  if (!process.env.NOTION_DATABASE_ID)
    throw new Error("Missing Notion Secret Id");
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    page_size: 9,
    sorts: [
      {
        property: "Created",
        direction: "descending",
      },
    ],
  });
  const comments = response.results.map((result: any) => {
    const properties = result.properties;
    return {
      id: result.id,
      comment: properties.Comment.rich_text[0].plain_text,
      username: properties.Username.title[0].plain_text,
      createdAt: properties.Created.created_time,
    };
  });
  return comments;
});

export const getGitHubRepositories = cache(async () => {
  if (!process.env.GITHUB_TOKEN) throw new Error("GitHub Token Required");
  const query = `
  {
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            homepageUrl
            url
            stargazerCount
          }
        }
      }
    }
  }
  `;
  const response = await fetch(`https://api.github.com/graphql`, {
    method: "POST",
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  }).then((r) => r.json());
  return response.data.user.pinnedItems.nodes;
});
