import React, {Component} from 'react';
import Vehicle from './../Vehicle/Vechicle'
import {Table} from 'reactstrap';

//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class VehicleList extends Component {
    render() {
        let VehicleItems;
        if(this.props.vehicles) {
            VehicleItems = this.props.vehicles.map(v => {
                return(
                   <Vehicle key={v.vin} vehicleData={v}/>
                )
            })
        }
        return (
            <div className="VehicleList">
                <div className="container">
                    <h1> Vehicles List</h1>
                    <table className="table table-bordered">
                        <thead className="thead-inverse">
                        <tr>
                            <th>Vin</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                        </thead>
                        <tbody>{VehicleItems}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default VehicleList;
