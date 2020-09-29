import React from 'react';

import { Container } from './styles';
import Modal from 'styled-react-modal';

export default class Button extends React.Component {  

  openModal = false;

  render() {
    return (
      <>
        <StyledModal
          isOpen={this.openModal}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}>
          <span>I am a modal!</span>
          <button onClick={this.toggleModal}>Close me</button>
        </StyledModal>
        <Container onClick={this.toggleModal}>
          <h2>{this.props.sync ? 'Iniciar Jogo!' : 'Sincronizar!'}</h2>
        </Container>
      </>
    );
  }

  toggleModal() {
    this.openModal = !this.openModal;
    this.setState();
  }
}

const StyledModal = Modal.styled`
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`