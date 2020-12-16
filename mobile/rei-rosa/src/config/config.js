import { icons } from './../enums/icons';
import { color } from './../enums/color';

const SECOND = 1000;
const MINUTE = 60*SECOND;

export const PLAYER_CLASSES = 
[
    { id: '1', name: 'warrior', icon: icons.CLASS_WARRIOR  , color: color.CLASS_WARRIOR , speciality:'1'},
    { id: '2', name: 'archer' , icon: icons.CLASS_ARCHER   , color: color.CLASS_ARCHER  , speciality:'2'},
    { id: '3', name: 'mage'     , icon: icons.CLASS_MAGE     , color: color.CLASS_MAGE    , speciality:'3'},
    { id: '4', name: 'inventor' , icon: icons.CLASS_INVENTOR , color: color.CLASS_INVENTOR, speciality:'4'},
]

export const PLAYER_ATRIBUTES = 
[
    {id: '1', name: 'strength'  , icon:icons.STRENGTH  , colorEnabled:color.STRENGTH_ENABLED  , colorDisabled:color.STRENGTH_DISABLED},
    {id: '2', name: 'bravery'   , icon:icons.BRAVERY   , colorEnabled:color.BRAVERY_ENABLED   , colorDisabled:color.BRAVERY_DISABLED},
    {id: '3', name: 'friendship', icon:icons.FRIENDSHIP, colorEnabled:color.FRIENDSHIP_ENABLED, colorDisabled:color.FRIENDSHIP_DISABLED},
    {id: '4', name: 'wisdom'    , icon:icons.WISDOW    , colorEnabled:color.WISDOW_ENABLED    , colorDisabled:color.WISDOM_DISABLED},
]

export const TEAM_ATRIBUTES = 
[
    {id:1, name:'water', icon:icons.WATER, color:color.WATER, time:5*MINUTE, points:10, refillSquares:[0,21]},
    {id:2, name:'food' , icon:icons.FOOD , color:color.FOOD , time:5*MINUTE, points:10, refillSquares:[0,10]}
]

export const ROULETTE_DATA = [1,2,3,4,5,6]

export const CARD_SQUARES = [
    1,2,3,4,5,6,7,8,9,10,
    11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,
    41,42,43,44,45
];

export const BIOMES=[
    {id:1, name:'forest'  , icon:icons.BIOME_FOREST  , color:color.BIOME_FOREST  , squares:[0,1,2,3,4,5,6,7,8,9,10,11,12,37,38,39,40,41,42,43,44,45]},
    {id:2, name:'desert'  , icon:icons.BIOME_DESERT  , color:color.BIOME_DESERT  , squares:[13,14,15,16,17,18,19,20,21,22,23,24]},
    {id:3, name:'mountain', icon:icons.BIOME_MOUNTAIN, color:color.BIOME_MOUNTAIN, squares:[25,26,27,28,29,30,31,32,33,34,35,36]}
];

export const BOARD_SIZE = 45;

export const TIMER_UPDATE_TIME = 10*SECOND;