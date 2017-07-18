import React, { Component } from 'react';
//import {Table} from 'reactstrap';
import {Link} from 'react-router-dom';
class Vehicle extends Component {
    render() {
        return (

                <tr>
                    <Link to={`/list/${this.props.vehicleData.vin}`}>
                        <td>{this.props.vehicleData.vin}</td>
                    </Link>
                <td >{this.props.vehicleData.make}</td>
                <td>{this.props.vehicleData.model}</td>
                <td>{this.props.vehicleData.year}</td>

                </tr>

        );
    }
}

export default Vehicle;
