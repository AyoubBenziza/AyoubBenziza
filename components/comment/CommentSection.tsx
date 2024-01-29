import { SectionWrapper } from "@/components/atom/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getComments } from "@/lib/actions";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";

export const CommentSection = async () => {
  const comments = await getComments();

  return (
    <SectionWrapper id="comments" title="Comments">
      <div className="flex flex-col items-center w-full max-w-2xl gap-4">
        {comments.length ? (
          <div className="grid justify-items-center w-full gap-4 my-4">
            <Carousel className="w-3/4 content-center max-w-60 text-primary">
              <CarouselContent>
                {comments.map(
                  (comment: {
                    id: string;
                    username: string;
                    comment: string;
                    createdAt: Date;
                  }) => (
                    <CarouselItem key={comment.id}>
                      <div className="p-1">
                        <Card className="bg-accent text-white">
                          <CardContent className="flex items-center justify-center p-3">
                            <Comment key={comment.id} {...comment} />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
                )}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        ) : null}
        <CommentForm />
      </div>
    </SectionWrapper>
  );
};
