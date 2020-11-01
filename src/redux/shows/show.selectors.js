import {createSelector} from "reselect";

const selectShow = state =>state.show

export const selectShows = createSelector(
    [selectShow],
    show => show.tvShows
)