import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    header: {
      authorization: token,
    },
    baseUrl: "http:localhost:3000/api",
  });
};
export default axiosWithAuth;
