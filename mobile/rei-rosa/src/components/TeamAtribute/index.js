import React, {Component} from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from './../../enums/color';
import { icons } from './../../enums/icons';
//import { PopupRunOutOf } from './../PopupRunOutOf/index';

import { timeForEachUpdate } from './../../config/roomConfig' // the smaller this const is, the smoother the timer ticks
import { PopupRunOutOf } from '../PopupRunOutOf';
const time_smoothness = 1/0.125; // #1 make it get from last line -> updates every 0.125 sec

export class TeamAtributes extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <SafeAreaView>
                <View style={styles.teamAtributes}>
                    <Icon 
                        style={styles.icons} 
                        name={icons.FOOD} 
                        size={30} 
                        color={color.FOOD}/>
                    <TeamAtributeBar 
                        style={styles.foodBar} 
                        title='Barra de Comida'
                        time={3}
                        icon={icons.FOOD}
                        color={color.FOOD}
                    ></TeamAtributeBar>
                </View>
                <View style={styles.teamAtributes}>
                    <Icon 
                        style={styles.icons} 
                        name={icons.WATER} 
                        size={30} 
                        color={color.WATER} />
                    <TeamAtributeBar 
                        style={styles.waterBar} 
                        title='Barra de Água'
                        time={3}
                        icon={icons.WATER}
                        color={color.WATER}
                    ></TeamAtributeBar>
                </View>
            </SafeAreaView>
        );
    }
}

export class TeamAtributeBar extends Component
{
    constructor(props){
        super(props);
        const defaultTime = this.props.time * time_smoothness;
        this.state = {
            seconds: defaultTime
        }
        this.setTimer = this.setTimer.bind(this);
    }
    render()
    {
        return(
            <View>
                <View style={styles.teamAtributeBar}>
                    <Text style={[
                        this.props.style,
                        {width:styles.teamAtributeBar.width * this.state.seconds / (this.props.time*time_smoothness)}
                    ]}>
                        {this.props.title} {this.state.seconds}
                    </Text>
                </View>

                <PopupRunOutOf icon={this.props.icon} color={this.props.color} title={this.props.title} timeIsUp={this.state.seconds === 0} action={this.setTimer}>
                </PopupRunOutOf>

            </View>
        );
    }
    setTimer(){
        const defaultTime = this.props.time * time_smoothness;
        this.setState({
            seconds:defaultTime
        })
        this.myInterval = setInterval(() => {
            const { seconds } = this.state // interesting syntax...
            if (seconds > 0) {
              this.setState(({ seconds }) => ({
                seconds: seconds - 1
              }))
            }
            if (seconds === 0) {
                clearInterval(this.myInterval)
            }
          }, 1000/time_smoothness)
    }
    clearTimer(){
        clearInterval(this.myInterval);
    }
    componentDidMount() {
        const defaultTime = this.props.time * time_smoothness;
        this.setTimer(defaultTime);
    }
    componentWillUnmount(){
        this.clearTimer();
    }
}
