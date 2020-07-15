import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import RoomList from './View/RoomList';
import styles from './styles';
export default class ChooseRoom extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View>
                <Text>
                    Escolha a sala
                </Text>
                <RoomList numberOfRooms={3}></RoomList>
            </View>
        );
    }
}