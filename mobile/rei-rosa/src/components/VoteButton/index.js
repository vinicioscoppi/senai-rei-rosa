import React, { Component } from 'react';
import { View, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { color } from './../../enums/color';
import Icon from 'react-native-vector-icons/FontAwesome';

export class VoteButtons extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    style={styles.item}
                    underlayColor={color.DISAGREE}
                    activeOpacity={0.6}
                    onPress={() => alert('Nope!')}>
                    <Icon
                        name='close'
                        size={50}
                        color={color.DISAGREE}
                    />
                </TouchableHighlight>
                <Separator />
                <TouchableHighlight
                    style={styles.item}
                    underlayColor={color.AGREE}
                    activeOpacity={0.6}
                    onPress={() => alert('Ok!')}>
                    <Icon
                        name='check'
                        size={50}
                        color={color.AGREE}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}
function Separator() {
    return <View style={styles.separator} />;
}
