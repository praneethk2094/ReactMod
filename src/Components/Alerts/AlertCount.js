import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';


class AlertCount extends Component {

    constructor(props) {
        super(props);

        this.options = {
            defaultSortName: 'timestamp',
            defaultSortOrder: 'asc'
        };
    }


    render() {
        console.log("3. AlertCount.js");

        let alertItems = this.props.alerts;

        /* function LinkedName(cell, row) {
             return <a href={`/list/${row.vin}`}>{cell}</a>;
         }*/
        function dateFormatter(cell, row) {
            console.log(row.timestamp);
            let serviceDate = row.timestamp;
            let dateFormat = require('dateformat');
            let formatDate = dateFormat(serviceDate);
            return <p>{formatDate}</p>;
        }

        return (

            <BootstrapTable data={alertItems} bordered={true} striped={true} pagination>


                <TableHeaderColumn width="190" isKey dataField="timestamp" headerAlign='center'
                                   dataAlign='center' dataSort dataFormat={dateFormatter}>Date</TableHeaderColumn>
                <TableHeaderColumn width="190" dataField="engineRpmAlert" headerAlign='center'
                                   dataAlign='center'>Engine RPM</TableHeaderColumn>
                <TableHeaderColumn width="190" dataField="fuelVolumeAlert" headerAlign='center'
                                   dataAlign='center'>Fuel Volume</TableHeaderColumn>
                <TableHeaderColumn width="190" dataField="tirePresuureAlert" headerAlign='center'
                                   dataAlign='center'>Tire Pressure</TableHeaderColumn>
                <TableHeaderColumn width="190" dataField="engineCoolantAlert" headerAlign='center'
                                   dataAlign='center'>Engine Coolant</TableHeaderColumn>
            </BootstrapTable>

        );
    }
}

export default AlertCount;
