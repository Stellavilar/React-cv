import React, {Component} from 'react';
import { Card, Header, Segment } from 'semantic-ui-react';

//Logo pictures imported there:
import jslogo from '../../img/jslogo.png';
import htmlogo from '../../img/html.png';
import csslogo from '../../img/css3.png';
import reactlogo from '../../img/react.png';
import bootstrap from '../../img/bootstrap.png';
import node from '../../img/node.png';
import express from '../../img/expressjs.png';
import mongo from '../../img/mongodb.png';
import postgres from '../../img/postgres.png';
import sass from '../../img/sass.png';

class Skills extends Component {
  
  render() {

    return (
    <div className="skills" id="skills">
        <Header as="h2" className="skills-header">COMPÉTENCES TECHNIQUES</Header>
        <Segment>
          <Card.Group >
            <Card>
              <Card.Content>
                <img className='logo' src={jslogo} alt='javascript logo'/>
              </Card.Content>
              <Card.Content>
                <img className='logo' src={htmlogo} alt='html logo'/>
              </Card.Content>
              <Card.Content>
                <img className='logo' src={csslogo} alt='css logo'/>
              </Card.Content>
              <Card.Content>
                <img className='logo' src={reactlogo} alt='react logo' />
              </Card.Content>
              <Card.Content>
                <img className='logo' src={bootstrap} alt='bootstrap logo' />
              </Card.Content>
              <Card.Content>
                <img className='logo' src={node} alt='node logo' />
              </Card.Content>
              <Card.Content>
                <img className='logo' src={express} alt='express js logo' />
              </Card.Content>
              <Card.Content>
                <img className='logo' src={mongo} alt='mongo db logo' />
              </Card.Content>
              <Card.Content>
                <img className='logo' src={postgres} alt='postresql logo' />
              </Card.Content>
              <Card.Content>
                <img className='logo' src={sass} alt='sass logo' />
              </Card.Content>
            </Card>
            </Card.Group>
        </Segment>
    </div>
    );
  }
 
  
}

export default Skills;