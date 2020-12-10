import { states } from '../enums/states';
import {screen} from './../enums/screen';

export const _1P_MODE = true;

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
    {"card":null,"food":10,"gameRunning":false,"gameState":states.CHOOSING_ROOM,"myClass":null,"players":[null,null,null,null],"proposal":null,"room":null,"square":0,"turn":null,"water":10},
,{"card": null, "food": 10, "gameRunning": false, "gameState": 2, "myClass": null, "players": [null, null, null, null], "proposal": null, "room": null, "square": 0, "turn": null, "water": 10}
,{"card": null, "food": 10, "gameRunning": true, "gameState": 3, "myClass": "1", "players": [{"bravery": null, "classId": "1", "friendship": null, "screen": 3, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null, "food": 10, "gameRunning": false, "gameState": 2, "myClass": null, "players": [null, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": null, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": null, "classId": "1", "friendship": null, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": null, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null, "food": 10, "gameRunning": true, "gameState": 4, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 4, "strength": 6, "vote": null, "wisdom": null}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
,{"card": null, "food": 10, "gameRunning": true, "gameState": 5, "myClass": "1", "players": [{"bravery": 1, "classId": "1", "friendship": 5, "screen": 3, "strength": 6, "vote": null, "wisdom": 2}, null, null, null], "proposal": null, "room": 1, "square": 0, "turn": null, "water": 10}
]
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
