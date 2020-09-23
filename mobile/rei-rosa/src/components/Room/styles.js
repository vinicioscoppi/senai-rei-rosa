import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    room:{
        height: 60,
        flexDirection: 'row',
        marginVertical: -1,
        marginHorizontal: 7,
        paddingVertical: 10,
        borderWidth: 3,
        borderColor: '#000000',
        // backgroundColor: '#71eee1',
    },
    roomInfo:{
        color:'#000000',
        fontSize: 20,
        textAlign: 'right',
        marginHorizontal: 10,
        // backgroundColor: '#7159c1',
    },
    leftIcons: {
        marginLeft: 5,
        marginRight: 250,
        padding: 5,
        height: 40,
        width: 40,
    }, 
    rightIcons: {
        marginRight: 5,
        padding: 5,
        height: 40,
        width: 40,
    }, 
});