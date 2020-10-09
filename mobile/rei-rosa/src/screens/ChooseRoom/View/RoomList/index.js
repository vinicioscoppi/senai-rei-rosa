import React, { Component } from 'react';
import { View } from 'react-native';
// import Room from './../Room/index';
import { Room } from './../../../../components/Room/index';

export default class RoomList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var rooms = [];
        for (var i = 0; i < this.props.numberOfRooms; i++) 
            rooms.push(<Room players={0} number={i} key={i}></Room>);
        
        return (
            <View>
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