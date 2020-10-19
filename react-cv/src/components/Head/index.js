import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../../img/sv..png';
import BurgerButton from '../BurgerButton';


class Head extends Component {
  
  render() {
    return (
      <div className="head">
        <Link to="/#banner">
        <img
            className="logo"
            src={logo}
            alt="logo"
          />
          </Link>
          <div className="header">
            <div className="name-part" >
              <div>STELLA</div>
              <div>VILAR</div>
            </div>
              <div className="link-part">
                <Link to="/#projects">
                  <div 
                   className="link">
                    Projets
                  </div>
                </Link>
                <Link to="/#skills">
                  <div  className="link">
                  Compétences techniques
                  </div>
                </Link>
                <Link to="/#exp">
                  <div 
                   className="link">
                    A propos de moi
                  </div>
                </Link>
              </div>
          </div>
          <BurgerButton />
      </div>
    );
  }
 
  
}

export default Head;