import { AnyAction } from "redux";
import { 
  ADD_TO_MY_FAVORITES,
  REMOVE_FROM_MY_FAVORITES,
  SET_GIFS,
  TOGGLE_TO_MY_FAVORITES,
  RESET_GIFS_SEARCH
} from "../actions/gifs";

export interface Gif {
  id: string;
  isFavorite: boolean;
}

export interface GifState {
  gifSearch: Gif[];
  favorites: string[];
  searchOffset: number;
}

const initState: GifState = {
  gifSearch: [],
  favorites: [],
  searchOffset: 0
};

export const gifs = (state = initState, action: AnyAction): GifState => {
  switch (action.type) {

    case SET_GIFS:
      return { ...state, gifSearch: state.gifSearch.concat(action.payload.gifSearch), searchOffset: action.payload.searchOffset };

    case RESET_GIFS_SEARCH:
      return { ...state, gifSearch: [], searchOffset: 0 }

    case TOGGLE_TO_MY_FAVORITES:
      const favoriteGifId: string = action.payload.gifId;
      return {
        ...state,
        gifSearch: state.gifSearch.map(gif => gif.id === favoriteGifId ?
          { ...gif, isFavorite: !gif.isFavorite } : gif)
      };
    case ADD_TO_MY_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat([action.payload])
      };
    case REMOVE_FROM_MY_FAVORITES:
      const gifIndex = state.favorites.indexOf(action.payload);
      return {
        ...state,
        favorites: [
          ...state.favorites.slice(0, gifIndex),
          ...state.favorites.slice(gifIndex + 1)
        ]
      };
    default:
      return state;
  }
};
