import { Loading } from "@/components/Element/Loading";
import { Post } from "@/features/post/components/Post";
import Friend from "@/features/friends/components/Friend";
import { Header } from "@/features/user/components/Header";
import { Introduce } from "@/features/user/components/Introduce";
import { Left } from "@/features/user/components/Left";
import { useGet } from "@/hooks/useGet";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetOtherProfile } from "../api/getOtherProfile";

export const OtherProfile = () => {
  const [index, setIndex] = useState(0);
  const { userId } = useParams();
  const { data, loading, error } = useGetOtherProfile(userId);

  if (loading) return <Loading size={32} />;
  if (error)
    return <h1 className="text-red-500 font-bold text-3xl">{error}</h1>;
  const { user, posts, relationship } = data;

  return (
    <div className="pt-header flex flex-col items-center">
      <Header
        user={user}
        posts={posts}
        relationship={relationship}
        owner={false}
        index={index}
        setIndex={setIndex}
      />
      <div className="grid grid-cols-[1fr,3fr] max-w-[1000px]">
        {index === 0 && (
          <>
            <Left />
            <ul className="z-10">
              {posts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </ul>
          </>
        )}
        {index === 1 && (
          <div>
            <Introduce user={user} />
          </div>
        )}
        {index === 2 && (
          <div>
            <Friend />
          </div>
        )}
      </div>
    </div>
  );
};
