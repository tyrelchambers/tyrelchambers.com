import axios from "axios";
export const postToHashNode = async ({
  title,
  contentMarkdown,
  originalArticleURL,
  coverImageURL,
  hideFromHashnodeFeed = false,
  tags,
  publicationId,
  cb = null,
}) => {
  const data = {
    input: {
      title,
      contentMarkdown,
      isRepublished: {
        originalArticleURL,
      },
      tags,
    },
    hideFromHashnodeFeed,
    publicationId,
  };

  if (coverImageURL) {
    data.input.coverImageURL = coverImageURL;
  }

  return await axios.post(
    "https://api.hashnode.com",
    {
      query:
        "mutation createPublicationStory($input: CreateStoryInput!, $hideFromHashnodeFeed: Boolean, $publicationId: String!){createPublicationStory(input: $input,hideFromHashnodeFeed:$hideFromHashnodeFeed,publicationId:$publicationId) { success code message }}",
      variables: data,
    },
    {
      headers: {
        Authorization: process.env.HASHNODE_KEY,
      },
    }
  );
};
