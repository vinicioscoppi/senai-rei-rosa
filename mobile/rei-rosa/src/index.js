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
import Card from './screens/Card/View/index';
import {
  _1P_MODE, 
  _NEW_PLAYER,
  _1P_ROOM_NEWGAME,
  _1P_ROOMS
} from './config/dev_config';
import {screen} from './enums/screen';
import { states } from './enums/states';
import * as CONFIG from './config/config';
import * as utils from './util/utils';

import {DECK} from './config/cardConfig';
import { PopupRunOutOf } from './components/PopupRunOutOf';
export default class App extends Component {
  constructor(props){
    super(props);
    const testing = false;
    const initRoom = testing ? 
      _1P_ROOMS[_1P_ROOMS.length-1] : _1P_ROOMS[0]
    this.state = initRoom;
    console.log("\n \n \n \n \n \n \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    this.setDeck();
  }
  componentDidMount(){
    clearInterval(this.atributeTimers);
    if(this.state.gameRunning){
      this.setAtributeTimers();
      this.setDeck();
    }
  }
  setAtributeTimers(){
    this.atributeTimers = setInterval(()=>{
      let u = {};
      let increment; 
      for(let att of CONFIG.TEAM_ATRIBUTES){
        increment = -1*CONFIG.TIMER_UPDATE_TIME*att.points/att.time;
        u[att['name']]=this.state[att['name']]+increment;
        if(u[att['name']]<=0){
          this.runOutOf(att);
        }
      }
      this.updateGame(u);
    },CONFIG.TIMER_UPDATE_TIME)
  }
  setDeck(){
    this.deckIds = utils.shuffleArray(
      DECK.map((el)=>{return el['id']})
    );
    console.log("DECK READY");
  }
  runOutOf(att){
    if(utils.getMyScreen(this.state)!==screen.RUN_OUT_OF){
      this.screenBeforePopup = utils.getMyScreen(this.state);
    }
    let u = {}; u[att['name']]=0; u['gameState'] = this.state.gameState;
    u['players'] = utils.getMyUpdatedPlayer(this.state, {screen:screen.RUN_OUT_OF});
    clearInterval(this.atributeTimers);
    this.updateGame(u);
  }
  onRunOutOfSolve(att){
    let up = {};
    up[att['name']]=att['points'];
    up['square'] = utils.getRefillSquare(this.state,att);
    up['players'] = utils.getMyUpdatedPlayer(this.state,{screen:this.screenBeforePopup})
    this.updateGame(up);
    this.screenBeforePopup = null;
    this.setAtributeTimers();
  }
  findMyPlayer(){
    return this.state['players'].find((p)=>{
      if(p!=null){
        return p['classId'] === this.state['myClass'];
      }
    })
  }
  findMyPlayerIndex(){
    return this.state['players'].findIndex((p)=>{
      if(p!=null){
        return p['classId'] === this.state['myClass'];
      }
    })
  }
  getMyUpdatedPlayer(u){
    const myPlayer = this.findMyPlayer();
    const myUpdatedPlayer = {...myPlayer,...u};
    const myIndex = this.findMyPlayerIndex();
    let gamePlayers = this.state['players'];
    gamePlayers[myIndex] = myUpdatedPlayer;
    return gamePlayers;
  }
  updateGame(u){
    console.log("UPDATING GAME")
    let myUpdatedGame = {...this.state,...u}
    console.log(myUpdatedGame);
    if(this.state.gameRunning == false){
      this.warnAllPlayers();
    }
    this.setState(myUpdatedGame);
  }
  addMyPlayer(myPlayer){
    const myIndex = this.state['players'].findIndex((p)=>{return p==null})
    let newPlayers = this.state['players'];
    newPlayers[myIndex] = myPlayer
    return newPlayers;
  }
  findTurn(){
    let validPIds = this.state['players'].filter((el)=>{
      return el!=null
    }).map((el)=>{
      return el['classId'];
    })

    if(this.state.turn === null){
      return validPIds[0];
    } else {
      return this.state.turn++%validPIds.length;
    }
  }
  // Must implement later...
  warnAllPlayers(){
    //console.warn(`Warning all players`);
  }
  getMyScreen(){
    if(this.state['gameRunning'])
      return this.state['players'][this.findMyPlayerIndex()]['screen'];
    if(isNull(this.state['room']))
      return screen.CHOOSE_ROOM;
    if(isNull(this.state['myClass']))
      return screen.CHOOSE_CLASS;
  }
  startGame(myClass){
    if(_1P_MODE){
      this.updateGame({
        myClass:myClass,
        gameRunning:true,
        gameState:states.STARTING_GAME
      },this.addMyPlayer({
        ...createPlayer(myClass),
        ...{screen:screen.ATRIBUTE_SCREEN}})
      )
      console.log("STARTING 1 PLAYER MODE...\nHAVE FUN :)")
    } else{
      //console.log("MULTIPLAYER MODE STILL NOT WORKING :C");
      return null;
    }
  }
  updateFlow(gs,scr){
    this.updateGame({
      gameState:gs,
      players:this.getMyUpdatedPlayer({screen:scr})
    })
  }

  _getInitialAtributes(n){
    const G = this.state;
    const MY_PLAYER = utils.findMyPlayer(G);
    const myNullAtts = utils.findMyNullAtributes(MY_PLAYER)
    
    const nextNullAtt = myNullAtts[0];
    const lastIteration = myNullAtts.length > 1;
    
    let update={}, newGS, newScr; 
    update[nextNullAtt?.['name']]=n;
    
    if(lastIteration){
      newGS=states.SPIN_GET_ATRIBUTES; newScr=screen.ROULETTE;
    } else {
      newGS=states.WAITING_FOR_ACTION; newScr=screen.ATRIBUTE_SCREEN;
    }

    update['screen'] = newScr;
    this.updateGame({players:this.getMyUpdatedPlayer(update),gameState:newGS,turn:utils.findTurn(this.state)});
  }

  _advanceSquares(n){
    const newSquare = this.state.square + n;
    let newGState, newScreen;
    ///... check if there is a card
      if(CONFIG.CARD_SQUARES.includes(newSquare)){
        newScreen = screen.CARD;
        newGState = states.CARD_CLOSED;
      } else {
        newScreen = screen.ATRIBUTE_SCREEN;
        newGState = states.WAITING_FOR_ACTION;
      }
      delay(1500).then(()=>{
        this.updateGame({
          square:newSquare,
        })
        this.updateFlow(newGState,newScreen);
      })
      
  }

  componentDidUpdate(){
    console.log("COMPONENT UPDATED")
    const G = this.state;
    const GS = G.gameState;
    const CUR_SCR = this.getMyScreen();
    if(G.square > CONFIG.BOARD_SIZE && GS != states.END){
      this.updateFlow(states.END,screen.END);
      clearInterval(this.atributeTimers);
      console.log("YOU WON THE GAME");
    }
    if(this.atributeTimers === undefined || this.atributeTimers === null && this.state.gameRunning){
      this.setAtributeTimers();
    }
  }
  render() {
    console.log(this.state)
    const G = this.state;
    const GS = G.gameState;
    logState(GS);
    switch(this.getMyScreen()){  
      case screen.CHOOSE_ROOM:
        return (
          <ChooseRoom 
            gameStats={this.state} 
            updateGame={(u)=>this.updateGame(u)}>
          </ChooseRoom>
        )
      case screen.CHOOSE_CLASS:
        return (
          <ChooseClass 
            gameStats={this.state} 
            onConfirmClass={(cls)=>this.startGame(cls)}>
          </ChooseClass>
        );
      case screen.ATRIBUTE_SCREEN:
        if(GS == states.STARTING_GAME){
          return (
            <AtributeScreen 
              disabled={true}
              onScreenClick={()=>{this.updateFlow(states.SPIN_GET_ATRIBUTES,screen.ROULETTE)}}
              gameStats={this.state} 
              updatePlayer={(newState) => this.updatePlayers(newState)}
              updateGame={(u) => this.updateGame(u)}
              updateFlow={(g,s)=>this.updateFlow(g,s)}>
            </AtributeScreen>
          );
        } 
        if(GS == states.WAITING_FOR_ACTION){
          return(
            <AtributeScreen
              onScreenClick={()=>{this.updateFlow(states.SPIN_NUMBER_OF_SQUARES,screen.ROULETTE)}}
              gameStats={this.state} 
              updatePlayer={(newState) => this.updatePlayers(newState)}
              updateGame={(u)=>this.updateGame(u)}
              updateFlow={(g,s)=>this.updateFlow(g,s)}>
            </AtributeScreen>
          )
        } 
        if(GS == states.CARD_OPENED){
          return (
          <AtributeScreen
            onScreenClick={()=>{this.updateFlow(states.CARD_OPENED,screen.CARD);}}
            gameStats={this.state} 
            updatePlayer={(newState) => this.updatePlayers(newState)}
            updateGame={(u)=>this.updateGame(u)}
            updateFlow={(g,s)=>this.updateFlow(g,s)}>
          </AtributeScreen>
          )
        } else {
          return(
            <AtributeScreen
              gameStats={this.state} 
              updatePlayer={(newState) => this.updatePlayers(newState)}
              updateGame={(u) => this.updateGame(u)}
              updateFlow={(g,s)=>this.updateFlow(g,s)}>
            </AtributeScreen>
          )
        }
      case screen.ROULETTE:
        if(GS == states.SPIN_GET_ATRIBUTES){
          return (
            <Roulette gameStats={this.state} onSpinEnd={(n) => {this._getInitialAtributes(n)}}></Roulette>
          );
        }
        if(GS == states.SPIN_NUMBER_OF_SQUARES){ 
          return(
            <Roulette gameStats={this.state} onSpinEnd={(n) => {this._advanceSquares(n)}} lockOnSpinEnd={true}></Roulette>
          );
        }
        break;
      case screen.CARD:
        return (
          <Card 
            deckIds={this.deckIds} 
            updateFlow={(g,s)=>{this.updateFlow(g,s)}} 
            gameStats={this.state} 
            updateGame={(u) => {this.updateGame(u)}}>
          </Card>
        );
      case screen.RUN_OUT_OF:
        return(
          <PopupRunOutOf onSolve={(att)=>{this.onRunOutOfSolve(att)}} gameStats={this.state} updateGame={(u) => {this.updateGame(u)}}></PopupRunOutOf>
        );
      case screen.END:
        return(
          <View>
            <Text>Você venceu o jogo!</Text>
          </View>
        );
      default:
        return(
          <View>
            <Text>Tela não implementada...</Text>
          </View>
        )
    }
  }
}

let forceonce = true;
const atts = [{"id":1,"name":"strength"},
{"id":2,"name":"bravery"},
{"id":3,"name":"friendship"},
{"id":4,"name":"wisdom"},]    

const rol = () => {return Math.floor(Math.random()*6+1);} // random between 1-6
const isNull = (x) => {return x === null}; 
const hasNullEl = (a) => {return a.filter(isNull).length > 0};
const fillAtts = (pl,a) => {
  for(var i=0;i<atts.length;i++){
    pl[atts[i]["name"]]=a[i];
}return pl}

const nextNullAtt = (pl) =>{
  for(let att of atts){
    if(isNull(pl[att["name"]]))
      return att["name"];
  }
}
const logAtts = (pl) =>{
  for(att of atts){
      console.log(`${att['name']}:${pl[att['name']]}`);   
  }
}
const wait = (t,f) =>{
  setTimeout(()=>{f},1000*t);
}

const attsToArray = (pl) =>{
  let myatts=[];
  for(var att of atts){
      myatts.push(pl[att["name"]])
  }
  return myatts;    
}
const createPlayer = (cid) => {
  let a=[],pl=_NEW_PLAYER;
  for(var i=0;i<atts.length;i++){
      a[i] = i === cid-1 ? 6 : null 
  }    
  _NEW_PLAYER['classId'] = cid;
  return fillAtts(pl,a);
}
const delay = t => new Promise(resolve => setTimeout(resolve, t));

const logState = (s) =>{
  let l;
  switch(s){
    case states.HALT: 
      l = "HALT";
      break;
    case states.CHOOSING_CLASS: 
      l = "CHOOSING_CLASS";
      break;
    case states.CHOOSING_ROOM: 
      l = "CHOOSING_ROOM";
      break;
    case states.STARTING_GAME: 
      l = "STARTING_GAME";
      break;
    case states.SPIN_GET_ATRIBUTES: 
      l = "SPIN_GET_ATRIBUTES";
      break;
    case states.WAITING_FOR_ACTION: 
      l = "WAITING_FOR_ACTION";
      break;
    case states.SPIN_NUMBER_OF_SQUARES: 
      l = "SPIN_NUMBER_OF_SQUARES";
      break;
    case states.SPIN_PROBABILITY_CARD:
      l = "SPIN_PROBABILITY_CARD"; 
      break;
    case states.SPINNING:
      l = "SPINNING";
      break;
    case states.REVEAL_SPIN_RESULT:
      l = "REVEAL_SPIN_RESULT";
      break;
    case states.CARD_CLOSED:
        l = "CARD_CLOSED";
        break;
    case states.CARD_OPENED:
        l = "CARD_OPENED";
        break;
    case states.VOTING:
        l = "VOTING";
        break;
    case states.VOTE_END_AGREE:
        l = "VOTE_END_AGREE";
        break;
    case states.VOTE_END_DISAGREE:
        l = "VOTE_END_DISAGREE";
        break;
    case states.GAME_ENDING:
        l = "GAME_ENDING";
        break;
    default:
        l = "UNDEFINED STATE...";
        break;   
  }
  console.log(l);
  //return l;
}
const logScr = (scr) =>
{
  let l;
  switch(scr){
    case screen.CHOOSE_ROOM: 
      l = "CHOOSE_ROOM";
      break;
    case screen.CHOOSE_CLASS: 
      l = "CHOOSE_CLASS";
      break;
    case screen.ATRIBUTE_SCREEN: 
      l = "ATRIBUTE_SCREEN";
      break;
    case screen.ROULETTE: 
      l = "ROULETTE";
      break;
    case screen.CARD: 
      l = "CARD";
      break;
    case screen.END:
      l = "END";
      break;
    default:
      l = "UNDEFINED SCREEN";
      break;
  }
  console.log(l)
}
/*ar = [rol(),rol(),rol(),rol()];

player = {};
player = fillAtts(player,ar)
/*for(att of atts){
    player[att["name"]]=rol()
};
myatts=[];
for(att of atts){
    myatts.push(player[att["name"]])
};

console.log(player);
console.log(ar);*/

// Ingessão de dependência 
// Inversão de Controle