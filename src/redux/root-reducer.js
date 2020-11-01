import {combineReducers} from "redux";
import  homeReducer from "./home/home.reducer"
import  showReducer from "./shows/shows.reducer"




export default combineReducers({
    home : homeReducer,
    show: showReducer
})

