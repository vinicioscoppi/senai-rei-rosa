import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TextView} from './../../../components/TextView/index';
import RoomList from './RoomList/index';
import {styles} from './styles';
export default class ChooseRoom extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View style={styles.screen}>
                <View style={styles.title}>
                    <TextView gameStats={this.props.gameStats}></TextView>
                </View>
                <View style={styles.roomList}>
                    <RoomList updateGame={(u) => this.props.updateGame(u)} numberOfRooms={10}></RoomList>
                </View>
            </View>
        );
    }
}