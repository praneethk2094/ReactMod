import React, {Component} from 'react';
import Vehicle from './../Vehicle/Vechicle'
import {Table} from 'reactstrap';

//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class VehicleList extends Component {
    render() {
        let VehicleItems;
        if(this.props.Vehicles) {
            VehicleItems = this.props.Vehicles.map(v => {
                return(
                   <Vehicle key={v.vin} vehicleData={v}/>
                )
            })
        }
        return (
            <div className="VehicleList">
                <Table striped>
                    <thead>
                    <tr>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                    </thead>
                    <tbody>

                       {VehicleItems}

                    </tbody>
                </Table>

            </div>
        );
    }
}

export default VehicleList;
