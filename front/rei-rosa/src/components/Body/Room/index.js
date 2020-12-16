import React from 'react';

import { Container } from './styles';
import Button from './Button';
import arrayFromTo from '../../../utils/array-from-to';

export default class Room extends React.Component {

    state = { highlightedRoom: 0, anyRoomClickedBefore: false, rooms: [] };

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
                onClick={this.handleClick}
                clicked={this.state.anyRoomClickedBefore}
                id={i}
                highlight={highlight}
                sync={this.props.sync}
                mouseEnter={this.handleMouseEnter}
                mouseLeave={this.handleMouseLeave}
            />
        );
    }

    handleMouseEnter = (i) => {
        if (!this.state.anyRoomClickedBefore)
            this.setState({ highlightedRoom: i, anyRoomClickedBefore: false, rooms: [] });
    }

    handleMouseLeave = () => {
        if (!this.state.anyRoomClickedBefore)
            this.setState({ highlightedRoom: -1, anyRoomClickedBefore: false, rooms: [] });
    }

    handleClick = async (i) => {
        if (this.props.sync === false) {
            if (!this.state.anyRoomClickedBefore)
                this.props.superHandleClick();

            this.setState({ highlightedRoom: i, anyRoomClickedBefore: true, rooms: await this.getRooms(i + 1) });
        }
    }

    getRooms = async (i) => {
        const response = await fetch(`http://localhost:3001/room/${i}`);
        return await response.json();
    }

}