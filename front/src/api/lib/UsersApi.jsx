import axiosUser from "../apiUsers";

//USER

export async function getAllUsers() {
  const res = await axiosUser.get("/");
  return res;
}

export const updateUser = (data, subId) => axiosUser.patch(`/update/${subId}`, JSON.stringify(data));
export async function deleteUsers(userId) { await axiosUser.patch(`/deleteUser/${userId}`) };

export async function getAllUsersData() {
  const res = await axiosUser.get("/");
  return res;
}
export async function getUserById(id) {
  const res = await axiosUser.get(`/${id}`);
  return res;
}
export async function createUser(data) {
  const res = await axiosUser.post("/register", JSON.stringify(data));
  return res;
}

export async function getEmail(email) {
  const res = await axiosUser.get(`/email?email=${email}`);

  return res.data.data.users;
}

export async function loginUser(data) {
  const res = await axiosUser.post(
    `/login?email=${data.email}&password=${data.password}`,
    JSON.stringify(data)
  );
  return res;
}