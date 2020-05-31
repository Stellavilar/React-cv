import React, {Component} from 'react';
import { Header,Container, Segment, Card } from 'semantic-ui-react';


class Exp extends Component {

  constructor(props) {
    super (props);
    this.state={};
  }
  
  render() {

    return (
    <div className="exp" id="exp">
      <Header as="h2" className="exp-header">A PROPOS DE MOI</Header>
      <Container>
        <p>Passionnée par l'univers Web, je viens de terminer une formation intensive et complète de Javascript Fullstack spécialisation ReactJS, au sein de l'école O'clock.</p>
        <p>Cette formation complète a pour but de me préparer à l'obtention du Titre professionnel de Développeur Web et Web mobile, diplôme équivalent au Bac +2 (session Septembre 2020)</p>
        <p>J'ai pu acquérir de nombreuses notions et aujourd'hui je suis désormais capable de développer des application Javascript, en alliant des stacks Front et Back</p>
        <p>J'ai hâte de mettre mes compétences à l'oeuvre!</p>
      </Container>
      <Segment>
        <Header as="h3">Expériences professionnelles</Header>
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Header as="h4">ASSISTANTE COMMERCIALE | HT26 PARIS | 2017-2019</Header>
            <ul>
              <li>Réalisation de devis et factures</li>
              <li>Suivi dossiers clients et fournisseurs</li>
              <li>Gestion, préparation et envoi de commandes gros volumes vers des professionnels</li>
            </ul>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Header as="h4">RESPONSABLE E-COMMERCE | HT26 PARIS |2010-2017</Header>
            <ul>
              <li>Gestion, préparation et envoi de commandes vers des particuliers</li>
              <li>Alimentation du site web en fiches produits et articles de presse via Prestashop</li>
              <li>Gestion marketing des réseaux sociaux</li>
            </ul>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Header as="h4">Serveuse en Hôtellerie-Restauration | HILTON ORLY| 2004-2010</Header>
            <ul>
              <li>Accueil physique, clientèle internationale</li>
              <li>Conseil clientèle et prise de commandes</li>
            </ul>
          </Card.Content>
        </Card>
      </Card.Group>
      </Segment>
    </div>
    );
  }
 
  
}

export default Exp;