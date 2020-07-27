import React, {Component} from 'react';
import {PieChart, Pie, Cell, Tooltip, BarChart, Bar, Legend, XAxis, YAxis} from 'recharts';
import rca, {pastel} from 'rainbow-colors-array';

import './AnswerCodesPie.css';

class AnswerCodesPie extends Component {
  state = {
    answers: {},
    colors: {}
  };

  componentDidMount() {
    fetch('/answers')
      .then( res => res.json() )
      .then( updatedAnswers => 
          this.setState({
             answers: updatedAnswers,
             colors: Object.values(rca(updatedAnswers.length, "hex", pastel))
                  .map(el => "#" + el.hex)
          }));
  }

  render() {
    return (
      <div>
{/*           <PieChart width={1000} height={1000}>
            <Pie dataKey="value" 
                isAnimationActive={false} 
                data={this.state.answers} 
                cx={400} cy={400} 
                outerRadius={200} 
                fill="#8884d8" 
                label="Answer Codes">
               {
                  Object.values(this.state.answers).map((entry, index) => (
                      <Cell key={`cell-${index}`} 
                            fill={this.state.colors[index]}/>
                ))
              }
            </Pie>
            <Tooltip/>
          </PieChart>

 */}         
        <BarChart
                width={1000} 
                height={700} 
                margin={{top: 150, right: 200, left: 400, bottom: 50}}
                data={this.state.answers}>
          <Bar dataKey="value"
                    name="HTTP answer codes distribution">
                {
                    Object.values(this.state.answers).map((entry, index) => (
                      <Cell key={`cell-${index}`} 
                            fill={this.state.colors[index]}
                            stroke="#000000"
                            strokeWidth={index === 2 ? 4 : 1}
                      />))
                }
          </Bar>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip cursor={{ fill: 'rgba(206, 206, 206, 0.2)' }} />
          <Legend />
        </BarChart>          

      </div>

    );
  }
}

export default AnswerCodesPie;