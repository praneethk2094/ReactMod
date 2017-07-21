import axios from 'axios';
import React, {Component} from "react";
import {Pie, Bar} from 'react-chartjs-2';
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
                        '#ED0404',
                        '#ed9b04',
                        '#04ED55'
                    ],
                    hoverBackgroundColor: [
                        '#ED0404',
                        '#ed9b04',
                        '#04ED55'
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
                                            '#ed9b04',
                                            '#04ED55'
                                        ],
                                        hoverBackgroundColor: [
                                            '#ED0404',
                                            '#ed9b04',
                                            '#04ED55'
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
                <h1 className="heading">Vehicle Historical Alerts</h1>
                <hr></hr>
                <Pie data={this.state.data}/>
                <AlertModal vin={this.props.match.params.number}/>
            </div>
        );
    }
}

export default PieChartJS;

