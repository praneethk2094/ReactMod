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
        setInterval(function () {
            axios.get(vehicleURL)
                .then(function (response) {
                    if (response.data) {
                        console.log(response.data);
                        self.setState({
                            vehicleList: response.data
                        })
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }, 300000);
    }

    render() {
        console.log('-->Mounted in render method');
        console.log(this.state.vehicleList);
        return (
            <div className="VehicleApp">
                <VehicleList vehicles={this.state.vehicleList}/>


            </div>
        );
    }
}

export default VehicleApp;