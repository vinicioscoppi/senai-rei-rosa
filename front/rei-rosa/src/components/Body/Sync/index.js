import React from 'react';

import { Container } from './styles';
import Title from './Title';

export default class Sync extends React.Component {

    render() {
        return (
            <Container>
                <Title sync={this.props.sync}></Title>
            </Container >
        );
    }
}