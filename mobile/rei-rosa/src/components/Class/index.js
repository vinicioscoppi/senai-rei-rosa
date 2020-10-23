import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    TouchableHighlight,
    View,
    Text,
    Button,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from './class-styles';
import { color } from './../../enums/color';
import { icons } from './../../enums/icons';
export class Class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableHighlight style={styles.item}
                activeOpacity={this.props.activeOpacity}
                underlayColor={this.props.underlayColor}
                onPress={() => alert('!')}>
                <Icon
                    name={this.props.name}
                    size={this.props.activeOpacity}
                    color={this.props.color}
                />
            </TouchableHighlight>
        );
    }
}
