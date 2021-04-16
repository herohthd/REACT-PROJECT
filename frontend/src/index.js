import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './LoginComponents/Login'
import Submit from './SubmitComponents/Submit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Members from './MemberComponents/Members.js';
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Switch>
      <Route exact path = "/" component={App}/>
      <Route path="/Register" exact component ={Login}/> 
      <Route path="/Login" exact component ={Login}/> 
      <Route path="/Submit" exact component ={Submit}/> 
      <Route path="/members" exact component ={Members}></Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
