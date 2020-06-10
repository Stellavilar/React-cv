import React, {Component} from 'react';
import { Segment, Header } from 'semantic-ui-react';

class Skills extends Component {
  
  render() {

    return (
    <div className="skills" id="skills">
        <Header as="h2" className="skills-header">COMPÉTENCES TECHNIQUES</Header>
        <Segment>
          <Header as="h3">LANGAGE: </Header>
          <ul>
            <li>Javascript</li>
          </ul>
        </Segment>
        <Segment>
          <Header as="h3">FRONT: </Header>
          <ul>
            <li>Javascript Vanilla</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>Babel</li>
            <li>Webpack</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </Segment>
        <Segment>
          <Header as="h3">BACK: </Header>
          <ul>
            <li>ExpressJS</li>
            <li>NodeJS</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </Segment>
    </div>
    );
  }
 
  
}

export default Skills;