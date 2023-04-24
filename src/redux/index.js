import { dataReducer } from "./aboutMe/AboutMeReducer"
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { timerReducer } from "./timer/timerReducer";
import { objReducer } from "./logOut/logOutReducer";
import { toDoR } from "./toDo/toDoReducer";
import { settingR } from "./settings/settingsReducer";

const combine = combineReducers({
    array : dataReducer,
    obj : objReducer,
    timer : timerReducer,
    todo : toDoR,
    styles : settingR,
    
})


const store = createStore(combine, applyMiddleware(thunkMiddleware)) 


export default store