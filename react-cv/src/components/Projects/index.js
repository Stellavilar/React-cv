import React from 'react';
import { Card, Header, Container, Image, Icon } from 'semantic-ui-react';
import YoutubePokedex from '../YoutubePokedex';

import funnyQuiz from '../../img/FunnyQuiz.png';
import savConnect from '../../img/sav-connect.png';


const Projects = () => {

    return (
    <div className="projects" id="projects">
      <Header as="h2" className="projects-header">PROJETS</Header>
      <Container text>
        <p>Voici des projets développés seule et également dans le cadre de ma formation de Développeur et Web et Web mobile</p>
      </Container>
      <div className='applis'>
        <Card>
          <Image src={funnyQuiz} wrapped ui={false} as='a' href='http://ec2-54-91-42-56.compute-1.amazonaws.com/' target='blank' />
        <Card.Content>
          <Card.Header>Funny Quiz</Card.Header>
          <Card.Meta>
            <span className='description'>Quizz interactif pour tous les âges</span>
          </Card.Meta>
          <Card.Description>
            Funny Quizz est une application que j'ai développé seule, afin de parfaire mes compétences en SQL et ReactJS. 
            Ce jeu regroupe des questions et réponses que j'ai récupéré via des fichiers SQL disponibles sur le site OpenQuizzDb.com.
            J'ai utilisé une base de donnée hebergée sous Postgres et le Front est codé 100% en React JS.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/Stellavilar/FunnyQuiz" target="blank">
            <Icon name='github' />
            GitHub Repository
          </a>
        </Card.Content>
        </Card>
        <Card>
          <Image src={savConnect} wrapped ui={false} as='a' href='http://ec2-18-208-219-38.compute-1.amazonaws.com' target='blank' />
        <Card.Content>
          <Card.Header>Sav-connect</Card.Header>
          <Card.Meta>
            <span className='description'>Plateforme de gestion de service après-vente pour un atelier de réparation</span>
          </Card.Meta>
          <Card.Description>
              Sav-connect permet de gérer la prise en charge d'appareils en panne et de créer, répertorier, suivre et mettre à jour les interventions, les devis, etc.<br/>
              C'est une application développée au sein d'un groupe de 4 développeurs. Mon rôle fut Lead Dev Front.<br/>
              Le Front est codé en React et le Back via Node, avec une base de donnée Postgres.<br/>
              <span style={{color: "palevioletred"}}>Identifiants de connexion:</span> admin@admin.fr / mot de passe: Admin1234?
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/Stellavilar/sav-connect" target="blank">
            <Icon name='github' />
            GitHub Repository
          </a>
        </Card.Content>
        </Card>
      </div>
      {/* <Card.Group >
      <Card>
          <Card.Content>
            <a href="ec2-18-208-219-38.compute-1.amazonaws.com" target="blank">
              <img className="funny-quiz" src={funnyQuiz} alt="Funny Quiz" />
            </a>
            <Header as='h3'>Sav-connect</Header>
            <p>Dans le cadre de ma formation, j'ai développé une plateforme utile pour les SAV d'entreprise.</p> <br/>
            <p>Sav-connect permet de gérer la prise en charge d'appareils en panne et de créer, répertorier, suivre et mettre à jour les interventions, les devis, etc.</p><br/>
            <p>C'est également une application nécessaire au bon fonctionnement interne d'un atelier de réparation</p><br/>
            <p>Le Front est codé en React et le Back via Node, avec une base de donnée SQL de Postgres.</p><br/>
            <p>Identifiants de connexion: admin@admin.fr / mot de passe: Admin1234?</p>
            <div className="git-place">
              <img className="github-logo" src={githubLogo} alt="github logo" />
              <a className="github-link" href="https://github.com/Stellavilar/sav-connect" target="blank">Github Repository</a>
            </div>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <a href="ec2-54-91-42-56.compute-1.amazonaws.com" target="blank">
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
      </Card.Group> */}
    </div>
  );
};

export default Projects;