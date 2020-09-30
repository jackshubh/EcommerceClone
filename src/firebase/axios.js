import axios from "axios";

export const instance = axios.create({
  baseURL: "https://us-central1-clone-cd786.cloudfunctions.net/api", // The API (cloud function) URL
  // "http://localhost:5001/clone-cd786/us-central1/api",
});

export default instance;
