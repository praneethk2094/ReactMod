import axios from 'axios';
import React, {Component} from "react";
import {Pie} from 'react-chartjs-2';
import AlertModal from "../Modals/AlertModal";
import './PieC.css';


class PieChartJS extends Component {

    constructor() {
        super();

        this.state = {
            data: {
                labels: ['High Alerts',
                    'Medium Alerts',
                    'Low Alerts'
                ],
                datasets: [{
                    data: [0, 0, 0],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]

            }

        };

        this.handleMouseEnterOnSector = this.handleMouseEnterOnSector.bind(this)
    }

    handleMouseEnterOnSector(sector) {
        this.setState({expandedSector: sector})
    }

    componentDidMount() {
        var self = this;
        var vin = this.props.match.params.number;
        if (vin) {
            const vehicleURL = `http://localhost:8080/find/vehicles/${vin}`;
            setInterval(function () {

                axios.get(vehicleURL)
                    .then(function (response) {
                        if (response.data) {
                            self.setState({

                                data: {
                                    labels: ['High Alerts',
                                        'Medium Alerts',
                                        'Low Alerts'
                                    ],
                                    datasets: [{
                                        data: [response.data.highAlert, response.data.mediumAlert, response.data.lowAlert],
                                        backgroundColor: [
                                            '#ED0404',
                                            '#36A2EB',
                                            '#FFCE56'
                                        ],
                                        hoverBackgroundColor: [
                                            '#ED0404',
                                            '#36A2EB',
                                            '#FFCE56'
                                        ]
                                    }]

                                }
                            })

                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                console.log("inside");

            }, 1000);
        }

    }


    render() {

        return (
            <div className="pieChart">
                <div>Vehicle Historical Alerts</div>
                <Pie data={this.state.data}/>
                <AlertModal vin={this.props.match.params.number}/>
            </div>
        );
    }
}

export default PieChartJS;

