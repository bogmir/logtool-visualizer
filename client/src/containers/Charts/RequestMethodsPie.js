import React, {Component} from 'react';
import {BarChart, Bar, Cell, Tooltip, XAxis, YAxis, Legend} from 'recharts';
import rca, {pastel} from 'rainbow-colors-array';

import './RequestMethodsPie.css';


class RequestMethodsPie extends Component {
  state = {
    requests: {},
    colors: {}
  };

  componentDidMount() {
    fetch('/requests')
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
                width={1000} 
                height={700} 
                margin={{top: 150, right: 200, left: 400, bottom: 50}}
                data={this.state.requests}>

            <XAxis dataKey="name"/>
            <YAxis/>

            <Bar dataKey="value" 
                  name="HTTP request methods distribution">
              {
                  Object.values(this.state.requests).map((entry, index) => (
                    <Cell key={`cell-${index}`} 
                          fill={this.state.colors[index]}
                          stroke="#000000"
                          strokeWidth={index === 2 ? 4 : 1}
                    />))
              }
            </Bar>
            <Tooltip cursor={{ fill: 'rgba(206, 206, 206, 0.2)' }} />
            <Legend />

          </BarChart>          
      </div>

    );
  }
}

export default RequestMethodsPie;