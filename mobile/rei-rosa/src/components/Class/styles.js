import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        flexBasis: 0,
        flexGrow: 1,
        backgroundColor: '#EEEEEE',
        margin: 5,
        padding: 50,
        borderWidth: 3,
        borderColor: '#000000',
    },
    emptyItem: {
        height: 0,
        padding: 0,
        borderWidth: 0,
        margin: 0,
    },
    list: {
        marginTop: 0,
        marginHorizontal: 5,
        marginBottom: 10
    }
});