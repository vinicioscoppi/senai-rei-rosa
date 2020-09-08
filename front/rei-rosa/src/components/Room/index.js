import React from 'react';

import { Container } from './styles';
import Button from './Button';
import arrayFromTo from '../../utils/array-from-to';

export default class Room extends React.Component {

    state = { sync: false, hoveredRoom: 0 };

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
                click={this.getNumberOfRooms}
                id={i}
                hovered={hovered}
                sync={this.state.sync}
                mouseEnter={this.handleMouseEnter}
                mouseLeave={this.handleMouseLeave}
            />
        );
    }

    handleMouseEnter = (i) => {
        this.setState({ sync: false, hoveredRoom: i });
    }

    handleMouseLeave = () => {
        this.setState({ sync: false, hoveredRoom: -1 });
    }

    getNumberOfRooms = async (i) => {
        const response = await fetch(`http://localhost:3001/room/${i}`);
        console.log(await response.json());
    }
}