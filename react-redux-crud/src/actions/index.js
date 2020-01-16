import { ADD_ARTICLE,DELETE_ARTICLE,EDIT_ARTICLE,UPDATE_ARTICLE } from "./action-types";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
export function deleteId(id) {
    return {type: DELETE_ARTICLE, payload:id};
}
export function editArticle(article) {
    return {type: EDIT_ARTICLE, payload:article};
}
export function updateArticle(article) {
    return {type: UPDATE_ARTICLE, payload:article};
}