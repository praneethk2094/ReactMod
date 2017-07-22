import React, {Component} from 'react';
import './Display.css'
import axios from 'axios';
import Tracker from './Tracker';
import ChartHandler from './ChartHandler';
import PieChartJS from "../PieChart/PieChartJS";
import Background from './../../Images/background.jpeg'


class Details extends Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            vehicleData: null,
            coords: [],
            URL: null,
            vin: null
        }
    }

    componentDidMount() {
        var self = this;

        var list = [];
        var VinValue = this.props.match.params.number;
        if (VinValue) {
            const veURL = `http://localhost:8080/api/vreads/${VinValue}`;
            console.log(veURL);
            setInterval(function () {
                axios.get(veURL)
                    .then(function (response) {
                        if (response.data) {

                            response.data.map(v => {
                                list.push({lat: v.latitude, lng: v.longitude})
                            })
                            self.setState({
                                coords: list,
                                URL: veURL,
                                vehicleData: list[list.length - 1],

                            })
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }, 1000);
        }

    }

    render() {
        var divStyle = {
            backgroundImage: 'url(' + Background + ')',
            backgroundSize: 800
        }
        var Centre = this.state.vehicleData || {lat: 0, lng: 0};


        return (
            <div>
                <div id="container">
                    <div className="Display-header">
                        <PieChartJS vin={this.props.match.params.number}/>
                    </div>
                    <div className="Display-button" style={divStyle}>
                        <ChartHandler url={this.state.URL}/>
                    </div>
                </div>

                <div className="Display-map">
                    <Tracker
                        zoom={12}
                        center={Centre}
                        containerElement={
                            <div style={{height: `100%`}}/>
                        }
                        mapElement={
                            <div style={{height: `100%`}}/>
                        }
                        coords={this.state.coords}
                    />
                </div>

            </div>


        );
    }


}

export default Details;