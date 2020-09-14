import React from 'react';

import { Container } from './styles';

export default class Button extends React.Component {

    render() {
        return (
            <Container style={{ visibility: this.props.enabled ? 'visible' : 'hidden' }}>
                <h2>Ressincronizar</h2>
            </Container>
        );
    }
}