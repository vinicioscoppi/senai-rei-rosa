import React from 'react';

import { Container } from './styles';
import Button from './Button';

export default class Room extends React.Component {
    
    renderRoom(i) {
        return (
            <Button
                click = { this.getNumerOfRooms }
                id={i}
            />
        );
    }

    render() {
        return (
            <Container>
                {this.renderRoom(0)}
                {this.renderRoom(1)}
                {this.renderRoom(2)}
                {this.renderRoom(3)}
                {this.renderRoom(4)}
                {this.renderRoom(5)}
                {this.renderRoom(6)}
                {this.renderRoom(7)}
                {this.renderRoom(8)}
                {this.renderRoom(9)}
            </Container>
        );
    }
    
    async getNumerOfRooms(i) {
        const response = await fetch(`http://localhost:3001/room/${i}`);
        console.log(await response.json());
    }
}