import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from './../../enums/color';
import { icons } from './../../enums/icons';
const update_each_n_seconds = 0.125 // the smaller this const is, the smoother the timer ticks
const time_smoothness = 1/update_each_n_seconds;

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
                        time={60}
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
                        time={60}
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
        this.state = {
            seconds: this.props.time
            *time_smoothness,
        }
    }
    render()
    {
        return(
            <View style={styles.teamAtributeBar}>
                <Text style={[
                        this.props.style,
                        {width:styles.teamAtributeBar.width * this.state.seconds / (this.props.time*time_smoothness)}
                    ]}>
                        {this.props.title} {this.state.seconds}
                </Text>
            </View>
        );
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
          const { seconds } = this.state
          if (seconds > 0) {
            this.setState(({ seconds }) => ({
              seconds: seconds - 1
            }))
          }
          if (seconds === 0) {
              clearInterval(this.myInterval)
              alert("O tempo acabou!")
          }
        }, 1000/time_smoothness)
      }
}
