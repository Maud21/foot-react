import React, { Component } from 'react';

import './Nav1.css';

class Nav1 extends Component {
    render() {
        return (
            <div id="equipeFrance">
                <div className="img1">
                    <img src="images/equipe_france3.jpeg"></img>
                </div>                 
                <h1>Classement féminin</h1>
                <div className="img2">
                    <img src="images/classement.jpg"></img>
                </div>
            </div>
        );
    }
}

export default Nav1;