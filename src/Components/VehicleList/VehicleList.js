import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class VehicleList extends Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: false  // disable sort indicator
        };
    }

    render() {

        let VehicleItems = this.props.vehicles;

        function showDescription(cell, row) {
            return cell.description;
        }

        return (

            <BootstrapTable data={VehicleItems} options={this.options} bordered={true} striped={true}>
                <TableHeaderColumn width="190" isKey dataField="vin" headerAlign='center' dataAlign='center'>Vehicle
                    Number</TableHeaderColumn>
                <TableHeaderColumn width="190" dataField="make" headerAlign='center'
                                   dataAlign='center'>Make</TableHeaderColumn>
                <TableHeaderColumn width="190" dataField="model" headerAlign='center'
                                   dataAlign='center'>Model</TableHeaderColumn>
                <TableHeaderColumn width="190" dataField="year" headerAlign='center'
                                   dataAlign='center'>Year</TableHeaderColumn>
                <TableHeaderColumn width="190" dataField="count" headerAlign='center' dataAlign='center' dataSort>High
                    Alerts</TableHeaderColumn>
            </BootstrapTable>

        );
    }
}

export default VehicleList;