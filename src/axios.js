import axios from "axios";

const instance = axios.create({
  //baseURL:"https://us-central1-challenge-97b58.cloudfunctions.net/api"
   baseURL: "http://localhost:5001/challenge-97b58/us-central1/api", //the API (cloud function) url
});

export default instance;
