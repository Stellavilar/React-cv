import React, {Component} from 'react';
import { Card, Header, Image, Progress } from 'semantic-ui-react';

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
        <ul>
          <li>Méthode AGILE (Scrum, Kanban, Github)</li>
          <li>Réalisation de wireframes et maquettes (diagrams.net, figma.com)</li>
          <li>Réalisation d'interfaces web statiques (Javascript, React)</li>
          <li>Développement d'interfaces utilisateur Web dynamiques (Javascript, React, Express JS, EJS)</li>
          <li>Réalisation d'interfaces utilisateur avec contenu e-commerce (Prestashop, Shopify)</li>
          <li>Création et branchement de base de données (Express JS, Node JS, PostgreSQL, Mongodb)</li>
          <li>Utilisation de Websockets (réalisation d'un tchat)</li>
          <li>Développement Back-end (sqitch, Happi, PSQL, API, AJAX)</li>
        </ul>
          <Card.Group >
            <Card>
              <Image className='logo' src={jslogo} alt='javascript logo' wrapped ui={false}/>
              <Card.Content>
                <p>Javascript Vanilla</p>
                <Progress percent={75} color='grey' />
              </Card.Content>
            </Card>
            <Card>
              <Image className='logo' src={htmlogo} alt='html logo'/>
              <Card.Content>
                <p>HTML 5</p>
                <Progress percent={85} color='grey' />
              </Card.Content>
            </Card>
            <Card>
              <Image className='logo' src={csslogo} alt='css logo'/>
              <Card.Content>
                <p>CSS 3</p>
                <Progress percent={85} color='grey' />
              </Card.Content>
            </Card>
            <Card >
              <Image className='logo' src={sass} alt='sass logo' />
              <Card.Content>
                <p>SASS</p>
                <Progress percent={50} color='grey' />
              </Card.Content>
            </Card>
            <Card className='react'>
              <Image className='logo' src={reactlogo} alt='react logo' />
              <Card.Content>
                <p>React / Redux</p>
                <Progress percent={60} color='grey' />
              </Card.Content>
            </Card>
            <Card >
              <Image className='logo' src={bootstrap} alt='bootstrap logo' />
              <Card.Content>
                <Progress percent={50} color='grey' />
              </Card.Content>
            </Card>
            <Card>
              <Image className='logo' src={postgres} alt='postresql logo' />
              <Card.Content>
                <p>PostgreSQL</p>
                <Progress percent={83} color='grey' />
              </Card.Content>
            </Card>
            <Card className='node'>
              <Image className='logo' src={node} alt='node logo' />
              <Card.Content>
                <p>Node JS</p>
                <Progress percent={83} color='grey' />
              </Card.Content>
            </Card>
            <Card >
              <Image className='logo' src={express} alt='express js logo' />
              <Card.Content>
                <Progress percent={90} color='grey' />
              </Card.Content>
            </Card>
            <Card className='mongo'>
              <Image className='logo' src={mongo} alt='mongo db logo' />
              <Card.Content>
                <Progress percent={40} color='grey' />
              </Card.Content>
            </Card>
          </Card.Group>
    </div>
    );
  }
 
  
}

export default Skills;