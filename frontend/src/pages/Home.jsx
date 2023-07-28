import Header from "@/components/Header/Header";
import { CreatePost } from "@/components/Home/CreatePost";
import { HomeLeft } from "@/components/Home/Left";
import { Post } from "@/components/Home/Post";
import { HomeRight } from "@/components/Home/Right";
import { StoryBar } from "@/components/Home/StoryBar";
import { VerifyAccount } from "@/components/Home/VerifyAccount";

import { useSelector } from "react-redux";

export const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <div className="flex justify-center">
        {/* <HomeLeft></HomeLeft> */}
        <div className="pt-header w-full z-0 max-w-[680px] min-h-screen">
          <StoryBar></StoryBar>
          {!user?.verified && <VerifyAccount></VerifyAccount>}
          <CreatePost></CreatePost>
          <div>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
          </div>
        </div>
        {/* <HomeRight></HomeRight> */}
      </div>
      <div className="w-full h-[2000px]"></div>
    </>
  );
};
