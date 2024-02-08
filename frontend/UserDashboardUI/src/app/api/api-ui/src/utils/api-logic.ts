import axios from "axios";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post("/user/login", { email, password });
  if (res.status !== 200) {
    throw new Error("Unable to login");
  }
  const data = await res.data;
  return data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
) => {
  const res = await axios.post("/user/signup", { name, email, password });
  if (res.status !== 201) {
    throw new Error("Unable to Signup");
  }
  const data = await res.data;
  return data;
};

// @TODO FIX LINE 27
export const checkAuthStatus = async () => {
  const res = await axios.get("/user"); //add /auth-status
  if (res.status !== 200) {
    throw new Error("Unable to authenticate");
  }
  //const data = console.log("This is a placeholder for when Auth is implemented!")
  const data = await res.data;
  return data;
};

export const getUserData = async (name: string) => {
  const res = await axios.get(`/user/${name}`);
  if (res.status !== 200) {
    console.error(`Unable to get user data for ${name}`);
    throw new Error("Unable to get user data");
  }
  const data = await res.data;
  return data;
};

export const deleteUser = async () => {
  const res = await axios.delete("/chat/delete");
  if (res.status !== 200) {
    throw new Error("@TODO NOT IMPLEMENTED");
  }
  const data = await res.data;
  return data;
};

export const logoutUser = async () => {
  const res = await axios.get("/user/logout");
  if (res.status !== 200) {
    throw new Error("Unable to delete chats");
  }
  const data = await res.data;
  return data;
};
