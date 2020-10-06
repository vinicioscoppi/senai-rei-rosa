import React from 'react';

import { Container } from './styles';

export default class Button extends React.Component {

  render() {
    return (
      <Container style={this.props.sync === true ? this.getSyncedStyle() : this.getDefaultStyle()}
        onClick={() => this.props.onClick()}>
        <h2>{this.props.sync === true ? 'Iniciar jogo!' : 'Sincronizar'}</h2>
      </Container>
    );
  }

  getDefaultStyle = () => {
    return {
      background: '#ecf1f8',
      borderRadius: '3px',
      border: 'solid 2px #7159c1',
      color: '#7159c1',
      padding: '20px 100px',
      backgroundPosition: 'center',
      transition: 'background 0.8s'
    };
  }

  getSyncedStyle = () => {
    return {
      background: '#7159c1',
      borderRadius: '3px',
      border: 'solid 0px',
      color: '#fdd835',
      padding: '20px 100px',
      backgroundPosition: 'center',
      transition: 'background 0.8s',
    }
  }
}