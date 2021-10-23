import { StateTypes, actionTypes } from "./types";
import { SET_HISTORY_DATA } from "../utils";

const initialState: StateTypes = {
  historyObject: {}
};

const rootReducer = (state: StateTypes = initialState, action: actionTypes) => {
  switch (action.type) {
    case SET_HISTORY_DATA:
      return { ...state, historyObject: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
