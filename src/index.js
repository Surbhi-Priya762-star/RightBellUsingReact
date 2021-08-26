import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import ServiceUser from './My Components/SignUp/ServiceUser';
import ServiceProvider from './My Components/SignUp/ServiceProvider';
import Login from './My Components/LogIN/Login';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './My Components/ServiceUserProfileUpdation/BasicDetails/MenuBar'
import Education from './My Components/ServiceUserProfileUpdation/BasicDetails/Education';
import Employment from './My Components/ServiceUserProfileUpdation/Employment';
import Project from './My Components/ServiceUserProfileUpdation/Project';
import Accomplishment from './My Components/ServiceUserProfileUpdation/Accomplishment';
import DesiredRole from './My Components/ServiceUserProfileUpdation/DesiredRole';
import Assessment from './My Components/ServiceUserProfileUpdation/Assessment';



ReactDOM.render(
  <React.StrictMode>
   <Router>
      
      <Switch>
       
        <Route exact path="/" component={App} />
        <Route path="/ServiceUser" component={ServiceUser} />
        <Route path="/ServiceProvider" component={ServiceProvider} />
        <Route path="/MenuBar" component={MenuBar}/>
       
        <Route path="/Education" component={Education}/>
        <Route path="/Employment" component={Employment}/>
        <Route path="/Project" component={Project}/>
        <Route path="/Accomplishment" component={Accomplishment}/>
        <Route path="/DesiredRole" component={DesiredRole}/>
        <Route path="/Assessment" component={Assessment}/>
        <Route path="/Login" component={Login}/>
      
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
