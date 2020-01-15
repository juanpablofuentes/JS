import { ADD_ARTICLE, DELETE_ARTICLE } from "../actions/action-types";

const initialState = {
    articles: [{title: "Hola", id: 1}],
    lastId: 1
};
function rootReducer(state = initialState, action) {
 
    if (action.type === ADD_ARTICLE) {
        return {
            articles: state.articles.concat({title: action.payload.title, id: state.lastId + 1}),
            lastId: state.lastId + 1
        };
    }
    if (action.type === DELETE_ARTICLE) {
        return {
            articles: state.articles.filter(el=>el.id!==action.payload),
            lastId: state.lastId
        };
    }
    return state;
}
;
export default rootReducer;