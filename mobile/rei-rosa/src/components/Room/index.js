import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback} from 'react-native';
import {styles} from './styles';
import { maxNumberOfPlayers } from './../../config/roomConfig'
//import { Icon } from 'react-native-vector-icons/Icon';
import { icons } from './../../enums/icons'
export class Room extends Component
{
    constructor(props){
        super(props);
        this.state = {
            players:this.props.players,
            max:maxNumberOfPlayers
        }
    }
    enterRoom = () => {
        if(this.state.players < this.state.max){
            alert("Entered!")
            this.setState({players:this.state.players + 1})
        } else {
            alert("Cant Enter!")
        }
    }
    render()
    {
        return(
            <TouchableWithoutFeedback onPress={() => {this.enterRoom()}}>
                <View style={styles.room}>
                    <Text style={styles.roomInfo}>
                        {this.state.players}/{this.state.max}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}