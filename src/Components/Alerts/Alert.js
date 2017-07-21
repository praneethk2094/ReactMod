import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';
import AlertCount from './../Alerts/AlertCount';

/*import Tracker from './Tracker';*/
class Alert extends Component {
    constructor() {
        super();
        this.state = {
            alertList: []
        }
    }

    /* componentWillMount() {
         var self = this;
         console.log('-->Trigerring TesT component will mount');
         var vin = this.props.vin;
         if (vin) {
             setInterval(function(){

                 const alertURL = `http://localhost:8080/Alerts/${vin}`;
             axios.get(alertURL)
                 .then(function (response) {
                     if (response.data) {

                         self.setState({
                             alertList: response.data
                             // vehicleData: list[list.length-1]
                         })
                     }

                 })
                 .catch(function (error) {
                     console.log(error);
                 });
             },1000);
         }

     }*/


    render() {
        return (
            <div className="VehicleApp">
                {/* <AlertCount alerts={this.state.alertList}/>*/}
            </div>
        );
    }

}

export default Alert;