import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RepositoriesReducer } from "./reducers/repositoriesReducer";
import { PreviousSearchTermsReducer } from "./reducers/previousSearchTermsReducer";

export const rootReducer = combineReducers({
  repositories: RepositoriesReducer,
  previousSearchTerms: PreviousSearchTermsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  );

  return store;
}
