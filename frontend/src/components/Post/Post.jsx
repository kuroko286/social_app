import { Dots, Feeling } from "@/assets/svg";
import { Avatar } from "@/components/Element/Avatar";
import { Button } from "@/components/Element/Button";
import ImageGallery from "@/components/Element/ImageGallery";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";

export const Post = () => {
  return (
    <div>
      <PostHeader />
      <PostContent />
      <PostInfo />
      <PostComment />
    </div>
  );
};

export const PostHeader = () => {
  return (
    <div className="flex items-center justify-between p-3">
      <div className="flex items-center gap-3">
        <Avatar
          src={
            "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
          }
        />
        <div>
          <p className="font-bold">Nguyen Van A</p>
          <p className="text-gray-500">2h</p>
        </div>
      </div>
      <span className="p-2 rounded-full hover:bg-gray-400">
        <Dots color={"#000"} />
      </span>
    </div>
  );
};

export const PostContent = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco
      </p>
      <ImageGallery />
    </div>
  );
};

export const PostInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p>502 likes</p>
        <div className="flex items-center gap-3">
          <p>3 comments</p>
          <p>2 shares</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="cursor-pointer font-medium">Like</p>
        <p className="cursor-pointer font-medium">Comment</p>
        <p className="cursor-pointer font-medium">Share</p>
      </div>
    </div>
  );
};

export const PostComment = () => {
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);
  const [comment, setComment] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = (event) => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  useEffect(() => {
    if (textRef.current) {
      textRef.current.selectionEnd = cursorPosition;
    }
  }, [cursorPosition]);
  const handleEmojiClick = (emojiObject) => {
    const text = textRef.current;
    text.focus();
    const start = comment.substring(0, text.selectionStart);
    const end = comment.substring(text.selectionEnd);
    const newText = start + emojiObject.emoji + end;
    setComment(newText);
    setCursorPosition(start.length + emojiObject.emoji.length);
  };

  const handleTextChange = (e) => {
    const { value } = e.target;
    setComment(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(comment);
  };

  return (
    <div>
      <p className="font-medium text-gray-500 cursor-pointer">
        View all comments
      </p>
      <div className="flex items-center w-full">
        <input
          type="text"
          ref={textRef}
          value={comment}
          placeholder="Write a comment"
          onChange={handleTextChange}
          className="grow p-2 bg-transparent border-b-2 border-gray-500 outline-none"
        />
        <div className="relative ">
          <label
            htmlFor="emoji"
            className="cursor-pointer"
            onClick={toggleEmojiPicker}
          >
            <Feeling color={"#00FFFF"} />
          </label>
          {showEmojiPicker && (
            <div className="absolute top-0 -translate-y-full">
              <EmojiPicker
                width={328}
                height={268}
                searchDisabled
                previewConfig={{ showPreview: false }}
                onEmojiClick={handleEmojiClick}
              />
            </div>
          )}
          <Button
            type="submit"
            className="bg-blue-500 text-white font-medium w-full text-center"
            onClick={handleSubmit}
          >
            Post
          </Button>
        </div>
      </div>
    </div>
  );
};
