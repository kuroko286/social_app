import { CreatePost } from "@/features/post/components/CreatePost";
import { PostMenu } from "@/features/post/components/PostMenu";
import { EditProfile } from "@/features/user/components/EditProfile";
import { UpdateAvatarForm } from "@/features/user/components/Header";

const modelMap = {
  "create-post": <CreatePost />,
  "post-menu": <PostMenu />,
  "edit-profile": <EditProfile />,
  "update-avatar": <UpdateAvatarForm />,
};

export const Model = ({ model }) => {
  return modelMap[model];
};
