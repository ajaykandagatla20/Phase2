import { createStore } from "redux";
import CounterReducer from "../reducers/CounterReduces";



const store=createStore(CounterReducer)
export default store;