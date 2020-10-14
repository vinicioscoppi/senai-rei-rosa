import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    room:{
        flex:1,
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 5,
        paddingHorizontal:5,
        borderWidth: 1,
        borderColor: '#000000',
    },
    roomIconView: {
        flex:0.1,
        justifyContent:'center',
        alignItems:'center',
    },
    roomNumber:{
        color:'#000000',
        fontSize:25,
        fontWeight:'bold',
    },
    roomInfo:{
        flex:0.2,
        flexDirection:'row',
    },
    userIconView: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }, 
    userIcon:{
        fontSize:25,
    },
    numberOfUsersView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    numberOfUsers:{
        fontSize: 20,
    }
});