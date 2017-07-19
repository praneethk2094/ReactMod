import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import { withGoogleMap, GoogleMap, Polyline,Marker} from  'react-google-maps';


class Tracker extends Component {

    render() {
        const cordinate=this.props.coords || [];

        return (

            <GoogleMap
                /*ref={this.mapLoaded.bind(this)}
               onDragEnd={this.mapMoved.bind(this)}*/
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.centre}
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