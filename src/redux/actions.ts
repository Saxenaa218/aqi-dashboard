import { store } from ".";
import { TableItemTypes } from "../components/Table/types";
import { SET_HISTORY_DATA } from "../utils";

export const setHistoryObject = (socketResp: TableItemTypes[]) => {
  const { historyObject } = store.getState();
  const resultObject = JSON.parse(JSON.stringify(historyObject));
  for (const each of socketResp) {
    // using 10 length as a barrier for the queue
    const eachObject = { ...each, timeStamp: Date.now() };
    if (resultObject[each.city]?.length === 10) {
      resultObject[each.city].shift();
      resultObject[each.city].push(eachObject);
    }
    else if (resultObject[each.city]?.length<10) {
      resultObject[each.city].push(eachObject);
    }
    else {
      resultObject[each.city] = [];
      resultObject[each.city].push(eachObject);
    }
  }
  store.dispatch({
    type: SET_HISTORY_DATA,
    payload: resultObject,
  });
};
