import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { color } from './../../enums/color';
import { icons } from './../../enums/icons'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VoteButtons extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <TouchableHighlight
                        underlayColor={color.DISAGREE}
                        activeOpacity={0.6}
                        onPress={() => this.disagree()}>
                        <Icon
                            name={icons.VOTE_DISAGREE}
                            size={50}
                            color={color.DISAGREE}
                        />
                    </TouchableHighlight>
                </View>
                <View style={styles.item}>
                    <TouchableHighlight
                        underlayColor={color.AGREE}
                        activeOpacity={0.6}
                        onPress={() => this.agree()}>
                        <Icon
                            name={icons.VOTE_AGREE}
                            size={50}
                            color={color.AGREE}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    agree(){
        alert('Ok!');
    }
    disagree(){
        alert('Nope!')
    }
}
