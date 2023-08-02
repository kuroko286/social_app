import { Feeling, LiveVideo, Photo } from "@/assets/svg";
import { Avatar } from "@/components/Element/Avatar";
import { Button } from "@/components/Element/Button";
import { Cancel } from "@/components/Icon/Icons";
import { useModel } from "@/hooks/useModel";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const src =
  "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png";

export const CreatePost = () => {
  const [model, setModel] = useModel();
  const user = useSelector((state) => state.user);
  const [cursorPosition, setCursorPosition] = useState();
  const textRef = useRef(null);
  const [post, setPost] = useState({
    text: "",
    media: [],
  });
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
    const start = post.text.substring(0, text.selectionStart);
    const end = post.text.substring(text.selectionEnd);
    const newText = start + emojiObject.emoji + end;
    setPost({
      ...post,
      text: newText,
    });
    setCursorPosition(start.length + emojiObject.emoji.length);
    console.log(post);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
    console.log(post);
  };
  const handleMediaChange = (e) => {
    const newMedia = [...post.media, e.target.files[0]];
    setPost({ ...post, media: newMedia });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", post.text);
    formData.append("userId", user?._id || "64b52bc0bf9711418b05603d");
    post.media.forEach((media) => formData.append("media", media));

    axios.post("http://localhost:8000/post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  return (
    <>
      <div className="bg-gray-200 p-3 rounded-md">
        <div className="flex gap-4">
          <Avatar src={src}></Avatar>
          <input
            type="text"
            placeholder="What is in your mind?"
            className="outline-none w-full rounded-3xl p-2"
            onClick={() => setModel(true)}
          />
        </div>
        <hr />

        <ul className="flex items-center justify-between mt-3">
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-300 p-3 rounded-2xl">
            <LiveVideo color={"#FF0000"} />
            <p className="font-medium text-lg">Live Stream</p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-300 p-3 rounded-2xl">
            <Photo color={"#00FF00"} />
            <p className="font-medium text-lg">Photo/Video</p>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-300 p-3 rounded-2xl">
            <Feeling color={"#00FFFF"} />
            <p className="font-medium text-lg">Feeling/Activity</p>
          </li>
        </ul>
      </div>
      {model && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-300/60">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-center">
            <header className="py-3 border-b-2 text-center relative">
              <p className="font-bold text-xl">New Post</p>
              <span
                className="p-2 rounded-full bg-gray-300 absolute right-3 top-1 cursor-pointer"
                onClick={() => setModel(false)}
              >
                <Cancel></Cancel>
              </span>
            </header>
            <div className="flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <Avatar src={src}></Avatar>
                <p className="font-medium text-lg">Le Van Quoc</p>
              </div>
              <textarea
                type="text"
                name="text"
                value={post.text}
                className="outline-none border-none resize-none w-96 h-32"
                placeholder="What's in your mind?"
                onChange={handleTextChange}
                ref={textRef}
                maxLength={250}
              ></textarea>
              <div className="grid grid-cols-3 p-4 gap-3 max-h-96 overflow-auto">
                {post.media
                  .map((item) => URL.createObjectURL(item))
                  .map((url) => (
                    <img
                      src={url}
                      alt="image-post"
                      key={url}
                      className="w-full h-full object-cover"
                    ></img>
                  ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <input
                    id="media"
                    type="file"
                    name="media"
                    multiple
                    className="hidden"
                    onChange={handleMediaChange}
                  ></input>
                  <label htmlFor="media" className="cursor-pointer">
                    <Photo color={"#00FF00"} />
                  </label>
                </div>
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
                </div>
              </div>
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
      )}
    </>
  );
};
