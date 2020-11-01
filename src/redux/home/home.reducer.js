  
import MOVIE_DATA from "./movie.data"

const INITIAL_STATE ={
    collections : MOVIE_DATA
}

const homeReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
            default:
                return state;
    }
}

export default homeReducer;