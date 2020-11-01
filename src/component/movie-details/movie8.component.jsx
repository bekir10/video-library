
import React from "react"
import {connect} from "react-redux"
import {selectCollections} from "../../redux/home/home.selectors"
import {createStructuredSelector} from "reselect"
import "./movie1.styles.css"


const Movie8 =({collections}) =>(

    <div>
       
             <div className="image1">
             <img src={`https://image.tmdb.org/t/p/w780/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg`} alt="movie"/>
             </div> 
                 
             <div className="movie1">     
             <h2>{collections[7].title}</h2>
             </div>

             <div className="collection-footer">
            
             <div>
               <b>Movie Overview :</b> {collections[7].overview}
             </div>

             </div>
    
    </div>
    )

    const mapStateToProps = createStructuredSelector({
        collections:selectCollections
        
    })
    export default connect(mapStateToProps)(Movie8);
    