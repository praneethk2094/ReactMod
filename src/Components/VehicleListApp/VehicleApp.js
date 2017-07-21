import React, {Component} from 'react';
import axios from 'axios';
import VehicleList from './../VehicleList/VehicleList';
import PieC from "../PieChart/OldPieChart";

class VehicleApp extends Component {

    constructor() {
        super();
        this.state = {vehicleList: []};
    }

    componentWillMount() {
        var self = this;
        const vehicleURL = "http://localhost:8080/findAll";
        setInterval(function () {

            axios.get(vehicleURL)
                .then(function (response) {
                    if (response.data) {
                        self.setState({
                            vehicleList: response.data
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            console.log("inside");

        }, 1000);

    }

    render() {
        console.log("1. Vehicle.js");
        return (
            <div className="VehicleApp">
                <VehicleList vehicles={this.state.vehicleList}/>
                {/*   <PieC vehicleAlerts = {this.state.vehicleList}/>*/}
            </div>
        );
    }
}

export default VehicleApp;