import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    FlatList,
    SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PLAYER_CLASSES } from './../../../config/config';
import { NUMBER_OF_COLUMNS } from './../../../config/chooseClassConfig';
import { styles } from './styles';
import { TextView } from './../../../components/TextView/index';
import { color } from './../../../enums/color';

export default class ChooseClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: PLAYER_CLASSES,
            currentChoice: null,
            alreadyChosen: false,
        };
    }
    chooseClass = (classId) => {
        if(classId == this.state.currentChoice) {    
            this.setState({
                currentChoice:null,
                alreadyChosen:false
            });
        } else {
            this.setState({
                currentChoice:classId,
                alreadyChosen:this._classAlreadyChosen(classId)
            });
            //alert(this.state.currentChoice);
        }
    }
    _confirmClass = () => {
        // "Warns" everyone in the room this player is ready to play.
        // ### Need for implementation...
        //alert(!this.state.alreadyChosen && this.state.currentChoice != null);
    }
    _classAlreadyChosen = (classId) => {
        // makes search on players class to see if there is a repeat. returns TRUE if a repeat is found.
        // ### Need for implementation...
        return false;
    }
    render() {
        const CUR_CHOICE = this.state.currentChoice;
        const CUR_CLASSNAME = CUR_CHOICE == null ? null : PLAYER_CLASSES[CUR_CHOICE - 1].name;
        const ALREADY_CHOSEN = this.state.alreadyChosen;
        return (
            <SafeAreaView style={styles.screen}>
                <View style={styles.textView}>
                    <TextView text={CUR_CHOICE == null ? 'Escolha sua classe' : 'Você escolheu o ' + CUR_CLASSNAME}></TextView>
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
                                            color={CUR_CHOICE == item.id ? item.color : "#000000"}
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            );
                        }}
                    />
                </View>
                <View style={styles.confirmView} >
                    <ConfirmClass alreadyChosen={ALREADY_CHOSEN} classname={CUR_CLASSNAME} action={this._confirmClass}></ConfirmClass>
                </View>
            </SafeAreaView>
        );
    }
}
class ConfirmClass extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const CUR_CLASSNAME = this.props.classname;
        const CHOSED_CLASS = this.props.classname == null;
        const ALREADY_CHOSEN = this.props.alreadyChosen
        const _confirmClass = this.props.action;
        if(!ALREADY_CHOSEN){
            return (
                <>
                    <TouchableHighlight
                        style={styles.confirmButton}
                        activeOpacity={0.6}
                        onPress={() => _confirmClass()}
                        disabled={CHOSED_CLASS}>
                        <Icon
                            style={styles.confirmIcon}
                            name='check'
                            color={CHOSED_CLASS ? color.OPTION_DISABLED : "#000000"}
                        />
                    </TouchableHighlight>
                </> 
            )
        } else {
            return (
                <View style={styles.alreadyChosenView}>
                    <Text style={styles.alreadyChosenText}>
                        Outra pessoa também escolheu o {CUR_CLASSNAME}.{"\n"} Cada jogador precisa ser de uma classe diferente.
                    </Text>
                </View>
            );
        }
    }
}
/*
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
}*/
