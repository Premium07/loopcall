import { axiosInstance } from "./axios";

export const signup = async (formData) => {
  const response = await axiosInstance.post("/auth/signup", formData);
  return response.data;
};

export const getAuthUser = async () => {
  const res = await axiosInstance.get("/auth/profile");
  return res.data;
};
