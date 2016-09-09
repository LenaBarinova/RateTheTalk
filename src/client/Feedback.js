import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

class Feedback extends Component {
  render() {
    var options = {
      'title': 'Feedback',
      'bar': { 'groupWidth': '95%' },
      'legend': { 'position': 'none' },
      'tooltip': {'trigger': 'none'},
      'backgroundColor': '#FFFFFF',
      'titleTextStyle': {
        'color': '#2E294E',
        'fontSize': 40,
        'fontName': 'Raleway'
      },
      'hAxis': {
        'textStyle': {
          'color': '#2E294E',
          'fontSize': 20,
          'fontName': 'Raleway'
        },
        'title': 'Number of responses',
        'titleTextStyle': {
          'color': '#2E294E',
          'fontSize': 20,
          'fontName': 'Raleway'
        },
        'minValue': 0,
        'maxValue': 15
      },
      'vAxis': {
        'textStyle': {
          'color': '#2E294E',
          'fontSize': 20,
          'fontName': 'Raleway',
          'bold': true
        }
      }
    };
    if (this.props.data) {
      return (
        <Chart
          chartType='BarChart'
          data={this.props.data}
          options={options}
          graph_id='BarChart'
          width={'100%'}
          height={'400px'}>
        </Chart>
      )
    }
    else
      return null;
  }
}

export default Feedback;