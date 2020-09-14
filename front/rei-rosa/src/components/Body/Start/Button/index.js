import React from 'react';

import { Container } from './styles';

export default class Button extends React.Component {

  render() {
    return (
      <Container>
        <h2>{this.props.sync ? 'Iniciar Jogo!' : 'Sincronizar!'}</h2>
      </Container>
    );
  }
}