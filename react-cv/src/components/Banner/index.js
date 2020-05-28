import React, {Component} from 'react';
import pdf from '../../img/CV Vilar Stella.pdf';

class Banner extends Component {
  
  render() {
      
    return (
    <div className="banner" id="banner">
      <p className="banner-text">Développeuse Web</p>
      <p className="banner-text">Fullstack Javascript</p>
      <p className="banner-text">React JS</p>
      <a href={pdf}  rel="noopener"><button>Voir CV</button></a>
    </div>
    );
  };
};

export default Banner;