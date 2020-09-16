import React, { Component } from 'react';
import { View } from 'react-native';
// import Room from './../Room/index';
import { Room } from './../../../../components/Room/index';

export default class RoomList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Room>{this.props.numberOfRooms}</Room>
            </View>
        );
    }
}
