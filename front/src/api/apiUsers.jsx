import axios from "axios";

const axiosUser = axios.create({
  baseURL: `http://localhost:3001/api/v1/auth`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosUser.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status === 401) {
      window.location.href = "http://localhost:3001";
    }
    return Promise.reject(error);
  }
);

export default axiosUser;
