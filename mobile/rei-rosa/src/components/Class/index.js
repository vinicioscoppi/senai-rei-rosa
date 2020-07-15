import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { styles } from './styles';
export class Class extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.class}>
                <Icon
                    name={this.props.name}
                    size={this.props.size}
                    color={this.props.color}
                />
            </View>            
        );
    }
}
