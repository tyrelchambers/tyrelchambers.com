import axios from "axios";

export const getHashnodeStats = async () => {
  return await axios
    .post(
      "https://api.hashnode.com",
      {
        query: `query User($username: String!) {
              user(username: $username) {
                username
                publication {
                  posts {
                    totalReactions
                    replyCount
                    responseCount
                  }
                }
              }
            }`,
        variables: {
          username: "tyrelchambers",
        },
      },
      {
        headers: {
          Authorization: process.env.HASHNODE_KEY,
        },
      }
    )
    .then((res) => res.data.data.user.publication.posts);
};
