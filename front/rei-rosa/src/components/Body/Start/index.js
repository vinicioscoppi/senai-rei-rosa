import React from 'react';

import { Container } from './styles';
import Button from './Button';

export default class Start extends React.Component {

    render() {
        return (
            <Container>
                <Button sync={this.props.sync} confirm={this.props.confirm}/>
            </Container>
        );
    }
}