import React from "react";
import {connect} from "react-redux"
import MovieList from "../movie/movie-list.component"
import {SearchBox} from "../../component/search-box/search-box.component"
import {selectCollections} from "../../redux/home/home.selectors"

import {createStructuredSelector} from "reselect"
import "./directory.styles.css"

const Directory = ({collections,history,tvShows}) =>(
    <div>
    <div>

         <SearchBox
         placeholder="search " 
         > 
         </SearchBox>
    </div>
         <div className="directory-list">

          

       
             {
                 collections.filter((item,idx) => idx < 10)
                 .map(({id, ...otherCollectionProps}) => (
                     <MovieList history={history} key={id} {...otherCollectionProps}></MovieList>
        
                 ))
             }
             
             
             
    </div>
    </div>
)



const mapStateToProps = createStructuredSelector({
    collections:selectCollections,
   
    
})

export default connect(mapStateToProps)(Directory);