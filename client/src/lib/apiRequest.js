import axios from "axios";

const apiRequest = axios.create({  
  baseURL: "https://tapalaz.onrender.com",
  withCredentials: true,
});

export default apiRequest;
