import { combineReducers } from "redux";
import gameReducers from "./gameReducers";

const rootReducer = combineReducers({
  games: gameReducers,
});
export default rootReducer;
