import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextView } from './components/TextView/index';
import ChooseClass from './screens/ChooseClass/View/index';
import AtributeScreen from './screens/AtributeScreen/View/index';
import ChooseRoom from './screens/ChooseRoom/View/index';
import Roulette from './screens/Roulette/View/index';
import {_1P_MODE, _1P_ROOM_FILLED} from './config/dev_config';
import {screen} from './enums/screen';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = _1P_MODE ? _1P_ROOM_FILLED : startGame();
  }

  startGame(){
    return null; // Falta Implementar
  }

  updateGame(newState){
    this.setState(newState);
  }

  updatePlayer(newState){
    this.setState({
      players: newState
    });
  }
  

  render() {
    const CUR_SCREEN = this.state.players[this.state.myClass-1].screen;
    switch(CUR_SCREEN){
      case screen.CHOOSE_ROOM:
        return (
          <ChooseRoom 
            gameStats={this.state} 
            updateGame={(newState) => this.updateGame(newState)}>
          </ChooseRoom>
        );
      case screen.CHOOSE_CLASS:
        return (
          <ChooseClass 
            gameStats={this.state} 
            updateGame={(newState) => this.updateGame(newState)}>
          </ChooseClass>
        );
      case screen.ROULETTE:
        return (
          <Roulette 
            gameStats={this.state} 
            updateGame={(newState) => this.updateGame(newState)}>
          </Roulette>
        );
      case screen.ATRIBUTE_SCREEN:
        return (
          <AtributeScreen 
            gameStats={this.state} 
            updatePlayer={(newState) => this.updatePlayer(newState)}
            updateGame={(newState) => this.updateGame(newState)}>
          </AtributeScreen>
        );
      default:
        return(
          <View>
            <Text>Tela não encontrada...</Text>
          </View>
        )
    }
  }
}
/*
  _countVotes(){
    let players = this.state.gameStats.players;
    let votes = [0,0,0];
    for(var i=0; i < players.length; i++){
      if (players[i] != null){
        if(players[i].vote == false){
          votes[0]++;
        } 
        if(players[i].vote == true){
          votes[1]++;
        }
        if(players[i].vote == null){
          votes[2]++;
        }
      }
    }
    return votes;
  }*/