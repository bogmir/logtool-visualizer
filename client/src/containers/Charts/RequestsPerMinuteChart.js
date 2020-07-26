import React, {Component} from 'react';
import {BarChart, Bar, Cell, Tooltip} from 'recharts';
import rca, {pastel} from 'rainbow-colors-array';

import './RequestsPerMinuteChart.css';


class RequestsPerMinuteChart extends Component {
  state = {
    reqsPerMin: {},
    colors: {}
  };

  componentDidMount() {
    fetch('/requestsPerMin')
      .then( res => res.json() )
      .then(data => {
          this.setState({ 
              requests: data,
              colors: Object.values(rca(data.length, "hex", pastel))
                .map(el => "#" + el.hex)
          });
       })
  }

  render() {
    return (
      <div>
          <BarChart 
                width={700} 
                height={700} data={this.state.reqsPerMin}>
                <Bar dataKey="value">
                {
                    Object.values(this.state.reqsPerMin).map((entry, index) => (
                      <Cell key={`cell-${index}`} 
                            fill={this.state.colors[index]}  
                            strokeWidth={index === 2 ? 4 : 1}
                      />))
                }
            </Bar>
          </BarChart>          
      </div>

    );
  }
}

export default RequestsPerMinuteChart;