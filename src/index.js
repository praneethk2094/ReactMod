import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
/*import {Router,Route,IndexRoute,Link} from 'react-router';*/
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AlertModal from './Components/Modals/AlertModal';
import PieChartJS from './Components/PieChart/PieChartJS';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
/*import {Router,Route,IndexRoute,Link} from 'react-router';*/
import {BrowserRouter, Switch, Route} from 'react-router-dom'


ReactDOM.render((

    <BrowserRouter>

        <Switch>
            <Route exact path='/' component={App}/>

            <Route path='/list/:number' component={Details}/>
            {/*     <Route path='/list/:number' component={PieChartJS}/>*/}

        </Switch>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
