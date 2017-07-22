import React, {Component} from 'react';
import axios from 'axios';
import VehicleList from './VehicleList';


class VehicleApp extends Component {

    constructor() {
        super();
        this.state = {vehicleList: []};
    }

    componentWillMount() {
        var self = this;
        const vehicleURL = "http://localhost:8080/api/vehicles/find";
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


        }, 1000);

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