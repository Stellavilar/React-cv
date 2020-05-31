import React, {Component} from 'react';
import { Card, Header, Container } from 'semantic-ui-react';

import YoutubeSAV from '../YoutubeSAV';
import YoutubeKanban from '../YoutubeKanban';
import YoutubePokedex from '../YoutubePokedex';

import githubLogo from '../../img/GitHub-Mark-32px.png';


class Projects extends Component {

  constructor(props) {
    super (props);
    this.state={};
  }

  render() {
    
    return (
    <div className="projects" id="projects">
      <Header as="h2" className="projects-header">PROJETS</Header>
      <Container text>
        <p>
          Dans le cadre de ma formation intensive de Développeur Web et Web mobile à l'école O'Clock, j'ai réalisé, seule et en équipe, divers projets.
        </p>
        <p>
          En voici quelques aperçus:
        </p>
      </Container>
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <YoutubeSAV videoId="W2_JOKIKyF0" />
            <p>Développement d’une application de gestion de service après-vente à destination d’un professionnel.</p>
            <p>Front: ReactJs</p>
            <p>Back: PostgreSQL, ExpressJS, NodeJs</p>
            <div className="git-place">
              <img className="github-logo" src={githubLogo} alt="github logo" />
              <a className="github-link" href="https://github.com/Stellavilar/sav-connect" target="blank">Github Repository</a>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <YoutubeKanban videoId="2j5Z0T39y2U" />
            <p>Application type "Trello" crée en Javascript Vanilla et connectée à une base de données PostgreSQL</p>
            <div className="git-place">
              <img className="github-logo" src={githubLogo} alt="github logo" />
              <a className="github-link" href="https://github.com/Stellavilar/KANBAN" target="blank">Github Repository</a>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <YoutubePokedex videoId="nJkm9eb4CWI" />
            <p>Application 100% Back end</p>
            <div className="git-place">
              <img className="github-logo" src={githubLogo} alt="github logo" />
              <a className="github-link" href="https://github.com/Stellavilar/Pokedex" target="blank">Github Repository</a>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
    );
  }
 
  
}

export default Projects;