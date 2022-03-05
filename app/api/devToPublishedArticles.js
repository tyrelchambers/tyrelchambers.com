import axios from "axios";

export const devToPublishedArticles = async (data) => {
  return await axios.get("https://dev.to/api/articles/me/published", {
    headers: {
      "api-key": process.env.DEVTO_KEY,
    },
  });
};
