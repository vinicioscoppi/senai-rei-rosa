import React from 'react';

import { Container } from './styles';
import Button from './Button';

export default class Start extends React.Component {

    render() {
        return (
            <Container>
                <Button sync={this.props.sync} onClick={this.props.handleSynchronization} started={this.props.started} />
            </Container>
        );
    }
}