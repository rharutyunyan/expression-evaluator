import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import FirstNumber from './pages/firstNumber';
import ResultPage from './pages/Result';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router >
        <Switch>
          <Route path='/' component={FirstNumber} exact />
          <Route path='/result' component={ResultPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
