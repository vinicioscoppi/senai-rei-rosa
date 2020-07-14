import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    FlatList,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from './../../../enums/color';
import { icons } from './../../../enums/icons';
import { styles } from './styles'
import { TextView } from './../../../components/TextView/index'
import { VoteButtons } from './../../../components/VoteButtons/index'
export default class ChooseClass extends Component {
    state = {
        data: [
            { id: '1', name: 'Força', icon: icons.STRENGTH, color: color.STRENGTH_ENABLED },
            { id: '2', name: 'Amizade', icon: icons.FRIENDSHIP, color: color.FRIENDSHIP_ENABLED },
            { id: '3', name: 'Coragem', icon: icons.BRAVERY, color: color.BRAVERY_ENABLED },
            { id: '4', name: 'Sabedoria', icon: icons.WISDOW, color: color.WISDOW_ENABLED }
        ]
    };
    render() {
        const columns = 2;
        return (
            <SafeAreaView>
                <TextView text='Escolha sua classe:'></TextView>
                <FlatList style={styles.list}
                    data={createRows(this.state.data, columns)}
                    keyExtractor={item => item.id}
                    numColumns={columns}
                    renderItem={({ item }) => {
                        if (item.empty) {
                            return <View style={[styles.item, styles.emptyItem]} />;
                        }
                        return (
                            <TouchableHighlight 
                                style={styles.item}
                                activeOpacity={0.6}
                                underlayColor={item.color}
                                onPress={() => alert(item.name + '!')}>
                                <View style={styles.class} >
                                    <Icon 
                                        name={item.icon} 
                                        size={60} 
                                        color={item.color} 
                                    />
                                </View>
                            </TouchableHighlight>
                        );
                    }}
                />
                <VoteButtons></VoteButtons>
            </SafeAreaView>
        );
    }
}
function createRows(data, columns) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;
    while (lastRowElements !== columns) {
        data.push({
            empty: true
        });
        lastRowElements += 1;
    }
    return data;
}
