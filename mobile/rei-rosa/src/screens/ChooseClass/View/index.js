import React, { Component } from 'react';
import {
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    FlatList,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { color } from './../../../enums/color';
import { PLAYER_CLASSES } from './../../../config/config';
import { icons } from './../../../enums/icons';
import { styles } from './styles'
import { TextView } from './../../../components/TextView/index'
import { VoteButtons } from './../../../components/VoteButton/index'
export default class ChooseClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: PLAYER_CLASSES,
            currentChoice: null,
        };
    }
    chooseClass = (classId) => {
        if(!this._classAlreadyChosen(classId)){
            this.setState({currentChoice:classId});
            //alert(this.state.currentChoice);
        }
        
    }
    _confirmClass = () => {
        // Set class and "warns" everyone in the room.
    }
    _classAlreadyChosen = (classId) => {
        // makes search on players class to see if there is a repeat. returns TRUE if a repeat is found.
        return false;
    }
    render() {
        const NUMBER_OF_COLUMNS = 2;
        return (
            <SafeAreaView style={styles.screen}>
                <View style={styles.textView}>
                    <TextView text='Escolha sua classe'></TextView>
                </View>
                <View style={styles.listView}>
                    <FlatList 
                        style={styles.flatlist}
                        data={this.state.data}
                        keyExtractor={item => item.id}
                        numColumns={NUMBER_OF_COLUMNS}
                        renderItem={({ item }) => 
                        {
                            if (item.empty) {
                                return <View style={[styles.item, styles.emptyItem]} />;
                            }
                            return (
                                <TouchableWithoutFeedback
                                    activeOpacity={0.6}
                                    underlayColor={item.color}
                                    onPress={() => this.chooseClass(item.id)}>
                                    <View style={styles.item} >
                                        <Icon
                                            style={styles.classIcon}
                                            name={item.icon}
                                            color={this.state.currentChoice == item.id ? item.color : "#000000"}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        }}
                    />
                </View>
                <View style={styles.voteView} >
                <TouchableHighlight
                        style={styles.voteButton}
                        //underlayColor={color.AGREE}
                        activeOpacity={0.6}
                        onPress={() => this._confirmClass()}>
                        <Icon
                            style={styles.voteIcon}
                            name='check'
                            color={"#000000"}
                        />
                    </TouchableHighlight>
                </View>
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
