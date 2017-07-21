import React, {Component} from 'react';
import {Chart} from 'react-google-charts';
import {Bar} from 'react-chartjs-2';

class NewChart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: null

        }
    }

    componentWillMount() {
        this.setState({
            chartData: {
                labels: this.props.labels,
                datasets: [
                    {
                        label: 'populaiton',
                        data: this.props.data,
                        backgroundColor: [
                            'rgba(255,99,132,0.6)'
                        ]
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
                    /* options={{
                         maintainAspectRatio: false
                     }}*/
                />
            </div>
        );
    }

}

export default NewChart;