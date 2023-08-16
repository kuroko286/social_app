import { Avatar } from "@/components/Element/Avatar";
import { Cancel } from "@/components/Icon/Icons";
import { ModelContext } from "@/layout/HomeLayout";
import { Controller, FormProvider, useFormContext } from "react-hook-form";
import { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import EmojiPicker from "emoji-picker-react";
import { Feeling, Photo } from "@/assets/svg";
import { Button } from "../../../components/Element/Button";
import { createNewPostFormData } from "../util/formData";
import { useCreatePost } from "../api/createPost";
import { useEmojiTextInput } from "@/hooks/useEmojiTextInput";

export const CreatePost = () => {
  const [model, setModel] = useContext(ModelContext);
  const user = useSelector((state) => state.user);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl max-w-[560px] w-full">
      <header className="py-3 border-b-2 text-center relative">
        <p className="font-bold text-xl">New Post</p>
        <span
          className="p-2 rounded-full bg-gray-300 absolute right-3 top-1 cursor-pointer"
          onClick={() => setModel("none")}
        >
          <Cancel></Cancel>
        </span>
      </header>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          <Avatar src={user.picture}></Avatar>
          <p className="font-medium text-lg">Le Van Quoc</p>
        </div>
        <CreatePostForm user={user} />
      </div>
    </div>
  );
};

const CreatePostForm = ({ user }) => {
  const methods = useForm();
  const { loading, error, responseData, mutate } = useCreatePost();
  const onSubmit = async ({ text, media }) => {
    try {
      const formData = createNewPostFormData({ text, media });
      // Handle form submission
      await mutate(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="relative">
          <EmojiTextarea />
          <ImageUpload />
        </div>
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 duration-200 text-white w-full text-center disabled:opacity-50"
          disabled={loading}
        >
          Submit
        </Button>
        {error && <span className="text-red-500">{error}</span>}
        {responseData && (
          <span className="text-green-500">Send post successfully</span>
        )}
      </form>
    </FormProvider>
  );
};

const EmojiTextarea = () => {
  const {
    methods: { control },
    handleEmojiSelect,
    handleTogglePicker,
    showPicker,
  } = useEmojiTextInput("caption");

  return (
    <>
      <Controller
        name="text"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <div>
            <textarea
              className="resize-none w-full h-32 p-3 outline-none border-none bg-transparent"
              id="caption"
              placeholder="What's on your mind?"
              {...field}
              onChange={(e) => field.onChange(e.target.value)}
            />
            <button
              type="button"
              className="absolute right-3 top-24"
              onClick={handleTogglePicker}
            >
              <Feeling color={"#00FF00"} />
            </button>
            {showPicker && (
              <div className="absolute right-3 bottom-10">
                <EmojiPicker
                  width={328}
                  height={268}
                  searchDisabled
                  previewConfig={{ showPreview: false }}
                  onEmojiClick={handleEmojiSelect}
                />
              </div>
            )}
          </div>
        )}
      />
    </>
  );
};

const ImageUpload = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="media"
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <>
          <input
            id="media"
            type="file"
            className="hidden"
            onChange={(e) => {
              return field.onChange([
                ...field.value,
                ...Array.from(e.target.files),
              ]);
            }}
          />
          <label
            htmlFor="media"
            className="cursor-pointer absolute left-3 top-24"
          >
            <Photo color={"#00FF00"} />
          </label>
          <div className="w-full grid grid-cols-3 gap-4 mb-4 max-h-[300px] overflow-auto ">
            {field.value
              .map((item) => URL.createObjectURL(item))
              .map((url) => (
                <img
                  src={url}
                  alt="image-post"
                  key={url}
                  className="w-full h-full object-cover rounded-xl"
                ></img>
              ))}
          </div>
        </>
      )}
    />
  );
};
