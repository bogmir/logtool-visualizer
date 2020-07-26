import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import RequestMethodsPie from './containers/Charts/RequestMethodsPie';
import AnswerCodesPie from './containers/Charts/AnswerCodesPie';
import Welcome from './components/Welcome';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/requestMethods" component={RequestMethodsPie} />
            <Route path="/answerCodes" component={AnswerCodesPie} />
            <Route path="/" component={Welcome} exact />
          </Switch>
        </Layout>
      </div>
   );
  } 
}

export default App;