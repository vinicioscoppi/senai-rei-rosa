import { states } from '../enums/states';
import {screen} from './../enums/screen';
import {DECK} from './../config/cardConfig';
export const _1P_MODE = true;
const getCard = id => {
    return DECK.find((c)=>{return c['id']==id;})
}
export const _1P_ROOM_NULL = {
    water:100,
    food:100,
    square:0,
    turn:1,
    gameRunning:false,
    card:null,
    myClass:null,
    gameState:null,
    proposal:null,
    players:[
        {
            classId:null,
            strength:null,
            bravery:null,
            friendship:null,
            wisdom:null,
            screen:screen.CHOOSE_ROOM,
            vote:null,
        },
        null,
        null,
        null,
    ]
}
export const _1P_ROOM_FILLED = {
    water:100,
    food:100,
    square:0,
    turn:1,
    gameRunning:false,
    card:null,
    myClass:1,
    gameState:states.VOTING,
    proposal:null,
    players:[
        {
            classId:1,
            strength:6,
            bravery:4,
            friendship:2,
            wisdom:3,
            screen:screen.ATRIBUTE_SCREEN,
            vote:null,
        },
        null,
        null,
        null,
    ]
}
export const _1P_ROOMS=[
 {"card": null,"cardIndex":0, "food": 10, "gameRunning": false, "gameState":states.CHOOSING_ROOM,"myClass":null,"players":[null,null,null,null],"proposal":null,"room":null,"square":0,"turn":null,"water":10},
,{"card": null, "cardIndex": 0, "food": 10, "gameRunning": true, "gameState": 5, "myClass": "4", "players": [{"bravery": 5, "classId": "4", "friendship": 2, "screen": 3, "strength": 3, "vote": null, "wisdom": 6}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": 0, "water": 10},
,{"card": getCard(16), "cardIndex": 7, "food": 9.995833333333328, "gameRunning": true, "gameState": 11, "myClass": "4", "players": [{"bravery": 4, "classId": "4", "friendship": 3, "screen": 3, "strength": 4, "vote": null, "wisdom": 2}, null, null, null], "proposal": null, "room": 1, "square": 25, "turn": 0, "water": 9.995833333333328},
,{"card": getCard(21), "cardIndex": 4, "food": 8.96666666666667, "gameRunning": true, "gameState": 10, "myClass": "4", "players": [{"bravery": 4, "classId": "4", "friendship": 4, "screen": 5, "strength": 1, "vote": null, "wisdom": 6}, null, null, null], "proposal": null, "room": 1, "square": 14, "turn": 0, "water": 6.661338147750939e-16},

/*{"card": null,"cardIndex":0, "food": 10, "gameRunning": false, "gameState": 2, "myClass": null, "players": [null, null, null, null], "proposal": null, "room": null, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 3, "myClass": "1", "players": [{"bravery": null, "classId": "1", "friendship": null, "screen": 3, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": false, "gameState": 2, "myClass": null, "players": [null, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": null, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": null, "classId": "1", "friendship": null, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": null, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 5, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 3, "strength": 6, "vote": null, "wisdom": 2}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 5, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 3, "strength": 6, "vote": null, "wisdom": 2}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 6, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 4, "strength": 6, "vote": null, "wisdom": 2}, null, null, null], "proposal": null, "room": 1, "square": 4, "turn": null, "water": 10}
,{"card": null,"cardIndex":0, "food": 10, "gameRunning": true, "gameState": 10, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 5, "strength": 6, "vote": null, "wisdom": 2}, null, null, null], "proposal": null, "room": 1, "square": 4, "turn": null, "water": 10}
*/]
export const _1P_ROOM_NEWGAME={
    "card": null, 
    "food": 10, 
    "gameRunning": false, 
    "gameState": states.CHOOSING_ROOM, 
    "myClass":null, 
    "players": [null,null,null, null], 
    "proposal": null, 
    "room": null,
    "square": 0, 
    "turn": null, 
    "water": 10,
}

export const _1P_ROOM_CHOOSINGCLASS = {
    "card": null, 
    "food": 10, 
    "gameRunning": false, 
    "gameState": 2, 
    "myClass": null, 
    "players": [null, null, null, null], 
    "proposal": null, 
    "room": 1, 
    "square": 0, 
    "turn": null, 
    "water": 10
}

export const _NEW_PLAYER = {
    classId:null,
    strength:null,
    bravery:null,
    friendship:null,
    wisdom:null,
    screen:null,
    vote:null,
}
