import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "49a2ca577f1e4927907e98d5e4ed186d",
  },
});
