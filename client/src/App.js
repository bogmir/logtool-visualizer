import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import RequestMethodsPie from './containers/Charts/RequestMethodsPie';
import AnswerCodesPie from './containers/Charts/AnswerCodesPie';
import ShortAnswersDoughnut from './containers/Charts/ShortAnswersDoughnut';
import RequestsPerMinuteChart from './containers/Charts/RequestsPerMinuteChart';


import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/request-methods" component={RequestMethodsPie} />
            <Route path="/answer-codes" component={AnswerCodesPie} />
            <Route path="/short-answers" component={ShortAnswersDoughnut} />
            <Route path="/requests-per-min" component={RequestsPerMinuteChart} />
            <Route path="/" component={Welcome} exact />
          </Switch>
        </Layout>
      </div>
   );
  } 
}

export default App;