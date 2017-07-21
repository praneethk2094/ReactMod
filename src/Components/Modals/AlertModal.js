import {
    Modal,
    ModalHeader,
    ModalTitle,
    ModalClose,
    ModalBody,
    ModalFooter
} from 'react-modal-bootstrap';
import React, {Component} from "react";
import AlertCount from './../Alerts/AlertCount';
import axios from 'axios';


class AlertModal extends React.Component {
    state = {
        isOpen: false,
        isSubOpen: false
    };
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

    constructor() {
        super();
        this.state = {
            alertList: []
        }
    }

    componentDidMount() {
        var self = this;
        var vin = this.props.vin;
        console.log(vin);
        if (vin) {
            setInterval(function () {

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
            }, 3000);
        }

    }

    render() {
        let subModalDialogStyles = {
            base: {
                bottom: -600,
                transition: 'bottom 0.4s'
            },
            open: {
                bottom: 0
            }
        };
        console.log("4.AlertModal.js");
        return (
            <div className='layout-page'>
                <main className='layout-main'>
                    <div className='container'>
                        <button className='btn btn-primary' onClick={this.openModal}>
                            View Historical Alerts
                        </button>

                        <Modal isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
                            <ModalHeader>
                                <ModalClose onClick={this.hideModal}/>
                                <ModalTitle>Historical Alerts</ModalTitle>
                            </ModalHeader>
                            <ModalBody>
                                <hr/>

                                <AlertCount alerts={this.state.alertList}/>

                            </ModalBody>
                            <ModalFooter>
                                <button className='btn btn-default' onClick={this.hideModal}>
                                    Close
                                </button>
                                <button className='btn btn-primary'>

                                </button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </main>
            </div>
        );
    }
}


export default AlertModal;