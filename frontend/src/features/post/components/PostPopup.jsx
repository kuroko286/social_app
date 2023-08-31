import { useSelector } from "react-redux";
import { CommentForm, PostContent, PostHeader, PostInfo } from "./Post";
import { FormProvider, useForm } from "react-hook-form";
import { useGet } from "@/hooks/useGet";
import { useState } from "react";
import { CommentItem } from "./CommentItem";

export const PostPopup = ({ post }) => {
  const user = useSelector((state) => state.user);
  const methods = useForm();
  const {
    data: _comments,
    error,
    loading,
  } = useGet("/posts/" + post._id + "/comments", {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
  const [comments, setComments] = useState(_comments);
  return (
    <>
      <div className="mb-8 flex item-center justify-start">
        <PostContent post={post} />
        <div className="">
          <PostHeader post={post} />
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>
                <CommentItem comment={comment} />
              </li>
            ))}
          </ul>
          <PostInfo post={post} />
          <FormProvider {...methods}>
            <CommentForm
              post={post}
              user={user}
              comments={comments}
              setComments={setComments}
            />
          </FormProvider>
        </div>
      </div>
      <hr className="h-[2px] bg-black" />
    </>
  );
};
