import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import VehicleApp from './Components/VehicleListApp/VehicleApp';
/*import {Link} from 'react-router-dom';*/
import Test from './Components/Views/Test';
import VehicleList from "./Components/VehicleList/VehicleList";
class App extends Component {
    render() {
        console.log("into app")
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-body">
                    <VehicleApp/>

                </div>

            </div>

        );
    }
}

export default App;
