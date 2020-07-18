import React, {Component} from 'react';

import pdf from '../../img/CV Vilar Stella.pdf';

class Banner extends Component {
  
  render() {
  
    return (
    <div className="banner" id="banner">
      <p className="banner-text">Développeuse Web</p>
      <p className="banner-text">Fullstack Javascript</p>
      <p className="banner-text">React JS</p>
      <a  href={pdf} download="CV Vilar Stella"><button>Télécharger CV</button></a>
      <div className="arrow-down"></div>
    </div>
    );
  };
};

export default Banner;