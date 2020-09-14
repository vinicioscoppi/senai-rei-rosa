import React from 'react';

import { Container } from './styles';

export default class Title extends React.Component {
    
    render() {
        return (
            <Container>
                <h1>{this.props.sync ?  'Salas ativas' : 'Criar salas'}</h1>
            </Container>
        );
    }
}