import { createStore, combineReducers } from "redux";
import moneyReducer from "./bank/reducer";
import counterReducer from "./counter/reducer";

const rootReducer = combineReducers({ moneyReducer, counterReducer });

const store = createStore(rootReducer);

export default store;
