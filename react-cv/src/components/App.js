import React, {Component} from 'react';

import Head from './Head';
import Banner from './Banner';
import Skills from './Skills';
import Projects from './Projects';
import Exp from './Exp';
import Contact from './Contact';


class App extends Component {
  
  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
    <div className="app">
      <Head />
      <Banner />
      <Skills />
      <Projects />
      <Exp />
      <Contact />
    </div>
    );
  }
 
  
}

export default App;
