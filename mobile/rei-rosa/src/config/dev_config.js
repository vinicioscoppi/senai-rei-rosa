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
            strenght:null,
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
    myClass:1,
    gameState:states.VOTING,
    proposal:null,
    players:[
        {
            classId:1,
            strenght:6,
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
/*
**NEW_ROOM** = {
    water:100,
    food:100,
    square:0,
    turn:1,
    gameRunning:false,
    players:{
        1:null,
        2:null,
        3:null,
        4:null,
    }
}

**NEW_PLAYER** = {
    myClass:null,
    strenght:null,
    bravery:null,
    friendship:null,
    wisdow:null,
    screen:screen.CHOOSE_ROOM,
    vote:null,
}

** FUNÇÕES **

*BackEnd*
createRooms(n)
syncRooms(rooms) 
haltGame()

*Mobile*
getRooms() 
haltGame() 
updateRoom(state) 
runOutOf(atrib) 
gotoSquare(n) 
vote(vote) 
propose(state) 
openCard() */