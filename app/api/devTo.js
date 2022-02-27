import axios from "axios";

export const postToDevTo = async (data) => {
  return await axios.post(
    "https://dev.to/api/articles",
    {
      ...data,
    },
    {
      headers: {
        "api-key": process.env.DEVTO_KEY,
      },
    }
  );
};
