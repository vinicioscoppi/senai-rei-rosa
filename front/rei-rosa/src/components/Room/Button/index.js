import React from 'react';

import { Container } from './styles';
import AddCircle from '@material-ui/icons/AddCircle';

export default class Button extends React.Component {

    render(){
        return (
            <Container onClick = { () => this.props.click( this.props.id + 1 ) }>
                <AddCircle style={{ fontSize: 50 }}></AddCircle>
            </Container>
        );
    }
}
