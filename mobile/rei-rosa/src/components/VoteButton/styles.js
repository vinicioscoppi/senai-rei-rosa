import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: 65,
        margin: 20,
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis: 145,
        margin: 5,
        borderWidth: 3,
    },
    separator: {
        margin: 5,
    },

});

/*
// ALTERNATIVO?
container: {
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: "stretch",
        flex:1,
        //flexBasis: 1,
        //margin: 20,
        //backgroundColor:"#000000",
    },
    item: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        flexDirection:"column",
        //flexWrap:"nowrap",
        //flexBasis: 145,
        //margin: 5,
        borderWidth: 3,
    },
    separator: {
        //margin: 5,
    },
*/