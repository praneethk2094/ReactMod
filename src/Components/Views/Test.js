import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import axios from 'axios';
import Tracker from './Tracker';
class Test extends Component {
    constructor() {
        super();
        this.state = {
            //  vehicleData: null,
            coords: []
        }
    }

    componentWillMount() {
        var self = this;
        console.log('-->Trigerring TesT component will mount');
        var list = [];
        var VinValue = this.props.match.params.number;
        console.log(VinValue);
        if (VinValue) {
            const veURL = `http://localhost:8080/api/vreads/${VinValue}`;
            axios.get(veURL)
                .then(function (response) {
                    if (response.data) {

                        console.log("response data", response.data);
                        response.data.map(v => {
                            list.push({lat: v.latitude, lng: v.longitude})
                        })
                        self.setState({
                            coords: list,
                            // vehicleData: list[list.length-1]
                        })
                    }

                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }


    render() {
        console.log("triggered render");

        var Centre = {lat: 0, lng: 0};


        return (

            <div style={{width: window.innerWidth, height: 400, background: 'red'}}>
                {/*<p> This is test page {this.props.match.params.number}</p>*/}


                <Tracker
                    zoom={2}
                    centre={Centre}
                    containerElement={
                        <div style={{height: `100%`}}/>
                    }
                    mapElement={
                        <div style={{height: `100%`}}/>
                    }
                    coords={this.state.coords}
                />


            </div>

        );
    }


}

export default Test;
