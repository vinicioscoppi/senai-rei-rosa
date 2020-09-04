import React from 'react';

import { Container } from './styles';
import Title from './Title';
import Button from './Button';

export default class Sync extends React.Component {

    render() {
        return (
            <Container>
                <Title sync={this.props.sync}></Title>
                <Button enabled={this.props.sync}></Button>
            </Container >
        );
    }
}