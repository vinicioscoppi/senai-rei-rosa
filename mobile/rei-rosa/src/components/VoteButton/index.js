import React, { Component } from 'react';
import { View, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
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
                <TouchableHighlight 
                    style={styles.item}
                    underlayColor={color.DISAGREE}
                    activeOpacity={0.6}
                    onPress={() => this.props.onDisagree()}
                    disabled={this.props.disabled}>
                    <Icon
                        name={icons.VOTE_DISAGREE}
                        size={50}
                        color={color.DISAGREE}
                    />
                </TouchableHighlight>
                <TouchableHighlight 
                    style={styles.item}
                    underlayColor={color.AGREE}
                    activeOpacity={0.6}
                    onPress={() => this.props.onAgree()}
                    disabled={this.props.disabled}>
                    <Icon
                        name={icons.VOTE_AGREE}
                        size={50}
                        color={color.AGREE}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}
