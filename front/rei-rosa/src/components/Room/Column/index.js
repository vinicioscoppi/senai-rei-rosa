import React from 'react';

import { Container } from './styles';
import Button from './Button';

function Column() {
    return (
        <Container>
            <Button></Button>
            <Button></Button>
        </Container>
    );
}

export default Column;