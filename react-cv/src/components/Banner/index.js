import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import pdf from '../../img/CV Vilar Stella .pdf';

class Banner extends Component {
  
  render() {
  
    return (
    <div className="banner" id="banner">
      <p className="banner-text">Développeuse Web <br/>Fullstack Javascript<br/>React JS <br/></p>
      <a  href={pdf} download="CV Vilar Stella"><button>Télécharger CV</button></a>
      <Link to="/#skills">
      <div className="arrow bounce"></div>
      </Link>
    </div>
    );
  };
};

export default Banner;