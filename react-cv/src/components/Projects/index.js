import React from 'react';
import { Card, Header, Container } from 'semantic-ui-react';
import YoutubeSAV from '../YoutubeSAV';
import YoutubePokedex from '../YoutubePokedex';

import githubLogo from '../../img/GitHub-Mark-32px.png';
import funnyQuiz from '../../img/FunnyQuiz.png';


const Projects = () => {

    return (
    <div className="projects" id="projects">
      <Header as="h2" className="projects-header">PROJETS</Header>
      <Container text>
        <p>Voici des projets développés seule et également dans le cadre de ma formation de Développeur et Web et Web mobile</p>
      </Container>
      <Card.Group >
        <Card>
          <Card.Content>
            <YoutubeSAV videoId="W2_JOKIKyF0" />
            <Header as='h3'>SAV CONNECT</Header>
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
            <a href="https://google.fr" target="blank">
              <img className="funny-quiz" src={funnyQuiz} alt="Funny Quiz" />
            </a>
            <Header as='h3'>Funny Quiz</Header>
            <p>C'est un projet personnel développé seule, un quiz regroupant différentes questions choisies sur le site OpenQuizzDB. Le Front est codé 100% en React et le Back en Node, la base de données a été crée sous Postgres et le branchement entre le back et le front a été possible via une API Rest</p>
            <div className="git-place">
              <img className="github-logo" src={githubLogo} alt="github logo" />
              <a className="github-link" href="https://github.com/Stellavilar/FunnyQuiz" target="blank">Github Repository</a>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <YoutubePokedex videoId="nJkm9eb4CWI" />
            <Header as='h3'>POKEDEX</Header>
            <p>Application 100% Back end</p>
            <p>Présentation des Pokémons, statistiques, barre de recherche</p>
            <p>Javascript, Node Js, Express JS, EJS, PostgreSQL</p>
            <div className="git-place">
              <img className="github-logo" src={githubLogo} alt="github logo" />
              <a className="github-link" href="https://github.com/Stellavilar/Pokedex" target="blank">Github Repository</a>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default Projects;