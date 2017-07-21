import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import {withGoogleMap, GoogleMap, Polyline, Marker} from 'react-google-maps';


class Tracker extends Component {


    render() {
        console.log("Trakcer Rendered");

        const cordinate = this.props.coords || [];
        /*let setCenter ={lat:0,lng:0};
        if(this.props.center) {
            setCenter= this.props.center[this.props.center.length - 1] ;
        }*/
        return (

            <GoogleMap
                /*ref={this.mapLoaded.bind(this)}
               onDragEnd={this.mapMoved.bind(this)}*/
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}
            >
                <Polyline
                    path={cordinate}
                    key={Date.now() + Math.random()}
                />
            </GoogleMap>

        );
    }
}

export default withGoogleMap(Tracker);