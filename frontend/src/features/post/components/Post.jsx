import { Dots, Feeling } from "@/assets/svg";
import { Avatar } from "@/components/Element/Avatar";
import { Button } from "@/components/Element/Button";
import ImageGallery from "@/components/Element/ImageGallery";
import EmojiPicker from "emoji-picker-react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { getTimeAgo } from "@/utils/datetime";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { ModelContext } from "@/layout/HomeLayout";
import { useCreateComment } from "../api/createComment";
import { useEmojiTextInput } from "@/hooks/useEmojiTextInput";

export const Post = ({ post }) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="mb-8">
        <PostHeader post={post} />
        <PostContent post={post} />
        <PostInfo post={post} />
        <PostComment post={post} user={user} />
      </div>
      <hr className="h-[2px] bg-black" />
    </>
  );
};

export const PostHeader = ({ post }) => {
  const [model, setModel] = useContext(ModelContext);
  const { user, createdAt } = post;
  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <Avatar src={user.picture} />
        <div>
          <p className="font-bold">{user.first_name + " " + user.last_name}</p>
          <p className="text-gray-500">{getTimeAgo(createdAt)}</p>
        </div>
      </div>
      <span
        className="p-2 rounded-full hover:bg-gray-400 cursor-pointer"
        onClick={() => setModel("post-menu")}
      >
        <Dots color={"#000"} />
      </span>
    </div>
  );
};

export const PostContent = ({ post }) => {
  const { text, media } = post;
  return (
    <div>
      <p>{text}</p>
      <ImageGallery images={media} />
    </div>
  );
};

export const PostInfo = ({ post }) => {
  const { likes, shares, comments } = post;
  return (
    <div>
      <div className="flex items-center justify-between">
        <p>{likes.length} likes</p>
        <div className="flex items-center gap-3">
          <p>{comments.length} comments</p>
          <p>{shares.length} shares</p>
        </div>
      </div>
      <hr className="my-1 bg-black" />
      <div className="grid grid-cols-3 items-center">
        <p className="cursor-pointer py-2 rounded-lg text-center font-medium hover:bg-gray-300">
          Like
        </p>
        <p className="cursor-pointer py-2 rounded-lg text-center font-medium hover:bg-gray-300">
          Comment
        </p>
        <p className="cursor-pointer py-2 rounded-lg text-center font-medium hover:bg-gray-300">
          Share
        </p>
      </div>
      <hr className="my-1 bg-black" />
    </div>
  );
};

export const PostComment = ({ post, user }) => {
  const methods = useForm();
  return (
    <div>
      <p className="font-medium text-gray-500 cursor-pointer py-1">
        View all comments
      </p>
      <FormProvider {...methods}>
        <CommentForm post={post} user={user} />
      </FormProvider>
    </div>
  );
};

const CommentForm = ({ post, user }) => {
  const {
    methods: { control, handleSubmit },
    handleEmojiSelect,
    handleTogglePicker,
    showPicker,
  } = useEmojiTextInput("comment");

  const { loading, error, responseData, mutate } = useCreateComment(post._id);
  const handleSendComment = async ({ comment }) => {
    try {
      await mutate({ comment });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => handleSendComment(data))}>
      <Controller
        control={control}
        name="comment"
        defaultValue={""}
        render={({ field }) => (
          <div className="flex items-center">
            <div className="relative">
              <label
                htmlFor="emoji"
                className="cursor-pointer"
                onClick={handleTogglePicker}
              >
                <Feeling color={"#00FFFF"} />
              </label>
              {showPicker && (
                <div className="absolute -top-1 left-2 -translate-y-full">
                  <EmojiPicker
                    width={328}
                    height={268}
                    searchDisabled
                    previewConfig={{ showPreview: false }}
                    onEmojiClick={handleEmojiSelect}
                  />
                </div>
              )}
            </div>
            <textarea
              id="comment"
              placeholder="Write a comment"
              {...field}
              onChange={(e) => field.onChange(e.target.value)}
              className="resize-none w-full h-10 p-2 outline-none border-none bg-transparent grow"
            />
            <Button
              className={
                "bg-blue-500 hover:bg-blue-700 duration-200 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              }
              disabled={loading || !field.value}
              type="submit"
            >
              Send
            </Button>
          </div>
        )}
      />

      {error && <span className="text-red-500">{error}</span>}
      {responseData && (
        <span className="text-green-500">Send comment successfully</span>
      )}
    </form>
  );
};