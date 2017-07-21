import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import AlertModal from './Components/Modals/AlertModal'
import VehicleApp from './Components/VehicleListApp/VehicleApp';
import PieC from './Components/PieChart/OldPieChart';
import PieChartJS from './Components/PieChart/PieChartJS';



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
                {/* <PieChartJS/>*/}



            </div>



        );
    }
}

export default App;
