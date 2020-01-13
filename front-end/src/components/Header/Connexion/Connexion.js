import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Connexion.css';

class Connexion extends Component {
    constructor(props) {
        super(props);
            this.state= {
                identifiant: '',
                mdp: '',
                status: '',
                message: '',
                redirect: false
            }
    }

    _inputConnexion = (e, input) => {
        switch(input) {
            case 'identifiant':
                this.setState({ identifiant: e.target.value });
                break;
            case 'mdp':
                this.setState({ mdp: e.target.value });
                break;
            default:
                break;
        }
  }


  _valider_data = () =>{
      if (!this.state.identifiant || !this.state.mdp){
          this.setState({message: "Vous devez remplir tous les champs pour vous connecter"})
      }
  

    var body = {
      identifiant: this.state.identifiant,
      mdp: this.state.mdp
  }
  

    var options = {
      method: 'POST',
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }

    fetch("http://localhost:8080", options)
    .then(res => (res.json()))
    .then(
      (result) => {
        this.setState({
        message: result.message,
        status: result.status,
        redirect: true
        })
      },
      (error) => {
        console.log(error);
        this.setState({message: "Désolés, une erreur s'est produite."})
      }
    )
  }

  _checkConnexion = () => {
    if(this.state.redirect){
        if(this.state.status === "abonné"){
            return <Redirect to='/Accueil' />
        }
        
        else{
            return;
        }
    }
    else{
        return;
    }
}

    
    render() {
        return (
            <div className="bloc_connexion">
                {this._checkConnexion()}
                <h2>Bienvenue dans votre espace !</h2>
                <h3>Connectez vous en un clic à toutes vos actualités préférées</h3>
                <hr/>
                <input placeholder="Mon identifiant" type="text" size="30" required 
                onChange={(e) => { this._inputConnexion(e, 'identifiant') }} value={this.state.identifiant}/><br/>
                <input placeholder="Mon mot de passe" type="password" size="30" required 
                onChange={(e) => { this._inputConnexion(e, 'mdp') }} value={this.state.mdp}/><br/>
                <button type="submit" onClick={this._validerData}>Se connecter</button><br/>
                <p>{this.state.message}</p>
                <button>Créer un compte</button>
                <h4>Mot de passe oublié</h4>
            </div>
        );
    }
}

export default Connexion;