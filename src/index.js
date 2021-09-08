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
import Employment from './My Components/ServiceUserProfileUpdation/BasicDetails/Employment';
import Accomplishment from './My Components/ServiceUserProfileUpdation/BasicDetails/Accomplishment';
import Assessment from './My Components/ServiceUserProfileUpdation/BasicDetails/Assessment';
import Project from './My Components/ServiceUserProfileUpdation/BasicDetails/Project';
import DesiredRole from './My Components/ServiceUserProfileUpdation/BasicDetails/DesiredRole';
import Basic from './My Components/ServiceUserProfileUpdation/BasicDetails/Basic';
import KeySkills from './My Components/ServiceUserProfileUpdation/BasicDetails/KeySkills';
import BasicServiceProvider from './My Components/ServiceProviderProfileupdation/BasicDetails/BasicServiceProvider';
import AssessmentServiceProvider from './My Components/ServiceProviderProfileupdation/BasicDetails/AssessmentServiceProvider';
import Postjob from './My Components/ServiceProviderProfileupdation/BasicDetails/Postjob';
import { ToastContainer } from 'react-toastify';
import Profile from './My Components/ServiceUserProfileUpdation/profile';
import AdminProfile from './My Components/ServiceProviderProfileupdation/adminProfile';





ReactDOM.render(
  <React.StrictMode>
    <Router>

      <Switch>

        <Route exact path="/" component={App} />
        <Route path="/ServiceUser" component={ServiceUser} />
        <Route path="/ServiceProvider" component={ServiceProvider} />
        <Route path="/Login" component={Login} />

        <Route path="/profile/:id" component={Profile} />
        <Route path="/MenuBar" component={MenuBar} />
        <Route path="/Education" component={Education} />
        <Route path="/Employment" component={Employment} />
        <Route path="/DesiredRole" component={DesiredRole} />
        <Route path="/Accomplishment" component={Accomplishment} />
        <Route path="/Project" component={Project} />
        <Route path="/Assessment" component={Assessment} />
        <Route path="/BasicDetails" component={Basic} />
        <Route path="/KeySkills" component={KeySkills} />


        <Route path="/adminProfile/:id" component={AdminProfile} />
        <Route path="/BasicServiceProvider" component={BasicServiceProvider} />
        <Route path="/AssessmentServiceProvider" component={AssessmentServiceProvider} />
        <Route path="/Postjob" component={Postjob} />
      </Switch>
    </Router>
    <ToastContainer />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
