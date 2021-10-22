import { StateTypes, actionTypes } from "./types";
import { SET_HISTORY_DATA } from "../utils";

const initialState: StateTypes = {
  historyObject: {
    "Delhi": [
      {
        "city": "Delhi",
        "aqi": 303.9955573644944,
        "timeStamp": 23
      },
      {
        "city": "Delhi",
        "aqi": 303.0473196100626,
        "timeStamp": 1111111
      }
    ],
    "Mumbai": [
      {
        "city": "Mumbai",
        "aqi": 180.4532880409185,
        "timeStamp": 23433
      }
    ],
    "Bengaluru": [
      {
        "city": "Bengaluru",
        "aqi": 90.23942071701057,
        "timeStamp": 2343223
      }
    ]
  }
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
