import { ADD_ARTICLE } from "../constants/action-types";
const initialState = {
    articles: []
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === "DELETE_ARTICLE") {
        return {
            articles: []
        };
    }
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;