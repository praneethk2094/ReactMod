import React, {Component} from "react"
import PieChart from "react-svg-piechart"
import axios from 'axios';
import './PieC.css';
import AlertModal from "../Modals/AlertModal";

class PieC extends Component {
    constructor() {
        super();

        this.state = {
            data: [{label: "High Alerts", value: 0, color: "#3b5998"},
                {label: "Medium Alerts", value: 0, color: "#00aced"},
                {label: "Low Alerts", value: 0, color: "#dd4b39"}],
            expandedSector: null,
            vehicleAlert: null
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

                                data: [{label: "High Alerts", value: response.data.highAlert, color: "#3b5998"},
                                    {label: "Medium Alerts", value: response.data.mediumAlert, color: "#00aced"},
                                    {label: "Low Alerts", value: response.data.lowAlert, color: "#dd4b39"},]
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
        /* let high="30";
         let medium=40;
         let low=50;


         let alertList = this.state.vehicleAlert;
         if(this.state.vehicleAlert){
             console.log("in if loop");
             console.log(this.state.vehicleAlert.highAlert);
              high=this.state.vehicleAlert.highAlert;
              medium=this.state.vehicleAlert.mediumAlert;
              low=this.state.vehicleAlert.lowAlert;
             data = [
                 {label: "High Alerts", value:this.state.vehicleAlert.highAlert , color: "#3b5998"},
                 {label: "Medium Alerts", value: this.state.vehicleAlert.mediumAlert  , color: "#00aced"},
                 {label: "Low Alerts", value: this.state.vehicleAlert.lowAlert , color: "#dd4b39"},


             ];
         }*/


        /* let high = parseInt({this.state.vehicleAlert.highAlert});*/


        const {expandedSector, data} = this.state;
        console.log("in to Pie Diagram");

        return (


            <div className="pieChart">
                <PieChart

                    data={data}
                    expandedSector={expandedSector}
                    onSectorHover={this.handleMouseEnterOnSector}
                    sectorStrokeWidth={0.5}
                    expandOnHover
                    shrinkOnTouchEnd

                    /*viewBoxWidth="null"*/
                />
                <AlertModal vin={this.props.match.params.number}/>
                <div className="pieText">
                    {
                        data.map((element, i) => (
                            <div key={i}>

                                <span style={{fontWeight: this.state.expandedSector === i ? "bold" : null}}>
                                {element.label} : {element.value}
                            </span>
                            </div>
                        ))
                    }
                </div>
            </div>

        )
    }
}

export default PieC;