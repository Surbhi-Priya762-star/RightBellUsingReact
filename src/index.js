import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';

import ServiceUser from './My Components/SignUp/ServiceUser';
import ServiceProvider from './My Components/SignUp/ServiceProvider';


import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
   <Router>
      
      <Switch>
        
        <Route exact path="/" component={App} />
        <Route path="/ServiceUser" component={ServiceUser} />
        <Route path="/ServiceProvider" component={ServiceProvider} />
      
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
