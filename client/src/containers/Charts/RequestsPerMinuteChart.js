import React, {Component} from 'react';
import rca, {pastel} from 'rainbow-colors-array';
import {LineChart, ResponsiveContainer, XAxis, YAxis, Label, Tooltip, Line} from 'recharts';

//import styles from './RequestsPerMinuteChart.module.css';

class RequestsPerMinuteChart extends Component {
  state = {
    reqsPerMin: {},
    colors: {}
  };

  componentDidMount() {
    fetch('/api/charts/requests-per-min')
      .then( res => res.json() )
      .then( data => {
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
       <ResponsiveContainer 
        width={"100%"} 
        height={700}>
          <LineChart
             data={this.state.reqsPerMin} 
            /*data={data0}]*/
            margin={{top: 150, right: 200, left: 100, bottom: 50}}
          >
          <XAxis dataKey="name">
            <Label
              value={"Time"}
              position="bottom"
              style={{ textAnchor: "middle" }}
            />
          </XAxis>
          <YAxis domain={[0, 200]}>
            <Label
              value={"Number of requests"}
              position="left"
              angle={-90}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          <Line
            dataKey="value"
            name="requests"
            dot={false}
            type={"natural"}
          />
        </LineChart>
      </ResponsiveContainer>
  );
}
}

export default RequestsPerMinuteChart;