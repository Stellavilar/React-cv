import React from 'react';
import { Card, Header, Container, Image, Icon } from 'semantic-ui-react';
import funnyQuiz from '../../img/FunnyQuiz.png';
import savConnect from '../../img/sav-connect.png';
import todolist from '../../img/todolist.png';


const Projects = () => {

    return (
    <div className="projects" id="projects">
      <Header as="h2" className="projects-header">PROJETS</Header>
      <Container text>
        <p>Voici des projets développés seule et également dans le cadre de ma formation de Développeur et Web et Web mobile</p>
      </Container>
      <div className='applis'>
        {/* funnyquiz card */}
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
        {/* savConnect card */}
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
        {/* todolist card */}
        <Card>
          <Image src={todolist} wrapped ui={false} as='a' href='http://Stellavilar.github.io/ToDoList-React-Redux' target='blank' />
        <Card.Content>
          <Card.Header>To Do List Application</Card.Header>
          <Card.Meta>
            <span className='description'>Liste de choses à faire</span>
          </Card.Meta>
          <Card.Description>
            Cette application est une page simple crée avec ReactJs et Redux. <br/> 
            Afin de rendre l'interface utilisateur attractive, j'ai utilisé sass pour la feuille de style et material-ui pour mettre en place certains componsnats (input, icônes).
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href="https://github.com/Stellavilar/ToDoList-React-Redux" target="blank">
            <Icon name='github' />
            GitHub Repository
          </a>
        </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default Projects;