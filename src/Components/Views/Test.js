import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';
import Tracker from './Tracker';
import FusionCharts from './FusionCharts';


class Test extends Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            vehicleData: null,
            coords: [],
            URL: null
        }
    }

    componentDidMount() {
        var self = this;
        console.log('-->Trigerring Test component will mount');
        var list = [];
        var VinValue = this.props.match.params.number;
        console.log(VinValue);
        if (VinValue) {
            const veURL = `http://localhost:8080/api/vreads/${VinValue}`;

            setInterval(function () {
                axios.get(veURL)
                    .then(function (response) {
                        if (response.data) {

                            // console.log("response data", response.data);
                            response.data.map(v => {
                                list.push({lat: v.latitude, lng: v.longitude})
                            })
                            self.setState({
                                coords: list,
                                URL: veURL,
                                vehicleData: list[list.length - 1]
                            })
                        }

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }, 3000);
        }

    }

    /*componentDidUpdate(){

            console.log("component did update",this.state.coords);
            if(this.state.flag) {
                this.setState({
                    // coords: list,
                    vehicleData: this.state.coords[this.state.coords.length - 1],
                    flag : false
                })
            }
        console.log(this.state.vehicleData);

    }*/
    render() {
        console.log("trigerred test render", this.state.vehicleData);
        var Centre = this.state.vehicleData || {lat: 0, lng: 0};
        console.log(this.state.coords);


        return (
            <div>

                <div style={{width: window.innerWidth, height: 400, background: 'red'}}>
                {/*<p> This is test page {this.props.match.params.number}</p>*/}


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
                {/* <FusionCharts url={this.state.URL}/>*/}

            </div>

        );
    }


}

export default Test;
