import { getRandomInt } from "~/utils/randomInt";

export const getArticleSuggestions = ({ articles, count = 2 }) => {
  const articlePool = articles;
  const randArticles = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomInt(0, articlePool.length - 1);
    const art = articlePool.splice(randomIndex, 1)[0];
    randArticles.push(art);
  }

  return randArticles;
};
