import { axiosInstance } from "./axios";

export const signup = async (formData) => {
  const res = await axiosInstance.post("/auth/signup", formData);
  return res.data;
};

export const login = async (formData) => {
  const res = await axiosInstance.post("/auth/login", formData);
  return res.data;
};

export const logout = async () => {
  const res = await axiosInstance.post("/auth/logout");
  return res.data;
};

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/profile");
    return res.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const completeOnboarding = async (userData) => {
  const res = await axiosInstance.post("/auth/onboarding", userData);
  return res.data;
};
