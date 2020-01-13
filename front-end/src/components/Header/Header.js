import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* Styles imports */
import './Header.css';
import './Connexion/Connexion';

class Header extends Component {
    render() {
        return (
            <div>
            <div className="Header">
               <div class="container" id="header">
                    <div class="row">
                        <div class="col-10">
                        <Link to="/Accueil"><h1>Foot au féminin</h1></Link>
                        </div>
                        <div class="col-2">
                        <Link to="/Header/Connexion"><button>Se connecter</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container" id="menu">
                <div class="row">
                    <div class="col-9 menu">
                    <ul>
                        <Link to="/Accueil"><li>ACCUEIL</li></Link>
                        <Link to="/Nav1"><li>EQUIPE DE FRANCE</li></Link>
                        <a><li>INFOS</li></a>
                        <a><li>D1</li></a>
                        <a><li>D2</li></a>
                        <a><li>TU JOUES ?</li></a>
                    </ul>
                    </div>
                    <div class="col-3 reseaux">
                    <a href="https://fr-fr.facebook.com/pages/category/Amateur-Sports-Team/%C3%89quipe-de-france-f%C3%A9minine-de-foot-238313332922980/" target="_blank"><img class="logo_facebook" src="images/logo_facebook.png"/></a>
                    <a href="https://twitter.com/equipedefrance?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><img class="logo_twitter" src="images/logo_twitter.png"/></a>
                    <a href="https://www.instagram.com/explore/tags/equipedefrancefeminine/" target="_blank"><img class="logo_instagram" src="images/logo_instagram.png"/></a>
                    </div>
                </div>
                <hr/>
            </div> 
        </div>
        );
    }
}

export default Header;