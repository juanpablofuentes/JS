import { ADD_ARTICLE } from "../actions/action-types";

const initialState = {
    articles: [{title:"Hola"}]
  };
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return {
          articles: state.articles.concat(action.payload)
        };
      }
    return state;
  };
  export default rootReducer;