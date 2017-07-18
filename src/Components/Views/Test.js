import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import Tracker from './Tracker';
class Test extends Component {
constructor(){
    super();
    this.state={
        coords:[
            { lat: 40.728199, lng: -73.9894738 },
            { lat: 50.728199, lng: -93.9894738 },
            { lat: 60.728199, lng: -73.9894738 }
        ]
    }
}


    render() {

        return (

       <div style={{width: window.innerWidth, height:400, background:'red'}}>
             {/*<p> This is test page {this.props.match.params.number}</p>*/}

<Tracker
    zoom={12}
    centre={{ lat: 40.728199, lng: -73.9894738 }}
    containerElement={
        <div style={{ height: `100%` }} />
    }
    mapElement={
        <div style={{ height: `100%` }} />
    }
    coords={this.state.coords}
/>


         </div>

        );
    }
}

export default Test;
