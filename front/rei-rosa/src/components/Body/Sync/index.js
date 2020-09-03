import React from 'react';

import { Container } from './styles';
import Title from './Title';
import Button from './Button';

export default class Sync extends React.Component {

    render() {
        return (
            <Container>
                <Title></Title>
                <Button enabled={this.props.sync}></Button>
            </Container >
        );
    }
}