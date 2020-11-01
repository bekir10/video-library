import React from 'react';
import {Route} from "react-router-dom"
import HomePage from './pages/homepage/homepage.component';
import Header from "./component/header/header.component"
import Directory from "./component/directory/directory.component"
import ShowList from "./component/show/show-list.component"
import './App.css';
import  Movie1  from './component/movie-details/movie1.component';
import  Movie2  from './component/movie-details/movie2.component';
import  Movie3  from './component/movie-details/movie3.component';
import  Movie4  from './component/movie-details/movie4.component';
import  Movie5  from './component/movie-details/movie5.component';
import  Movie6  from './component/movie-details/movie6.component';
import  Movie7  from './component/movie-details/movie7.component';
import  Movie8  from './component/movie-details/movie8.component';
import  Movie9  from './component/movie-details/movie9.component';
import  Movie10  from './component/movie-details/movie10.component';

import  Show1  from './component/show-details/show1.component';
import  Show2 from './component/show-details/show2.component';
import  Show3 from './component/show-details/show3.component';
import  Show4 from './component/show-details/show4.component';
import  Show5 from './component/show-details/show5.component';
import  Show6 from './component/show-details/show6.component';
import  Show7 from './component/show-details/show7.component';
import  Show8 from './component/show-details/show8.component';
import  Show9 from './component/show-details/show9.component';
import  Show10 from './component/show-details/show10.component';





function App () {
  
    return (
      <div >
        <Header></Header>
        <Route exact path="/movies" component={Directory}></Route>
        <Route  path="/movie1" component={Movie1}></Route>
        <Route  path="/movie2" component={Movie2}></Route>
        <Route  path="/movie3" component={Movie3}></Route>
        <Route  path="/movie4" component={Movie4}></Route>
        <Route  path="/movie5" component={Movie5}></Route>
        <Route  path="/movie6" component={Movie6}></Route>
        <Route  path="/movie7" component={Movie7}></Route>
        <Route  path="/movie8" component={Movie8}></Route>
        <Route  path="/movie9" component={Movie9}></Route>
        <Route  path="/movie10" component={Movie10}></Route>

        <Route exact path="/shows" component={ShowList}></Route>
        <Route  path="/show1" component={Show1}></Route>
        <Route  path="/show2" component={Show2}></Route>
        <Route  path="/show3" component={Show3}></Route>
        <Route  path="/show4" component={Show4}></Route>
        <Route  path="/show5" component={Show5}></Route>
        <Route  path="/show6" component={Show6}></Route>
        <Route  path="/show7" component={Show7}></Route>
        <Route  path="/show8" component={Show8}></Route>
        <Route  path="/show9" component={Show9}></Route>
        <Route  path="/show10" component={Show10}></Route>


        


      </div>
    );
  
}

export default App;