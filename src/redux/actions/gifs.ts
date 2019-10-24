export const GIFS = "[Gifs]";
export const FAVORITES = "[Favorites]";

export const FETCH_GIFS = `${GIFS} Fetch`;
export const SET_GIFS = `${GIFS} Set`;
export const RESET_GIFS_SEARCH = `${GIFS} Reset Search`;
export const TOGGLE_TO_MY_FAVORITES = `${FAVORITES} Add/remove gif`;
export const ADD_TO_MY_FAVORITES = `${FAVORITES} Add gif`;
export const REMOVE_FROM_MY_FAVORITES = `${FAVORITES} Remove gif`;

export const fetchGifs = (searchQuery: string, offset: number = 0) => ({
  type: FETCH_GIFS,
  payload: { searchQuery, offset },
});

export const setGifs = (gifs: any, searchOffset: number, key: string) => ({
  type: SET_GIFS,
  payload: { gifs, searchOffset },
  meta: { key, feature: GIFS }
});

export const resetGifsSearch = () => ({
  type: RESET_GIFS_SEARCH,
  meta: { feature: GIFS }
});

export const toggleToMyFavorites = (gifId: string, isFavorite: boolean) => ({
  type: TOGGLE_TO_MY_FAVORITES,
  payload: { gifId, isFavorite },
  meta: { feature: FAVORITES }
});

export const addToMyFavorites = (gifId: string) => ({
  type: ADD_TO_MY_FAVORITES,
  payload: gifId,
  meta: { feature: FAVORITES }
});

export const removeFromMyFavorites = (gifId: string) => ({
  type: REMOVE_FROM_MY_FAVORITES,
  payload: gifId,
  meta: { feature: FAVORITES }
});
