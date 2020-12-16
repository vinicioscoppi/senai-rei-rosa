import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as CONFIG from './../../config/config';
import * as utils from './../../util/utils';
export class PopupRunOutOf extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.warn("POPUP MOUNTED!!!")
  }
  render() {
    const G = this.props.gameStats;
    const atribute = utils.getRunOutAtribute(G);
    const refillSquare = utils.getRefillSquare(G,atribute);
    return (
      <View>
        <Modal visible={true} animationType={'fade'}>
          <View style={styles.viewModal}>
            <View style={styles.messageView}>
              <Text style={styles.messageTitle}>A {utils.nomeEmPortugues(atribute['name'])} acabou!</Text>
              <Text style={styles.message}>Volte para {refillSquare === 0 ? `o início do tabuleiro` : `a casa ${refillSquare}`}</Text>
            </View>
            <View style={styles.iconView}>
              <Icon style={styles.icon} color={atribute['color']} name={atribute['icon']} size={200}></Icon>
            </View>
            <View style={styles.buttonView}>
              <TouchableHighlight 
                style={styles.button} 
                underlayColor={'#a9a9a9'} 
                onPress={()=>this.props.onSolve(atribute)} 
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
