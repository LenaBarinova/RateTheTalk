import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class Feedback extends Component {
  render() {
    var chartData = [
      ['Feedback', 'Count', { 'role': 'style' }],
      ['OK', 20, 'color:#8cd790'],
      ['KO', 5, 'color:#f06292']];

    var options = {
      'title': 'Feedback',
      'bar': { 'groupWidth': '95%' },
      'legend': { 'position': 'none' },
      'backgroundColor': '#FFFFFF',
      'titleTextStyle': {
        'color': '#2E294E',
        'fontSize': 40,
        'fontName': 'Raleway'
      }
    };
    return (
      <Chart
        chartType='BarChart'
        data={chartData}
        options={options}
        graph_id='BarChart'
        width={'100%'}
        height={'400px'}>
      </Chart>
    );
  }
}

export default Feedback;