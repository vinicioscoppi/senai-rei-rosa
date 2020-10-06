import React from 'react';

import { Container } from './styles';

export default class Button extends React.Component {

  state = { openModal: true };

  render() {
    return (
      <Container onClick={this.props.confirm}>
        <h2>{this.props.sync ? 'Iniciar Jogo!' : 'Sincronizar!'}</h2>
      </Container>
    );
  }

}