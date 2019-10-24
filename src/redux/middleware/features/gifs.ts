import * as R from 'ramda';
import { Middleware } from "redux";
import {
  addToMyFavorites,
  removeFromMyFavorites,
  GIFS,
  FETCH_GIFS,
  TOGGLE_TO_MY_FAVORITES,
  setGifs,
  resetGifsSearch
} from "../../actions/gifs";
import { API_ERROR, API_SUCCESS, apiRequest } from "../../actions/api";
import { setLoader } from "../../actions/ui";
import { searchQueryTransform } from "../../../utils/searchQueryTransform";

export const gifsMidlleware: Middleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_GIFS:
      const finalQuery = searchQueryTransform(action.payload.searchQuery);
      const offset = action.payload.offset;
      // if Offset = 0 -> new search and we should clear Gif reducer
      if (offset === 0) {
        next(resetGifsSearch());
      }
      next(
        apiRequest({
          method: "GET",
          url:
            `https://api.giphy.com/v1/gifs/search?offset=${offset}&api_key=GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw&q=${finalQuery}`,
          body: null,
          feature: GIFS
        })
      );
      next(setLoader({ flag: true, feature: GIFS }));
      break;

    case TOGGLE_TO_MY_FAVORITES:  
      if (action.payload.isFavorite) {
        next(removeFromMyFavorites(action.payload.gifId));
      } else {
        next(addToMyFavorites(action.payload.gifId));
      }
      break;

    case `${GIFS} ${API_SUCCESS}`:
      const searchOffset: number = R.path(['pagination', 'offset'], action.payload);
      next(setGifs(action.payload.data, searchOffset, "id"));
      next(
        setLoader({
          flag: false,
          feature: GIFS
        })
      );
      break;

    case `${GIFS} ${API_ERROR}`:
      next(setLoader({ flag: false, feature: GIFS }));
      break;
  }
};
