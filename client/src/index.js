//library
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import { createStore } from "redux";
import { Provider } from "react-redux"
import reducers from "./reducers/index";

//pages
import Home from "./component_pages/Home/Home";
import Detail from "./component_pages/Detail/Detail";
import NoMatch from "./component_pages/NoMatch/NoMatch";


var store = createStore(reducers);

ReactDOM.render(
	<Provider store={store}>
	   	<Router history={browserHistory} >
	   		<Route path="/" component={Home} />
	   		<Route path="/pokemon/:id" component={Detail} />
			<Route path="*" component={NoMatch}/>
	  	</Router>
	 </Provider>
  , document.getElementById('root')
);
