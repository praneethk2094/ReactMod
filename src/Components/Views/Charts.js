import React, {Component} from 'react';
import TimeSelect from 'react-time-select';
import {Chart} from 'react-google-charts';
import {SingleDatePicker} from 'react-dates'

class Charts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                title: ' vs. time comparison',
                hAxis: {title: 'Age'},
                vAxis: {title: 'Time', minValue: 0, maxValue: 15},
                legend: 'none',
            },
            data: [],
        };
    }

    /*handletime(){

        console.log(this.props.time);
        var date2= new Date(this.props.time);
        console.log("date2",date2.getHours()+"."+date2.getMinutes());
        var time=parseFloat(date2.getHours()+"."+date2.getMinutes());
      //  var hours =Math.abs(date1 - date2) / 36e5;
    return time;
      //  console.log("hours",hours);
    }
    componentWillMount(){
        console.log('in will mount cahrt');
        console.log(this.handletime(),"data",this.props.data);
        var list=[];
        list.push( ['hi', 'hi2']);
       var array=[];

       while(this.props.data){
           array.push(this.handletime());
           array.push(this.props.data);
       }

       list.push(array);
       console.log("array",array,"list: ",list);

    }*/
    componentWillMount() {
        var min = this.props.data[1][1];
        var max = this.props.data[this.props.data.length - 1][1];
        this.setState({
            options: {
                hAxis: {title: 'Age', minValue: min, maxValue: max},
                vAxis: {title: 'Time', minValue: 0, maxValue: 15},
                legend: 'none',
            }
        })
    }

    render() {
        console.log("in charts", this.props.data);
        return (
            <div>


                <Chart
                    chartType="LineChart"
                    data={this.props.data}
                    options={this.state.options}
                    graph_id="LineChart"
                    width="100%"
                    height="400px"
                    legend_toggle
                />
                <div>
                    <Chart
                        chartType="ScatterChart"
                        data={this.props.data}
                        options={this.state.options}
                        graph_id="ScatterChart"
                        width="100%"
                        height="400px"
                        legend_toggle
                    />
                </div>
            </div>
        );
    }
}

export default Charts;
