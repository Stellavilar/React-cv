import React, {Component} from 'react';
import { Card, Header, Image } from 'semantic-ui-react';

//Logo pictures imported there:
import jslogo from '../../img/jslogo.png';
import htmlogo from '../../img/html.png';
import csslogo from '../../img/css3.png';
import reactlogo from '../../img/react.svg';
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
          <Card.Group >
            <Card>
              <Image className='logo' src={jslogo} alt='javascript logo' wrapped ui={false}/>
            </Card>
            <Card>
              <Image className='logo' src={htmlogo} alt='html logo'/>
            </Card>
            <Card>
              <Image className='logo' src={csslogo} alt='css logo'/>
            </Card>
            <Card>
              <Image className='logo' src={reactlogo} alt='react logo' />
            </Card>
            <Card>
              <Image className='logo-bootstrap' src={bootstrap} alt='bootstrap logo' />
            </Card>
            <Card>
              <Image className='logo-node' src={node} alt='node logo' />
            </Card>
            <Card>
              <Image className='logo-express' src={express} alt='express js logo' />
            </Card>
            <Card>
              <Image className='logo-mongo' src={mongo} alt='mongo db logo' />
            </Card>
            <Card>
              <Image className='logo' src={postgres} alt='postresql logo' />
            </Card>
            <Card>
              <Image className='logo' src={sass} alt='sass logo' />
            </Card>
          </Card.Group>
    </div>
    );
  }
 
  
}

export default Skills;