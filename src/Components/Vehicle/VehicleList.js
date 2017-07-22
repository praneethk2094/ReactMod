import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class VehicleList extends Component {

    constructor(props) {
        super(props);

        this.options = {
            defaultSortName: 'count',
            defaultSortOrder: 'desc'
        };
    }

    render() {

        let VehicleItems = this.props.vehicles;

        function LinkedName(cell, row) {
            return <a href={`/list/${row.vin}`}>{cell}</a>;
        }


        return (

            <BootstrapTable data={VehicleItems} options={this.options} bordered={true} striped={true} pagination>


                <TableHeaderColumn width="190" isKey dataField="vin" dataFormat={LinkedName} headerAlign='center'
                                   dataAlign='center'>Vehicle
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