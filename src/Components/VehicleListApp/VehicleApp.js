import React, {Component} from 'react';
import axios from 'axios';
import VehicleList from './../VehicleList/VehicleList'


class VehicleApp extends Component {

    constructor() {
        super();
        this.state = {vehicleList: []};
    }

    getInitialState() {
        return {
            vehicleList: {}
        }
    }

    componentDidMount() {
        var self = this;
        console.log('-->Trigerring XHR');
        const vehicleURL = "http://localhost:8080/api/vehicles/find";
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
        console.log('-->Mounted in render method');
        return (
            <div className="VehicleApp">
                <VehicleList vehicles={this.state.vehicleList}/>


            </div>
        );
    }
}

export default VehicleApp;