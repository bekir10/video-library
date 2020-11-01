import SHOW_DATA from "./show.data"

const INITIAL_STATE ={
    tvShows : SHOW_DATA
}

const showReducer = (state = INITIAL_STATE,action) =>{
    switch (action.type) {
            default:
                return state;
    }
}

export default showReducer;