import {StyleSheet} from 'react-native';
import {color} from './../../enums/color'

export const styles = StyleSheet.create({
    popup: {
        flex:1,
        display:'flex',
        justifyContent:'flex-end',
    },
    iconView:{
        flex:0.3,
        backgroundColor:'#ff0000',
    },
    messageView:{
        flex:0.1,
        backgroundColor:'#00ff00',
    },
    buttonView:{
        flex:0.3,
        backgroundColor:'#0000ff',
    },
    icon: {
        alignSelf:'center'
    },
    message:{
        textAlign:"center",
        fontSize:20
    },
    button:{
        
    }
    

});