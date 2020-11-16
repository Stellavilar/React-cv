import React, {Component} from 'react';
import { Header, List } from 'semantic-ui-react';


class Skills extends Component {
  
  render() {

    return (
    <div className="skills" id="skills">
        <Header as="h2" className="skills-header">COMPÉTENCES TECHNIQUES</Header>
        <List>
          <List.Item>
            <List.Icon name='check square outline' />
            <List.Content>Méthode AGILE (Scrum, Kanban, Github)</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='check square outline' />
            <List.Content>Réalisation de wireframes et maquettes (diagrams.net, figma.com)</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='check square outline' />
            <List.Content>Réalisation d'interfaces web statiques (Javascript, React)</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='check square outline' />
            <List.Content>Développement d'interfaces utilisateur Web dynamiques (Javascript, React, Express JS, EJS)</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='check square outline' />
            <List.Content>Réalisation d'interfaces utilisateur avec contenu e-commerce (Prestashop, Shopify)</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='check square outline' />
            <List.Content>Création et branchement de base de données (Express JS, Node JS, PostgreSQL, Mongodb)</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='check square outline' />
            <List.Content>Utilisation de Websockets (réalisation d'un tchat)</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='check square outline' />
            <List.Content>Développement Back-end (sqitch, Happi, PSQL, API, AJAX)</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='download' />
            <List.Content>PHP</List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='download' />
            <List.Content>JQuery</List.Content>
          </List.Item>
        </List>
    </div>
    );
  }
 
  
}

export default Skills;