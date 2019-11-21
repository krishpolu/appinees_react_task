import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/redux/store/Store';
import Login from './pages/login/LoginPage';
import Dashboard from '../src/pages/dashboard/DashboardPage';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
