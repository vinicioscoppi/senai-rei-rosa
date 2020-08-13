import React from 'react';

import { Container } from './styles';
import AddCircle from '@material-ui/icons/AddCircle';

function Button() {
    return (
        <Container>
            <AddCircle style={{ fontSize: 50 }}></AddCircle>
        </Container>
    );
}

export default Button;