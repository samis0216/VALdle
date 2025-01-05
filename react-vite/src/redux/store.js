import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import genresReducer from "./genres";
import djsReducer from "./djs";
import guessesReducer from "./guesses";
import likedReducer from "./liked"

const rootReducer = combineReducers({
  session: sessionReducer,
  genres: genresReducer,
  djs: djsReducer,
  guesses: guessesReducer,
  liked: likedReducer,
});


const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
