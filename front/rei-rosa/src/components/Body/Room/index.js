import React from 'react';

import { Container } from './styles';
import Button from './Button';
import arrayFromTo from '../../../utils/array-from-to';

export default class Room extends React.Component {

    state = { sync: false, highlightedRoom: 0, clicked: false };

    render() {
        return (
            <Container>
                {this.renderRooms()}
            </Container>
        );
    }

    renderRooms() {
        return arrayFromTo(0, 9).map(i => this.renderRoom(i, this.state.highlightedRoom >= i));
    }

    renderRoom(i, highlight) {
        return (
            <Button
                click={this.handleClick}
                clicked={this.state.clicked}
                id={i}
                highlight={highlight}
                sync={this.state.sync}
                mouseEnter={this.handleMouseEnter}
                mouseLeave={this.handleMouseLeave}
            />
        );
    }

    handleMouseEnter = (i) => {
        if (!this.state.clicked)
            this.setState({ sync: false, highlightedRoom: i, clicked: false });
    }

    handleMouseLeave = () => {
        if (!this.state.clicked)
            this.setState({ sync: false, highlightedRoom: -1, clicked: false });
    }

    handleClick = async (i) => {
        this.setState({ sync: this.state.sync, highlightedRoom: i - 1 , clicked: true });
        await this.getNumberOfRooms(i);
    }

    getNumberOfRooms = async (i) => {
        const response = await fetch(`http://localhost:3001/room/${i}`);
        console.log(await response.json());
    }

}