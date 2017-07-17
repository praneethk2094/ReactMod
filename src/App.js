import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import VehicleList from './Components/VehicleList/VehicleList';
/*import {Link} from 'react-router-dom';*/
class App extends Component {
constructor(){
    super();
    this.state={
      Vehicles : null
    }

}

    componentWillMount(){
    let self=this;
        console.log("Component mounted");
        const VehicleURL="http://localhost:8080/vehicles/find";
        axios.get(VehicleURL)
            .then(function(response){
                console.log(response);
                if (response.data){
                    self.setState({
                        Vehicles: response.data
                    })
                }

            })
            .catch(function(error){

            });
    }

  render() {
        console.log("component rendered");
       // console.log(this.state.Vehicles)
    return (
      <div className="App">
          <div className="App-header">
              <h2>Welcome to React</h2>
          </div>
          <div><p className="App-intro">
              <VehicleList Vehicles={this.state.Vehicles}/>

          </p>
          </div>
      </div>
  );
  }
}

export default App;
