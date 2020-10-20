import { StyleSheet,Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const TEXT_FLEX = 0.2;
const LIST_FLEX = 0.6; // 60% of screen
const VOTE_FLEX = 0.2;
const ITEM_HEIGHT = SCREEN_HEIGHT * LIST_FLEX * 0.5 -7;
export const styles = StyleSheet.create({
    screen:{
        flex:1,
    },
    textView:{
        flex:TEXT_FLEX,
    },
    listView:{
        flex:LIST_FLEX,
    },
    voteView:{
        flex:VOTE_FLEX,
    },
    item: {
        flex:1,
        alignItems: "center",
        justifyContent:"center",
        height:ITEM_HEIGHT,
        borderWidth: 1,
        borderColor: '#000000',
    },
    emptyItem: {
        height: 0,
        padding: 0,
        borderWidth: 0,
        margin: 0,
        backgroundColor:"#00ff00"
    },
    classIcon:{
        fontSize:100,
    },
    voteButton:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    voteIcon:{
        fontSize:50,
    }
});