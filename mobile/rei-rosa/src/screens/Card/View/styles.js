import { StyleSheet } from 'react-native';
import {color} from './../../../enums/color';
export const styles = StyleSheet.create({
    // CC stands for Card Closed
    // CO stands for Card Opened
    card: {
        flex:1,
        //backgroundColor:"#ffffff",
        //borderColor:"#000000",
        borderWidth:10,
    },
    
    //Style for Card Closed screen
    CCTextView:{
        flex:0.3,
        //backgroundColor:"#0000ff",
        justifyContent:"center",
        //textAlignVertical:"center",
    }, 
    CCIconView:{
        flex:0.6,
        //backgroundColor:"#ff0000",
        justifyContent:"flex-start",
    },
    CCIcon :{
        flex:1,
        fontSize:270,
        //backgroundColor:"#00ff00",
        textAlign:"center",
        textAlignVertical:"center",
    },
    CCFooter:{
        flex:0.1
    },




    //Style for Card Opened screen
    COHeader:{
        //backgroundColor:"#FF0000",
        flex:0.2,
    },
    COLinkView:{
        //backgroundColor:"#0000ff",
        flex:0.05,
        justifyContent:"center",
    },
    COLink:{
        flex:1,
        textAlign:"center",
        fontSize:20,
        color:"#0000ff",
    },  
    COMissionsView:{
        flex:0.55,
    },  
    COMissions:{
        //backgroundColor:"#00FF00",
        flexDirection:"column",
        //borderWidth:5,
        borderBottomWidth:0,
        borderTopWidth:0,
        justifyContent:"space-evenly",
    },
    CODescView:{
        flex:0.2,
        //backgroundColor:"#ff0000",
    },
    CODesc:{

    },
    COMission:{
        //flex:1,
        //alignSelf:"center",
        padding:20,
        //backgroundColor:"#ff00ff",
        //borderWidth:1,
        justifyContent:"center",
        margin:1,
    },
    Text:{
        textAlign:"center",
        fontSize:21,
    }
    /*
    COMissionCurrent:{
        flex:0,
        borderColor:color.AGREE,
        borderWidth:5,
        margin:1
    },
    COMissionSolved:{
        flex:0,
        opacity:0.2,
        backgroundColor:color.AGREE,
        //borderColor:color.AGREE,
        borderWidth:3,
        margin:1
    },*/
});

export const stylesChoice = StyleSheet.create({
    headerView:{
        //backgroundColor:"#ff0000",
        flex:0.2,
    },
    LinkView:{
        //backgroundColor:"#0000ff",
        flex:0.05,
        justifyContent:"center",
    },
    Link:{
        flex:1,
        textAlign:"center",
        fontSize:20,
        color:"#0000ff",
    },
    OptionsView:{
        //backgroundColor:"#cccccc",
        flex:0.55,
    },
    Options:{
        //flex:1,
        flexDirection:"column",
        justifyContent:"space-evenly",
        //backgroundColor:"#ff0000"
    },
    Option:{
        padding:20,
        justifyContent:"center",
        margin:1,
    },
    OptionText:{

    },
    ProgressBarView:{
        //backgroundColor:"#ff00ff00",
        //height:"100%",
        //flex:1,
        display:"none",
        justifyContent:"center",
        alignItems:"center"
    },
    VoteView:{
        //backgroundColor:"#00FF00",
        flex:0.2,
    },
    VoteDescView:{
        //backgroundColor:"#00FFFF",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        flexDirection:"row",
    },
    VoteButtons:{
        //backgroundColor:"#FFFF00",
        flex:1,
    },
})

export const stylesProb = StyleSheet.create({
    header:{
        flex:0.2,
        justifyContent:"center",
    },  
    headerText:{
        fontSize:20,
        textAlign:"center",
    },
    LinkView:{
        flex:0.05,
    },
    Link:{
        color:"#0000ff",
        fontSize:20,
        textAlign:"center"
    },
    consequencesView:{
        flex:0.2,
        //backgroundColor:"#ff0000",
        flexDirection:"column",
        justifyContent:"space-evenly",
    },
    consequences:{
        fontSize:20,
        textAlign:"center",
    },
    rouletteView:{
        flex:0.55,
        //backgroundColor:"#00ff00",
        flexDirection:"column",
        justifyContent:"center"
    }
})