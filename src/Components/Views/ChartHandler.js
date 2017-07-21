import React, {Component} from 'react';

import axios from 'axios';
import Charts from "./Charts";
import NewChart from "../Chart/Chart";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap';

class FusionCharts extends Component {
    constructor() {
        super();
        this.state = {
            dropdown: null,
            button: false,
            vehicleList: null,
            date: null,
            flag: true,
            dropdownOpen: false
        }
    }

    handledate(event) {
        console.log("handle date called", event.target.value);
        this.setState({
            date: event.target.value
        })
    }

    handletime(timestamp) {

        var date = new Date(timestamp);
        var time = new Date(date.getTime()).toLocaleString();
        return time;
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleDropdownSelect(event) {
        console.log("event", event.target.value);
        this.setState({
            dropdown: event.target.value
        })
    }

    handleButton(event) {
        console.log("event", event.target.value);
        this.setState({
            button: !this.state.button,
            flag: true
        })
    }


    render() {

        let VehicleReadings;
        if (this.state.vehicleList) {
            console.log("in function");
            var time = [];
            var volume = [];
            //   var selection=parseInt(this.state.dropdown);
            switch (this.state.dropdown) {
                case "Fuel Volume":
                    console.log("selection 1");
                    VehicleReadings = this.state.vehicleList.map(v => {
                        time.push(this.handletime(v.timestamp));
                        volume.push(v.fuelVolume);

                    })
                    break;
                case "Speed":
                    console.log("selection 2");
                    VehicleReadings = this.state.vehicleList.map(v => {
                        time.push(this.handletime(v.timestamp));
                        volume.push(v.speed);

                    })
                    break;
                case "Engine HP":
                    console.log("selection 3");
                    VehicleReadings = this.state.vehicleList.map(v => {
                        time.push(this.handletime(v.timestamp));
                        volume.push(v.engineHp);

                    })
                    break;
                case "Engine RPM":
                    console.log("selection 4");
                    VehicleReadings = this.state.vehicleList.map(v => {
                        time.push(this.handletime(v.timestamp));
                        volume.push(v.engineRpm);

                    })
                    break;

            }
            /* VehicleReadings = this.state.vehicleList.map(v => {
                 time.push(this.handletime(v.timestamp));
                 volume.push(v.fuelVolume);
             })*/
            return (
                <NewChart labels={time} data={volume} name={this.state.dropdown}/>
            )

        }

        return (
            <div>
                {/*<div style={{width: 600, height: 400, background: 'blue'}}>*/}
                <input type="datetime-local" onChange={this.handledate.bind(this)}/>

                <Dropdown isOpen={this.state.dropdownOpen}
                          toggle={this.toggle.bind(this)}

                >
                    <DropdownToggle caret
                                    data-toggle="dropdown"
                                    aria-haspopup={true}
                                    color="#ff0000"

                    >
                        Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={this.handleDropdownSelect.bind(this)} value={"Fuel Volume"}>Fuel
                            Volume</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownSelect.bind(this)}
                                      value={"Speed"}>Speed</DropdownItem>
                        <DropdownItem header>Engine Properties</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownSelect.bind(this)} value={"Engine HP"}>Engine
                            HP</DropdownItem>
                        <DropdownItem onClick={this.handleDropdownSelect.bind(this)} value={"Engine RPM"}>Engine
                            RPM</DropdownItem>
                        <DropdownItem divider/>
                    </DropdownMenu>
                </Dropdown>
                <Button color="primary" onClick={this.handleButton.bind(this)}>primary</Button>
                <div>
                    {VehicleReadings}
                </div>
            </div>
        );

    }


    componentWillUpdate(nextProps, nextState) {

        console.log("date", nextState.date);
        if (nextState.button != this.state.button && nextState.flag) {
            var self = this;
            console.log('-->Trigerring component did Mount');
            const url = this.props.url.concat("?time=" + nextState.date);
            console.log(url);
            setInterval(function () {
                axios.get(url)
                    .then(function (response) {
                        if (response.data) {
                            console.log(response.data);
                            /* if (nextState.flag) {*/

                            self.setState({
                                vehicleList: response.data,
                                flag: false,
                            })
                            /* }*/
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }, 3000);
        }

    }
}

export default FusionCharts;