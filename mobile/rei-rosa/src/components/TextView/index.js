import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export class TextView extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View style={styles.textView}>
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}
