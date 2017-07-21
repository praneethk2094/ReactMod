import React, {Component} from 'react';
import {Chart} from 'react-google-charts';
import {Bar, Pie} from 'react-chartjs-2';

class NewChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: null

        }
    }

    componentDidMount() {

        this.setState({
            chartData: {
                labels: this.props.labels,
                datasets: [
                    {
                        label: this.props.name,
                        data: this.props.data,
                        backgroundColor: ['rgba(255,32,135,0.6)']
                    }
                ]
            }
        })
    }

    render() {
        console.log(this.props.labels, "volume: ", this.props.data);
        return (
            <div>

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
            </div>
        );
    }

}

export default NewChart;