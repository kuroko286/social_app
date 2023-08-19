import Header from "@/components/Header/Header";
import { useModel } from "@/hooks/useModel";
import { CreatePost } from "@/features/post/components/CreatePost";
import { Outlet } from "react-router-dom";
import { createContext } from "react";
import { PostMenu } from "@/features/post/components/PostMenu";
import { EditProfile } from "@/features/user/components/EditProfile";
import { UpdateAvatarForm } from "@/features/user/components/Header";

export const ModelContext = createContext();

function HomeLayout() {
  const [model, setModel] = useModel();
  return (
    <div className="relative">
      <ModelContext.Provider value={[model, setModel]}>
        <div className="relative z-0">
          <Header></Header>
          <div className="pt-header w-full z-0 min-h-screen">
            <Outlet></Outlet>
          </div>
        </div>

        <div
          className={`${
            model === "none" ? "hidden" : ""
          } fixed top-0 left-0 right-0 bottom-0 z-10 bg-gray-400/50`}
        >
          {model === "create-post" && <CreatePost />}
          {model === "post-menu" && <PostMenu />}
          {model === "edit-profile" && <EditProfile />}
          {model === "update-avatar" && <UpdateAvatarForm />}
        </div>
      </ModelContext.Provider>
    </div>
  );
}

export default HomeLayout;
