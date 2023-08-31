import { Avatar } from "@/components/Element/Avatar";

export const CommentItem = ({ comment: _comment }) => {
  const { commentBy, commentAt, comment } = _comment;
  return (
    <div className="flex gap-3 justify-center">
      <Avatar size={40} src={commentBy.picture} />
      <div className="flex flex-wrap">
        <span className="font-semibold cursor-pointer">
          {commentBy.first_name + " " + commentBy.last_name}
        </span>
        <p className="ml-2">{comment}</p>
      </div>
    </div>
  );
};
