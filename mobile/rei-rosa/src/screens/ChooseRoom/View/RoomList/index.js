import React, { Component } from 'react';
import { View } from 'react-native';
import { Room } from './../../../../components/Room/index';
import { styles } from './styles';

export default class RoomList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.roomList}>
                <Room>{this.props.numberOfRooms}</Room>
                <Room>{this.props.numberOfRooms}</Room>
                <Room>{this.props.numberOfRooms}</Room>
                <Room>{this.props.numberOfRooms}</Room>
                <Room>{this.props.numberOfRooms}</Room>
                <Room>{this.props.numberOfRooms}</Room>
                <Room>{this.props.numberOfRooms}</Room>
                <Room>{this.props.numberOfRooms}</Room>
                <Room>{this.props.numberOfRooms}</Room>
            </View>
        );
    }
}
