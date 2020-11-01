
import React from "react"
import {connect} from "react-redux"
import {selectCollections} from "../../redux/home/home.selectors"
import {createStructuredSelector} from "reselect"
import "./movie1.styles.css"


const Movie7 =({collections}) =>(

    <div>
       
             <div className="image1">
             <img src={`https://image.tmdb.org/t/p/w780/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg`} alt="movie"/>
             </div> 
                 
             <div className="movie1">     
             <h2>{collections[6].title}</h2>
             </div>

             <div className="collection-footer">
            
             <div>
               <b>Movie Overview :</b> {collections[6].overview}
             </div>

             </div>
    
    </div>
    )

    const mapStateToProps = createStructuredSelector({
        collections:selectCollections
        
    })
    export default connect(mapStateToProps)(Movie7);
    