/*
 * Main app component
 */

/* Module imports */
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  
/* Styles imports */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


/* Component imports */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Connexion from '../Header/Connexion/Connexion';
import Nav1 from '../Nav1/Nav1';
import Infos from '../Infos/Infos';

/* App component */
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  componentDidMount() {

    var options = {
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      }
    }

    fetch("http://localhost:8080", options)
    .then(res => (res.json()))
    .then(
      (result) => {
        this.setState({message: result.message});
      },
      (error) => {
        console.log(error);
      }
    )
  }

  render() {
    return (
        <div>
            <Router>
                <Header/>
                    <Switch>
                        <Route path="/Header/Connexion">
                            <Connexion/>
                        </Route>
                        <Route path="/Accueil">
                            <div className="presentation">
                                <img src="images/affiche.jpg"></img>
                            </div>
                            <Infos/>
                        </Route>
                        <Route path="/Nav1">
                            <Nav1/>
                        </Route>
                    </Switch>
                <Footer/>
            </Router>
           
        
        </div>
    );
   }
  }
   

export default App;
