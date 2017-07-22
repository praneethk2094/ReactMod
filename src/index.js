import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
/*import {Router,Route,IndexRoute,Link} from 'react-router';*/
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Details from './Components/Views/Details';




ReactDOM.render((

    <BrowserRouter>

        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/list/:number' component={Details}/>


        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
