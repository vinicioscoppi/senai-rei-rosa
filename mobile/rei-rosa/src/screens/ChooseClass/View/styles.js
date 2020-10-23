import { StyleSheet,Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get("window").height;
const TEXT_FLEX = 0.2;
const LIST_FLEX = 0.6; // 60% of screen
const CONFIRM_FLEX = 0.2;
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
    confirmView:{
        flex:CONFIRM_FLEX,
        justifyContent:"center",
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
    },
    classIcon:{
        fontSize:100,
    },
    alreadyChosenView:{
        margin:5,
    },
    alreadyChosenText:{
        fontSize:18,
        textAlign:"center",
        textAlignVertical:"center",
    },
    confirmButton:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    confirmIcon:{
        fontSize:50,
    }
});