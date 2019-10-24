import * as R from 'ramda';
import { Middleware } from "redux";
import { dataNormalized } from "../../actions/data";

export const normalizeMiddleware: Middleware = ({
  dispatch
}) => next => action => {
  // This middleware is used to transform Giphy API data to the shape we need
  if (action.type.includes("Set") && action.meta.key) {
    const gifSearch = action.payload.gifs.map((gif: any) => {
      return {
        id: gif.id,
        isFavorite: false
      }
    }
  );
    next(dataNormalized(action.meta.feature));
    next({ ...action, payload: { gifSearch, searchOffset: action.payload.searchOffset } });
  } else {
    next(action);
  }
};
