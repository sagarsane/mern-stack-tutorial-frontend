import axios from "axios";

export default axios.create({
  baseURL: "https://us-east-1.aws.data.mongodb-api.com/app/restaurant-reviews-luzsu/endpoint/",
  headers: {
    "Content-type": "application/json"
  }
});