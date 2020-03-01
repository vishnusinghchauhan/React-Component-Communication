import React from 'react';
import { BrowserRouter, Route, Switch,   Redirect} from 'react-router-dom';

import Posts from './components/Posts'

const routing = () => (
    <div>
     <BrowserRouter>
	    <Switch>
   			<Route exact path="/" component={Posts} label="Posts"/>
	    </Switch>
       </BrowserRouter>
    </div>
)
export default routing;