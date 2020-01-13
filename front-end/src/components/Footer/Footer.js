import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
               <hr/>
                <h5>Foot au <img class="logo_fille" src="images/fille_logo.jpeg" alt="fille_logo" height="30" width="30"/></h5>
                <h6>Fédération française de football</h6>
                <h6>Partenaires majeurs <img class="nike" src="images/logo_nike.png" alt="nike"/></h6> 
            </div>
        );
    }
}

export default Footer;