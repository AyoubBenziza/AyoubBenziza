import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const Comment = ({
  username,
  comment,
  createdAt,
}: {
  username: string;
  comment: string;
  createdAt: Date;
}) => {
  const createdAtDate = new Date(createdAt);

  const formattedDate = `${createdAtDate.getDate()}/${
    createdAtDate.getMonth() + 1
  }/${createdAtDate.getFullYear()}`;

  return (
    <div className="flex h-full justify-center items-center space-x-4">
      <div className="flex flex-col items-center space-y-1">
        <Avatar>
          <AvatarImage
            src={
              "https://api.dicebear.com/7.x/notionists-neutral/svg?seed=" +
              username
            }
            alt="Profile Comment"
          />
          <AvatarFallback>{username}</AvatarFallback>
        </Avatar>
        <p className="text-sm font-medium leading-none">{username}</p>
      </div>
      <div className="flex flex-col space-y-1">
        <p className="text-sm">{formattedDate}</p>
        <p className="text-sm font-medium leading-none">{comment}</p>
      </div>
    </div>
  );
};
