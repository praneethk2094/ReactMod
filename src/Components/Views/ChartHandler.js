import React, {Component} from 'react';
import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';
import axios from 'axios';
import Chart from "../Chart/Chart";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap';

class FusionCharts extends Component {
    openModal = () => {
        this.setState({
            isOpen: true
        });
    };
    hideModal = () => {
        this.setState({
            isOpen: false
        });
    };

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

    constructor() {
        super();
        this.state = {
            dropdown: null,
            button: false,
            vehicleList: null,
            date: null,
            flag: true,
            dropdownOpen: false,
            selection: "Select",
            isOpen: false
        }
    }

    handledate(event) {

        this.setState({
            date: event.target.value
        })
    }

    handleDropdownSelect(event) {

        this.setState({
            dropdown: event.target.value,
            selection: event.target.value
        })
    }

    handleButton(event) {

        this.setState({
            button: !this.state.button,
            flag: true
        })
    }

    render() {

        let VehicleReadings;
        if (this.state.vehicleList) {

            var time = [];
            var volume = [];

            switch (this.state.dropdown) {
                case "Fuel Volume":

                    VehicleReadings = this.state.vehicleList.map(v => {
                        time.push(this.handletime(v.timestamp));
                        volume.push(v.fuelVolume);

                    })
                    break;
                case "Speed":

                    VehicleReadings = this.state.vehicleList.map(v => {
                        time.push(this.handletime(v.timestamp));
                        volume.push(v.speed);

                    })
                    break;
                case "Engine HP":

                    VehicleReadings = this.state.vehicleList.map(v => {
                        time.push(this.handletime(v.timestamp));
                        volume.push(v.engineHp);

                    })
                    break;
                case "Engine RPM":

                    VehicleReadings = this.state.vehicleList.map(v => {
                        time.push(this.handletime(v.timestamp));
                        volume.push(v.engineRpm);

                    })
                    break;

            }

            return (
                <div>
                    <div>
                        <Modal isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>

                            <ModalBody>

                                <Chart labels={time} data={volume} name={this.state.dropdown}/>
                            </ModalBody>
                            <ModalFooter>
                                <button className='btn btn-primary' onClick={this.hideModal()}>
                                    Close
                                </button>


                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            )

        }

        return (
            <div>
                From <input type="datetime-local" onChange={this.handledate.bind(this)}/><br/>

                Of <Dropdown isOpen={this.state.dropdownOpen}
                          toggle={this.toggle.bind(this)}
                >
                <DropdownToggle caret>
                    {this.state.selection}
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
            </Dropdown><br/><br/>
                <Button color="primary" onClick={this.handleButton.bind(this)}>Chart It!!</Button>
                <div>
                    {VehicleReadings}
                </div>
            </div>
        );

    }


    componentWillUpdate(nextProps, nextState) {

        console.log("date", nextState.date);
        if (nextState.button != this.state.button && nextState.flag && nextState.flag) {
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