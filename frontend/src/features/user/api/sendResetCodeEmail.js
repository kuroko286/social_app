import api from "@/lib/axios";

export const sendResetCodeEmail = (bodyData) => {
  return api.post("/reset/sendemail", bodyData);
};
