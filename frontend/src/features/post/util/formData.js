export const createNewPostFormData = ({ text, media }) => {
  const formData = new FormData();
  formData.append("text", text);
  media.forEach((file) => formData.append("media", file));
  return formData;
};
