import React, {Component} from 'react';
import { View, Text, TouchableWithoutFeedback, Alert} from 'react-native';
import {styles} from './styles';
import { maxNumberOfPlayers } from './../../config/roomConfig'

//import { Icon } from 'react-native-vector-icons/Icon';
import { icons } from './../../enums/icons'

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
    tryEnterRoom = () => {
        if(this.state.players < this.state.max){
            Alert.alert(
                "Confirmação",
                "Você quer entrar na sala "+ this.props.number +"?",
                [
                    {
                        text:'Não',
                        onPress: () => {}
                    },
                    {
                        text:'Sim',
                        onPress: () => {this.enterRoom()}
                    }
                ]
            )
            
        } else {
            Alert.alert(
                "Sala cheia",
                "Não é possível entrar :("
            )
        }
    }
    enterRoom = () => {
        // Falta Implementar função que irá mandar as alterações para os demais jogadores
        this.setState({players:this.state.players + 1})
    }
    render()
    {
        return(
            <TouchableWithoutFeedback onPress={() => {this.tryEnterRoom()}}>
                <View style={styles.room}>
                    <View style={styles.roomIconView} >
                        <Text style={styles.roomNumber}>{this.props.number}</Text>
                    </View>
                    <View style={styles.roomInfo}>
                        <View style={styles.userIconView}>
                            <Icon style={styles.userIcon} name={'users'}/>
                        </View>
                        <View style={styles.numberOfUsersView}>
                            <Text style={styles.numberOfUsers}>
                                {this.state.players}/{this.state.max}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}