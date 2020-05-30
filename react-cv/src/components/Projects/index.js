import React, {Component} from 'react';
import { Card, Placeholder, Header, Container } from 'semantic-ui-react';

import YoutubeSAV from '../YoutubeSAV';
import YoutubeKanban from '../YoutubeKanban';


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
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <YoutubeKanban videoId="2j5Z0T39y2U" />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
              Pokedex
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
    );
  }
 
  
}

export default Projects;