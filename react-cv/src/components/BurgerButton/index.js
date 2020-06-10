import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Dropdown } from 'semantic-ui-react';

class BurgerButton extends Component {
  
      render() {
        return (
            <div className="burger-button">
                <Dropdown item text='' icon='bars'>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                        <Link to="/#skills">
                            Compétences techniques
                        </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <Link to="/#projects">
                            Projets
                        </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <Link to="/#exp">
                            A propos de moi
                        </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
      };
};

export default BurgerButton;
