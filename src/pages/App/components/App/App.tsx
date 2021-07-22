import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';

import FirstOperand from '../../../FirstOperand/components/FirstOperand/FirstOperand';
import Result from '../../../Result/components/Result/Result';

const App: React.FC = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route path="/" component={FirstOperand} exact />
        <Route path="/result" component={Result} exact />
      </Switch>
    </Router>
  </div>
);

export default App;
