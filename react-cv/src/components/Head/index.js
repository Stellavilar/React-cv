import React, {Component} from 'react';
import { HashLink as Link } from 'react-router-hash-link';


class Head extends Component {
  
  render() {

    return (
    <div className="head">
      <Link to="/#projects">
        <button>Projects</button>
      </Link>
      <Link to="/#banner">
        <button>Banner</button>
      </Link>
      <Link to="/#exp">
        <button>Experiences</button>
      </Link>
      <Link to="/#skills">
        <button>Compétences tech</button>
      </Link>
      <Link to="/#contact">
        <button>Contact</button>
      </Link>
    </div>
    );
  }
 
  
}

export default Head;