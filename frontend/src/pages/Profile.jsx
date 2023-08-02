import { Post } from "@/components/Post/Post";
import { Header } from "@/components/Profile/Header";
import { Left } from "@/components/Profile/Left";
import { UpdateProfile } from "@/components/Profile/UpdateProfile";

export const Profile = () => {
  return (
    <div className="pt-header flex flex-col items-center">
      <Header />
      <div className="grid grid-cols-[1fr,3fr] max-w-[1000px]">
        <>
          <Left />
          <ul className="z-10">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </ul>
        </>
        {/* <div>
          <UpdateProfile />
        </div> */}
      </div>
    </div>
  );
};
