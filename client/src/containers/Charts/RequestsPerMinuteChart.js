import React, {Component} from 'react';
/* import { ResponsiveContainer, LineChart, CartesianGrid, 
    XAxis, YAxis, Label, Tooltip, Line } from "recharts";
 */import rca, {pastel} from 'rainbow-colors-array';
import { LineChart } from 'react-chartkick';
import 'chart.js';

import './RequestsPerMinuteChart.css';


class RequestsPerMinuteChart extends Component {
  state = {
    reqsPerMin: {},
    colors: {}
  };

  componentDidMount() {
    fetch('/requests-per-min')
      .then( res => res.json() )
      .then(data => {
          this.setState({ 
            reqsPerMin: data,
              colors: Object.values(rca(data.length, "hex", pastel))
                .map(el => "#" + el.hex)
          });
          console.log(this.state.reqsPerMin);

       })
  }

  render() {
    return (
/*       <ResponsiveContainer 
        width={"100%"} 
        height={700}>
          <LineChart
            data={this.state.reqsPerMin}
            margin={{top: 150, right: 200, left: 100, bottom: 50}}
          >
          <CartesianGrid />
          <XAxis type="number" dataKey="time" domain={["dataMin", "dataMax"]}>
            <Label
              value={"Time"}
              position="bottom"
              style={{ textAnchor: "middle" }}
            />
          </XAxis>
          <YAxis>
            <Label
              value={"Number of requests"}
              position="left"
              angle={-90}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          <Line
            dataKey="temperature"
            name="Temperature"
            dot={false}
            type={"natural"}
          />
        </LineChart>
      </ResponsiveContainer>
    */ 
       <LineChart data={this.state.reqsPerMin} xtitle="Time" ytitle="Requests" bytes="true" />  
    
      );

  }
}

export default RequestsPerMinuteChart;