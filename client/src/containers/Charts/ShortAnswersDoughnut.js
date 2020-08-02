import React, {Component} from 'react';
import {PieChart, Pie, Legend, Cell} from 'recharts';
import rca, {pastel} from 'rainbow-colors-array';

//import styles from './ShortAnswersDoughnut.module.css';

/*
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
}; */

class ShortAnswersDoughnut extends Component {
  
   state= {
      activeIndex: 0,
      sizeDistribution: {},
      colors: {}
    };


  componentDidMount() {
    fetch('/api/charts/short-answers')
      .then( res => res.json() )
      .then( data => {
        console.log(data[0]);
         this.setState({
              activeIndex: 0,
              sizeDistribution: 
                  [{ name: 'LARGER than 1000B' , value: data[0].totalCodeOK },
                   { name: 'SMALLER than 1000B' , value: data[0].totalSmallSize }],
              colors: Object.values(rca(2, "hex", pastel))
                   .map(el => "#" + el.hex)
          });
        });
  }

  render() {
      return (
            <PieChart width={1000} height={700}>
                <Pie
                  dataKey="value"
                  name="Distribution of the size of the answer of all requests with code 200 and size < 1000B"
                  cx={480}
                  cy={400}
                  data={this.state.sizeDistribution}
                  labelLine={false}
                  label="lab"/* {renderCustomizedLabel} */
                  outerRadius={200}
                  fill="#8884d8"
                >
                  {
                    Object.values(this.state.sizeDistribution).map((entry, index) => 
                        <Cell key={`cell-${index}`} 
                          fill={this.state.colors[index % this.state.colors.length]} />)
                  }
                </Pie>
                <Legend padding="100" />
            </PieChart>
      );
  }
}

export default ShortAnswersDoughnut;