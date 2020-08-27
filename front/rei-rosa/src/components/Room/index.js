import React from 'react';

import { Container } from './styles';
import Button from './Button';
import arrayFromTo from '../../utils/array-from-to';

export default class Room extends React.Component {

    state = { sync: false, hoveredRoom: 0, rooms: [] };

    render() {
        return (
            <Container>
                {this.renderRooms()}
            </Container>
        );
    }

    renderRooms() {
        return arrayFromTo(0, 9).map(i => this.renderRoom(i, this.state.hoveredRoom >= i));
    }

    renderRoom(i, hovered) {
        return (
            <Button
                click={this.getNumerOfRooms}
                id={i}
                hovered={hovered}
                sync={this.state.sync}
                icon={this.state.rooms[i]?.icon || 'ADD'}
                mouseOver={this.handleMouseOver}
                mouseLeave={this.handleMouseLeave}
            />
        );
    }

    handleMouseOver = (i) =>  {
        this.setState({ sync: false, hoveredRoom: i, rooms: [] });
    }

    handleMouseLeave = () =>  {
        this.setState({ sync: false, hoveredRoom: -1, rooms: [] });
    }

    getNumberOfRooms = async (i) =>  {
        const response = await fetch(`http://localhost:3001/room/${i}`);
        this.setState({ sync: false,  hoveredRoom: 0, rooms: await response.json() });
    }
}