import { ArrowRight, Plus } from "@/assets/svg";
import { Avatar } from "@/components/Element/Avatar";

export const StoryBar = () => {
  return (
    <div className="relative grid grid-cols-5 gap-2 p-3 bg-gray-200 rounded-md mt-4">
      <span className="absolute z-10 cursor-pointer rounded-full top-1/2 -translate-y-1/2 -left-3 p-3 bg-gray-300">
        <ArrowRight></ArrowRight>
      </span>
      <CreateStory></CreateStory>
      <FriendStory></FriendStory>
      <FriendStory></FriendStory>
      <FriendStory></FriendStory>
      <FriendStory></FriendStory>
      <span className="absolute z-10 cursor-pointer rounded-full top-1/2 -translate-y-1/2 -right-3 p-3 bg-gray-300">
        <ArrowRight />
      </span>
    </div>
  );
};

export const CreateStory = () => {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat relative h-[200px] cursor-pointer`}
      style={{
        backgroundImage: `url("https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg")`,
      }}
    >
      <div className="flex flex-col items-center gap-1 absolute bottom-2 left-1/2 -translate-x-1/2">
        <span className="p-3 rounded-full bg-gray-200">
          <Plus></Plus>
        </span>
        <p className="font-medium text-center">Create a story</p>
      </div>
    </div>
  );
};

export const FriendStory = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat relative h-[200px] cursor-pointer"
      style={{
        backgroundImage: `url("https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1")`,
      }}
    >
      <Avatar
        src={
          "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png"
        }
        className={"absolute top-2 left-2 border-[4px] border-blue-500"}
      ></Avatar>

      <p className="font-medium absolute bottom-2 left-2">Nguyen Van A</p>
    </div>
  );
};
