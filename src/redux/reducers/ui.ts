import { AnyAction } from 'redux';
import { SET_LOADER } from "../actions/ui";

interface uiState {
    loader: boolean
}

const initState: uiState = {
  loader: false
};

export const ui = (state = initState, action: AnyAction): uiState => {
  switch (true) {
    case action.type.includes(SET_LOADER):
      return { ...state, loader: action.payload };

    default:
      return state;
  }
};
