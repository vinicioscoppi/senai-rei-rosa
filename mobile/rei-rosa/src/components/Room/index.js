import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles';
import { maxNumberOfPlayers } from './../../config/roomConfig'
import Icon from 'react-native-vector-icons/FontAwesome'

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
                <Icon
                    style={styles.leftIcons} 
                    name={'heart'}
                    size={30}
                    color={this.props.color}
                />
                <Icon
                    style={styles.rightIcons}
                    name={'users'}
                    size={30}
                    color={this.props.color}
                />
                <Text style={styles.roomInfo}>
                    {this.state.players}/{this.state.max}
                </Text>
            </View>
        );
    }
}