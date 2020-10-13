import React, { Component } from 'react';
import { View } from 'react-native';
import { Room } from './../../../../components/Room/index';
import { styles } from './styles';

export default class RoomList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rooms = [];
        for (var i = 0; i < this.props.numberOfRooms; i++){ 
            rooms.push(<Room key={i} style={styles.room} players={0} number={i+1}></Room>)
        };
        
        return (
            <View style={styles.roomList}>
                {rooms}
            </View>
        );
    }
}
/*

{this.state.cells.map((cell) => 
                   <View key={cell.props.id}>
                       {cell}
                   </View> 
                )}
                */