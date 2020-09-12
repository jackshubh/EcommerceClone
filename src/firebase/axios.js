import axios from "axios";

export const instance = axios.create({
  //"https://us-central1-clone-cd786.cloudfunctions.net/api", // The API (cloud function) URL
  baseURL: "http://localhost:5001/clone-cd786/us-central1/api",
});

export default instance;
