import { CreatePost } from "@/features/mixed/home/components/CreatePost";
import { HomeLeft } from "@/features/mixed/home/components/Left";
import { Post } from "@/features/post/components/Post";
import { HomeRight } from "@/features/mixed/home/components/Right";
import { StoryBar } from "@/features/mixed/home/components/StoryBar";
import { VerifyAccount } from "@/features/mixed/home/components/VerifyAccount";
import { useSelector } from "react-redux";
import { Loading } from "@/components/Element/Loading";
import { useGetAllPosts } from "../../../post/api/getAllPosts";

export const Home = () => {
  const user = useSelector((state) => state.user);
  const { data, error, loading } = useGetAllPosts();

  if (loading) {
    return (
      <h1>
        <Loading size={32} />
      </h1>
    );
  }
  if (error) {
    return <h1 className="text-red-500 font-medium text-3xl">{error}</h1>;
  }
  return (
    <>
      <div className="flex justify-center">
        <HomeLeft />
        <div className="w-full z-0 max-w-[680px] min-h-screen">
          <StoryBar />
          {!user.verified && <VerifyAccount />}
          <CreatePost />
          <div>
            {data.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>
        </div>
        <HomeRight />
      </div>
      <div className="w-full h-[2000px]"></div>
    </>
  );
};
