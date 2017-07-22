import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Polyline, Marker} from 'react-google-maps';


class Tracker extends Component {


    render() {

        const cordinate = this.props.coords || [];

        return (

            <GoogleMap

                defaultZoom={this.props.zoom}
                center={this.props.center}
            >
                <Polyline
                    path={cordinate}
                    key={Date.now() + Math.random()}
                    /* options={{
                         strokeColor: '#babfc7',
                         strokeOpacity: 0.28,
                         strokeWeight: 1,
                     }}*/
                />
                <Marker
                    position={this.props.center}
                />
            </GoogleMap>

        );
    }
}

export default withGoogleMap(Tracker);