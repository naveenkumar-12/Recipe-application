import React from 'react';
import './App.css';
import {Component} from 'react';
import Login from "./login"
import {BrowserRouter as Router,Route,Link}from 'react-router-dom';
import Register from './register';
import Recipe from './recipe';
import About from './about';
import Admin from './admin';





class App extends Component{
  render(){
    return(
      <Router>
      <div className="router">
          <ul className="header">
            <li>
              <Link to="/">
                <img width="1000rem" height="1000rem" alt="icon" className="icon"src='https://image.shutterstock.com/image-vector/chef-logo-restaurant-vector-icon-260nw-334669664.jpg'/>
              </Link>
            </li>
            <li>
              <h1>The Recipe</h1>
            </li>
          </ul>
        <Link className="link" to="/login"></Link>
        <Link  to="/register"></Link>
        <Link  to="/recipe"></Link>
        <Route path="/" exact component={About}/>
        <Route path="/login"  component={Login}/>
        <Route path="/register"  component={Register}/>
        <Route path="/recipe"  component={Recipe}/>
        <Route path="/admin"  component={Admin}/>
        </div>
        </Router>
    )
  }
}
export default App;
