import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewModal: {
        backgroundColor: '#f5f5f5',
        flex:0.8,
        marginTop:50,
        justifyContent: 'center',
        marginHorizontal:15,
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderWidth: 2,
        elevation: 5,
        paddingTop:50,
    },
    messageView: {
        flex:0.35,
        justifyContent:'center',
    },
    messageTitle: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
    },
    message: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
    },
    iconView: {
        flex: 0.35,
        justifyContent: 'center',
        alignItems:'center',
    },
    icon: {
        flex:1,
        fontSize: 150,
    },
    buttonView: {
        flex:0.3,
        justifyContent:'center',
    },
    button: {
        backgroundColor: '#d3d3d3',
        borderWidth: 2,
        paddingHorizontal: 15,
        alignSelf: 'center', 
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 2,
        borderRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2
        },
        elevation: 3,
        flex:0.4,
        justifyContent:'center',
    },
    textButton: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    }
});