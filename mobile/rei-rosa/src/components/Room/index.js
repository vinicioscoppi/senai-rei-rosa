import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles';
import { maxNumberOfPlayers } from './../../config/roomConfig'

export class Room extends Component
{
    constructor(props){
        super(props);
        this.state = {
            players:this.props.players,
            max:maxNumberOfPlayers
        }
    }
    render()
    {
        return(
            <View style={styles.room}>
                <Text style={styles.roomInfo}>
                    {this.state.players}/{this.state.max}
                </Text>
            </View>
        );
    }
}