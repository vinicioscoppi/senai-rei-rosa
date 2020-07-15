import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    teamAtributes:{
        marginHorizontal: 10,
        marginTop: 5,
        flexDirection: 'row',
    },
    teamAtributeBar: {
        width: 335,
        flexDirection: 'row',
        alignItems: 'center',
    },
    waterBar: {
        backgroundColor: '#1e90ff',
        height: 20,
        borderWidth: 1,
    },
    foodBar: {
        backgroundColor: '#ff7105',
        height: 20,
        borderWidth: 1
    },
    icons: {
        marginRight: 5,
        paddingHorizontal: 0,
        padding: 5, 
        height: 37,
        width: 37,
        textAlign: 'center',
    }, 
});