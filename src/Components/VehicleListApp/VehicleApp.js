import React, {Component} from 'react';
import axios from 'axios';
import VehicleList from './../VehicleList/VehicleList';

class VehicleApp extends Component {

    constructor() {
        super();
        this.state = {vehicleList: []};
    }

    componentDidMount() {
        var self = this;
        const vehicleURL = "http://localhost:8080/findAll";
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
    }

    render() {
        return (
            <div className="VehicleApp">
                <VehicleList vehicles={this.state.vehicleList}/>
            </div>
        );
    }
}

export default VehicleApp;