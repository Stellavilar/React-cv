import React, {Component} from 'react';
import { Header,Container, Card } from 'semantic-ui-react';


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
        <p>Passionnée par le développement web, j’ai pris la décision d’en faire mon métier et d’établir un projet de reconversion professionnelle.</p>
        <p>Pour me former et obtenir un Titre professionnel de Développement Web et web mobile (Bac +2 ), j’ai choisi l’école O’clock : une école en plein essor, labellisée par la Grande du Numérique, et j’ai eu l’opportunité́ d’y être admise et suivre une formation intensive de 6 mois de Développeur Fullstack JavaScript Spécialisation React, avec à la clé́ un projet complet construit en équipe pendant 1 mois : une application web de gestion de service après-vente. </p>
        <p>J'ai pu acquérir de nombreuses notions et aujourd'hui je suis désormais capable de développer des application Javascript, en alliant des stacks Front et Back</p>
        <p>J'ai hâte de mettre mes compétences à l'oeuvre!</p>
      </Container>
        <Header as="h3">Expériences professionnelles</Header>
        <Card.Group>
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
    </div>
    );
  }
 
  
}

export default Exp;