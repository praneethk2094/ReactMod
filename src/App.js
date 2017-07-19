import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import VehicleApp from './Components/VehicleListApp/VehicleApp';


/*import {Link} from 'react-router-dom';*/
class App extends Component {
    render() {
        console.log("into app")
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Vehicle List</h2>
                </div>

                <VehicleApp/>

            </div>

        );
    }
}

export default App;
