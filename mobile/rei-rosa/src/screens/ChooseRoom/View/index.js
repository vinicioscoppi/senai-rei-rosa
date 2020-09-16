import React, {Component} from 'react';
import { View } from 'react-native';
import { TextView } from './../../../components/TextView/index'
import RoomList from './RoomList/index';

export default class ChooseRoom extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View>
                <TextView text='Escolha sua sala:'></TextView>
                <RoomList numberOfRooms={3}></RoomList>
            </View>
        );
    }
}