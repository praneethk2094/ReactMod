import React, {Component} from 'react';


import {Bar} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: null

        }
    }

    componentDidMount() {
        var i = this.props.labels.length;
        var colors = [];
        while (i !== 0) {
            colors.push('rgba(70,191,63,0.6)');
            i--;
        }
        this.setState({
            isOpen: true,
            chartData: {
                labels: this.props.labels,
                datasets: [
                    {
                        label: this.props.name,
                        data: this.props.data,
                        backgroundColor: colors
                    }
                ]
            }
        })
    }

    render() {
        console.log(this.props.labels, "volume: ", this.props.data, this.state.isOpen);
        return (

            <Bar
                data={this.state.chartData}
                width={100}
                height={50}
                options={{
                    title: {
                        display: true,
                        text: this.props.name + ' Vs Time Chart'
                        //  fontSize:28
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }
                }
            />

        );
    }

}

export default Chart;