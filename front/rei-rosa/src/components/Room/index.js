import React from 'react';

import { Container } from './styles';
import Column from './Column';

function Room() {
    return (
        <Container>
            <Column/><Column/><Column/><Column/><Column/>
        </Container>
    );
}

export default Room;