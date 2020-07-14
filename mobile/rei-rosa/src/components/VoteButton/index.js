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
                    underlayColor={color.STRENGTH_ENABLED}
                    activeOpacity={0.6}
                    onPress={() => alert('Nope!')}>
                    <Icon
                        name='close'
                        size={50}
                        color={color.STRENGTH_ENABLED}
                    />
                </TouchableHighlight>
                <Separator />
                <TouchableHighlight
                    style={styles.item}
                    underlayColor={color.BRAVERY_ENABLED}
                    activeOpacity={0.6}
                    onPress={() => alert('Ok!')}>
                    <Icon
                        name='check'
                        size={50}
                        color={color.BRAVERY_ENABLED}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}
function Separator() {
    return <View style={styles.separator} />;
}
