import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    centeredView: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 22,
    },
    viewModal: {
        margin: 20,
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 2,
        borderWidth: 2,
        elevation: 5,
        backgroundColor: '#f5f5f5',
        width: 370,
        height: 490,
    },
    messageView: {
        margin: 5,
        marginVertical: 5,
        paddingHorizontal: 20,
    },
    messageTitle: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',
        marginTop: 20,
    },
    message: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
        fontSize: 19,
        textAlign: 'center',
        marginVertical: 10,
    },
    iconView: {
        flex: 0.5,
        marginHorizontal: 5,
        marginVertical: 5,
        justifyContent: 'center',
        paddingVertical: 30,
        paddingHorizontal: 60,
    },
    icon: {
        alignSelf: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 40,
        fontSize: 150,
    },
    buttonView: {
        justifyContent: 'center',
        marginVertical: 5,
        marginHorizontal: 5
    },
    button: {
        backgroundColor: '#d3d3d3',
        borderWidth: 2,
        padding: 7,
        paddingHorizontal: 20,
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
    },

    textButton: {
        fontFamily: 'sans-serif-light',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    }

});