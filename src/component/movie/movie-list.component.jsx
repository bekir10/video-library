import React from "react"
import "./movie-list.styles.css"
import {withRouter} from "react-router-dom"

     const MovieList = ({title,name,backdrop_path,linkUrl,history,match}) =>(
      
    <div className="card-container" onClick ={ () => history.push(`${linkUrl}`) }>
        
        <img src={`https://image.tmdb.org/t/p/w400/`+(backdrop_path)} alt="movie"/>
        <h2>{title}{name}</h2>
   
    </div>
     )
export default withRouter(MovieList)




