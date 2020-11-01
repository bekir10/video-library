import React from "react"
import {connect} from "react-redux"
import {createStructuredSelector} from "reselect"
import "../movie-details/movie1.styles.css"
import {selectShows} from "../../redux/shows/show.selectors"


  const Show10 =({twShows}) =>(
    
    <div>
       
             <div className="image1">
             <img src={`https://image.tmdb.org/t/p/w780/uAjMQlbPkVHmUahhCouANlHSDW2.jpg`} alt="movie"/>
             </div> 
                 
             <div className="movie1">     
             <h2>{twShows[9].name}</h2>
             </div>

             <div className="collection-footer">
            
             <div>
               <b>Movie Overview :</b> {twShows[9].overview}
             </div>

             </div>
    
    </div>
    )
   
    const mapStateToProps = createStructuredSelector({
        twShows:selectShows        
    })
    export default connect(mapStateToProps)(Show10);
    