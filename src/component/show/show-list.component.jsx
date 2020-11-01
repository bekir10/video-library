import React from "react";
import {connect} from "react-redux"
import MovieList from "../movie/movie-list.component"
import {SearchBox} from "../../component/search-box/search-box.component"
import {selectShows} from "../../redux/shows/show.selectors"
import {createStructuredSelector} from "reselect"
import "./show-list.styles.css"

     const ShowList = ({tvShows,history}) =>(
         <div>
         <div>
        <SearchBox
         placeholder="search " 
         > 
         </SearchBox>
         </div>
      
    <div className="show-list">
        
        {
                 tvShows.filter((item,idx) => idx < 10)
                 .map(({id, ...otherCollectionProps}) => (
                     <MovieList history={history} key={id} {...otherCollectionProps}></MovieList>
        
                 ))
             }
      </div>  
      </div>
     )
     const mapStateToProps = createStructuredSelector({
        tvShows: selectShows
        
    })
    export default connect(mapStateToProps)(ShowList)



