import { useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { CreatePost } from "../components/Home/CreatePost";
import { HomeLeft } from "../components/Home/Left";
import { Post } from "../components/Home/Post";
import { HomeRight } from "../components/Home/Right";
import { StoryBar } from "../components/Home/StoryBar";
import { VerifyAccount } from "../components/Home/VerifyAccount";

export const Home = () => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Header></Header>
      <div className="flex justify-center">
        <HomeLeft></HomeLeft>
        <div className="pt-header z-0 w-full max-w-[680px] min-h-screen">
          <StoryBar></StoryBar>
          <VerifyAccount></VerifyAccount>
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
        <HomeRight></HomeRight>
      </div>
      <div className="w-full h-[2000px]"></div>
    </div>
  );
};
