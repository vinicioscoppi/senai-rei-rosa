import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { foodRefillSquare } from './../../config/roomConfig';

export class PopupRunOutOf extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Modal visible={this.props.timeIsUp} animationType={'fade'}>
          <View style={styles.viewModal}>
            <View style={styles.messageView}>
              <Text style={styles.messageTitle}>A {this.props.title} acabou!</Text>
              <Text style={styles.message}>Volte para a casa {foodRefillSquare}</Text>
            </View>
            <View style={styles.iconView}>
              <Icon style={styles.icon} color={this.props.color} name={this.props.icon} size={200}></Icon>
            </View>
            <View style={styles.buttonView}>
              <TouchableHighlight 
                style={styles.button} 
                underlayColor={'#a9a9a9'} 
                onPress={this.props.action} 
              >
                <Text style={styles.textButton}>Voltar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}
