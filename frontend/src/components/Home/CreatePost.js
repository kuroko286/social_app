import { Avatar } from "../Element/Avatar";
import { Button } from "../Element/Button";
import { Cancel } from "../Icon/Icons";
import { useModel } from "../../hooks/useModel";

export const CreatePost = () => {
  const [model, setModel] = useModel();
  return (
    <>
      <div>
        <h3 className="font-semibold text-xl">Post Something</h3>
        <div className="flex gap-4">
          <Avatar src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"></Avatar>
          <input
            type="text"
            placeholder="What is in your mind?"
            className="outline-none w-full"
            onClick={() => setModel(true)}
          ></input>
        </div>
      </div>
      {model && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-gray-300/60">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-center">
            <header className="py-3 border-b-2 text-center relative">
              <p>New Post</p>
              <span
                className="p-2 rounded-full bg-gray-300 absolute right-3 top-1 cursor-pointer"
                onClick={() => setModel(false)}
              >
                <Cancel></Cancel>
              </span>
            </header>
            <div className="flex flex-col gap-3 p-6">
              <div className="flex items-center gap-3">
                <Avatar src="https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"></Avatar>
                <p>Le Van Quoc</p>
              </div>
              <textarea
                type="text"
                name="caption"
                className="outline-none border-none"
                placeholder="What's in your mind?"
              ></textarea>
              {/* <input
                type="file"
                name="media"
                multiple
                onChange={handleChange}
              ></input> */}
            </div>
            <Button type="submit" className="bg-white">
              Post
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
