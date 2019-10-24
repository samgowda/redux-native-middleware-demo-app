import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { gifs } from "./reducers/gifs";
import { ui } from "./reducers/ui";
import { gifsMidlleware } from "./middleware/features/gifs";
import { apiMiddleware } from "./middleware/core/api";
import { normalizeMiddleware } from "./middleware/core/normalize";

const rootReducer = combineReducers({ gifs, ui });

const featureMiddleware = [gifsMidlleware];

const coreMiddleware = [
  apiMiddleware,
  normalizeMiddleware
];

// compose store enhancers
const enhancer = composeWithDevTools(
  applyMiddleware(...featureMiddleware, ...coreMiddleware)
);

export const store = createStore(rootReducer, enhancer);
