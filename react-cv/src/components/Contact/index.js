import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';

import linkedin from '../../img/linkedin.png';
import githubLogo from '../../img/GitHub-Mark-32px.png';

class Contact extends Component {
  
  render() {

    return (
    <div className="contact" id="contact">
      <Container>
        <a href="https://www.linkedin.com/in/stella-vilar-dev/">
            <img src={linkedin} alt="linkedin logo" className="linkedin-logo"/>
        </a>
        <a href="https://github.com/Stellavilar">
            <img src={githubLogo} alt="github logo" className="github-logo"/>
        </a>
        <p>vilar.stella@gmail.com</p>
      </Container>
      <footer>
       &copy; 2020 - Tous droits réservés
      </footer>
    </div>
    );
  }
 
  
}

export default Contact;