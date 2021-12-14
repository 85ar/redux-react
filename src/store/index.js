import { createStore, combineReducers, applyMiddleware } from "redux";
import moneyReducer from "./bank/reducer";
import counterReducer from "./counter/reducer";
import employeesReducer from "./employees/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  moneyReducer,
  counterReducer,
  employeesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
