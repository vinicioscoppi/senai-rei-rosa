import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    atributes: {
        flexDirection:'row',
    },
    atributeCell: {
        height:60,
        width:70,
        borderColor:'black',
        borderWidth:2,
        marginTop:-1,
    },
    atributeBar: {
        height:410, 
        width:103,
        textAlign:'center',
        borderColor:'black',
        left:0,
        alignItems:'center',
        paddingTop:10,
    },
    atributeBarTitle:{
        position:'relative',
        bottom:-10,
    }
});