import React from 'react';

import { Container } from './styles';

function Header() {
    fetch(`http://localhost:3001/flush`);
    return (
        <Container>
            <h1>O Rei e a Rosa!</h1>
        </Container>
    );
}

export default Header;