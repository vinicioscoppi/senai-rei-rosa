import React from 'react';

import { Container } from './styles';

export default class Button extends React.Component {
  
  render() {
    return (
      <Container style={this.props.sync === true && this.props.started === true ? defaultStyle :  syncedStyle}
        onClick={() => this.props.onClick()}>
        <h2>{this.props.sync === true ? this.props.started === true ? 'Jogo Iniciado' : 'Iniciar jogo!' : 'Sincronizar'}</h2>
      </Container>
    );
  }
}

const defaultStyle = {
  background: '#ecf1f8',
  borderRadius: '3px',
  border: 'solid 2px #7159c1',
  color: '#7159c1',
  padding: '20px 100px',
  backgroundPosition: 'center',
  transition: 'background 0.8s'
};

const syncedStyle = {
  background: '#7159c1',
  borderRadius: '3px',
  border: 'solid 0px',
  color: '#fdd835',
  padding: '20px 100px',
  backgroundPosition: 'center',
  transition: 'background 0.8s',
}