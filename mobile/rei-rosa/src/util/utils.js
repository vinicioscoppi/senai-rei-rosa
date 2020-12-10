import {screen} from './../enums/screen';
import {icons} from './../enums/icons';
import {color} from './../enums/color';
import {states} from './../enums/states';

import { PLAYER_CLASSES } from "./../config/config";
import {BIOME, DECK, DECK_CHOICE,DECK_EFFECT,DECK_FOREST,DECK_PROBABILITY, TYPE, VOTE} from './../config/cardConfig';
import { DECK_DESERT, DECK_MOUNTAIN } from '../config/cardConfig';
import * as CONFIG from '../config/config';

export const atts = [{"id":1,"name":"strength"},
{"id":2,"name":"bravery"},
{"id":3,"name":"friendship"},
{"id":4,"name":"wisdom"},]    

export const rol = () => {return Math.floor(Math.random()*6+1);} // random between 1-6
export const isNull = (x) => {return x === null}; 
export const hasNullEl = (a) => {return a.filter(isNull).length > 0};
export const fillAtts = (pl,a) => {
  for(var i=0;i<atts.length;i++){
    pl[atts[i]["name"]]=a[i];
}return pl}

export const nextNullAtt = (pl) =>{
  for(let att of atts){
    if(isNull(pl[att["name"]]))
      return att["name"];
  }
}
export const logAtts = (pl) =>{
  for(att of atts){
      console.log(`${att['name']}:${pl[att['name']]}`);   
  }
}
export const wait = (t,f) =>{
  setTimeout(()=>{f},1000*t);
}

export const attsToArray = (pl) =>{
  let myatts=[];
  for(var att of atts){
      myatts.push(pl[att["name"]])
  }
  return myatts;    
}
export const createPlayer = (cid) => {
  let a=[],pl=_NEW_PLAYER;
  for(var i=0;i<atts.length;i++){
      a[i] = i === cid-1 ? 6 : null 
  }    
  return fillAtts(pl,a);
}
export const delay = t => new Promise(resolve => setTimeout(resolve, t));

export const logState = (s) =>{
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
}
export const logScr = (scr) =>
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

export const findMyPlayer = (G) => {
    return G?.players.find((el)=>{
        if(el!=null){
            return el['classId'] === G['myClass'];
        }
    })
}
  
export const findMyPlayerIndex = (G) => {
    return G['players'].findIndex((el)=>{
        if(el!=null){
            return el['classId'] === G['myClass'];
        }
    })
}

export const getMyUpdatedPlayer = (G,u) => {
    const myPlayer = findMyPlayer(G);
    const myUpdatedPlayer = {...myPlayer,...u};
    const myIndex = findMyPlayerIndex(G);
    let gamePlayers = G['players'];
    gamePlayers[myIndex] = myUpdatedPlayer;
    return gamePlayers;
}

export const findTurn = (G) => {
    let validPIds = G['players'].filter((el)=>{
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

export const getMyScreen = (G) => {
  
    if(G?.['gameRunning'])
        return G['players'][findMyPlayerIndex(G)]['screen'];
    if(isNull(G?.['room']))
        return screen.CHOOSE_ROOM;
    if(isNull(G?.['myClass']))
        return screen.CHOOSE_CLASS;
}

export const getMyClassname = (G) => {
    const myp = findMyPlayer(G);
    return PLAYER_CLASSES.find(
        (el)=>{return el['id'] == myp?.classId}
    )?.name
}

export const getMyBiome = (n) => {
  const M = CONFIG.BIOMES.filter((b)=>{
    return b['squares'].includes(n);
  })[0];
  if(M.length>1)
    console.error(`SQUARE NUMBER ${n} MUST BELONG TO ONLY ONE BIOME IN CONFIG FILE.\nCURRENTLY IT BELONGS TO BIOMES WITH IDS ${M.map((b)=>{return b['id']})}`);
  if(M.length==0)
    console.error(`NO BIOME CONTAINS SQUARE NUMBER '${n}' in SQUARES ATRIBUTE`);
  return M;
}

export const getDeck = (n) => {
  const biome = getMyBiome(n);
  switch(biome['id']){
    case 1:
      return DECK_FOREST;
    case 2:
      return DECK_DESERT;
    case 3:
      return DECK_MOUNTAIN;
    default:
      console.error(`utils.getDeck => Bioma não encontrado: '${biome['id']}'\n retornei null :c`);
      return null;
  }
}

export const getCardColor = (c) => {
  return CONFIG.BIOMES.find((b)=>{
    return b['id'] == c['biome'];
  })['color']
}

export const shuffleArray = (a)=>{
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const nomeEmPortugues = (nome) =>{
  switch(nome){
    case'food':return 'comida';
    case'water':return 'água';
    case'warrior':return 'guerreiro';
    case'archer':return 'arqueiro';
    case'mage':return 'mago';
    case'inventor':return 'inventor';
    case'strength':return'força';
    case'friendship':return'amizade';
    case'bravery':return'coragem';
    case'wisdom':return'sabedoria';
    default:
      return 'PARECE QUE ESSE NOME NÃO TEM TRADUÇÃO EM PORTUGUÊS';
  }
}
export const getRefillSquare = (G,att) =>{
  const n = G.squares;
  const s = att['refillSquares'];
  const f = s.filter((el)=>{
    return el <= n;
  });
  return f[f.length-1]
}

export const getRunOutAtribute = () => {
  return CONFIG.TEAM_ATRIBUTES.filter((el)=> {
    return GS[el['name']] <= 0;
  })[0];
}

export const findMyNextNullAtribute = (myPlayer) => {
  return CONFIG.PLAYER_ATRIBUTES.find((el)=>{
    return myPlayer?.[el?.['name']] == null
  })
}

export const findMyNullAtributes = (myPlayer) => {
  return CONFIG.PLAYER_ATRIBUTES.filter((el)=>{
    return myPlayer?.[el?.['name']] == null
  })
}
/*
export const findMyFirstNullAtribute = (me) =>{
  for(att in CONFIG.PLAYER_ATRIBUTES){
    if(me[att['name']===null])
      return att;
  }
  return null;
}

console.log(utils.findMyFirstNullAtribute(MY_PLAYER))
*/