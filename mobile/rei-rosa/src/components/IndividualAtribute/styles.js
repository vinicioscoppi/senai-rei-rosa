import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    atributes: {
        flex:1,
        flexDirection:'row',
    },
    atributeBar: {
        flex:0.25,
        paddingHorizontal:5,
        paddingVertical:10,
        flexDirection:"column",
    },
    atributeBarCells:{
        flexDirection:"column",
        backgroundColor:"#000000",// fixes empty spaces between cells
        flex:6/7,
    },
    atributeBarTitle:{
        flex:1/7,
        borderWidth:1,
    },
    cellView:{
        flex:1/6,
    },
    atributeCell: {
        borderColor:"#000000",
        height:"100%",
        borderWidth:1,
        //alignItems:"center",
        //justifyContent:"center",
    },
    iconView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    icon:{
        fontSize:40,
    },
    _id:{
        fontSize:0,//id Text doesn't have to exist really... just dev purposes :)
    }
});