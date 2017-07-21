import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
/*import {Router,Route,IndexRoute,Link} from 'react-router';*/
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import VehicleApp from './Components/VehicleListApp/VehicleApp';
import Details from './Components/Views/Details';

ReactDOM.render((

    <BrowserRouter>

        <Switch>
            <Route exact path='/' component={App}/>
            {/* both /roster and /roster/:number begin with /roster */}
            <Route path='/list/:number' component={Details}/>

        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
