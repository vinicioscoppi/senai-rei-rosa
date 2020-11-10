import { StyleSheet,Dimensions } from 'react-native';
import {color} from './../../enums/color';

const SCREEN_WIDTH = Dimensions.get("window").width;
const BAR_WIDTH_PERCENT = 0.91;
const BAR_MARGIN = 5;

const INITIAL_WIDTH = SCREEN_WIDTH * BAR_WIDTH_PERCENT - 2*BAR_MARGIN;

export const styles = StyleSheet.create({
    teamAtributes:{
        flex:1,
        flexDirection:"column",
        justifyContent:"space-evenly",
        marginHorizontal:BAR_MARGIN,
    },
    teamAtributeView:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection: 'row',
    },
    barView:{
        flex:0.9,
    },
    iconView:{
        flex:0.1,
    },
    barView:{
        flexDirection:"column",
        flex:1,
        backgroundColor:"#000000",
    },
    teamAtributeBar: {
        width: INITIAL_WIDTH,
        flexDirection: 'row',
    },
    waterBar: {
        backgroundColor: color.WATER,
        borderWidth: 1,
    },
    foodBar: {
        backgroundColor: color.FOOD,
        borderWidth: 1
    },
    icons: {
        fontSize:30,
        textAlign: 'center',
    }, 
});