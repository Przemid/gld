import { ADD_ARTICLE } from "../src/actionTypes";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
