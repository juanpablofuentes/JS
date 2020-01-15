import { ADD_ARTICLE,DELETE_ARTICLE } from "./action-types";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
export function deleteId(id) {
    return {type: DELETE_ARTICLE, payload:id};
}