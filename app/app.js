// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';


import Main from "./components/Main";
import Search from "./components/children/Search";
import Results from "./components/children/Results";


// ----------------------------
// render routes
// ----------------------------


const router = (

    <HashRouter>


	        <Route path="/" component={Main}>

	        </Route>


    </HashRouter>
);

ReactDOM.render(router, document.getElementById('app'));