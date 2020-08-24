import React, {Component} from 'react';
import {
    Alert,
    Button,
    View,
    Text,
    TouchableHighlight,
    Modal,
} from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {icons} from './../../enums/icons';
import {foodRefillSquare} from './../../config/roomConfig';

export class PopupRunOutOf extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <Modal style={styles.popup} visible={this.props.timeIsUp} animationType={'fade'}>
                <View style={styles.iconView}>
                    <Icon style={styles.icon} color={this.props.color} name={this.props.icon} size={200}></Icon>
                </View>
                <View style={styles.messageView}>
                  <Text style={styles.message}>A {this.props.title} acabou!</Text>
                  <Text style={styles.message}>volte para a casa {foodRefillSquare}</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button style={styles.button} title={'voltar'} onPress={this.props.action}>
                    </Button>
                </View>
            </Modal>
        )
    }
}



// CODIGO TIRADO DE https://reactnative.dev/docs/modal
/*
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};*/



/** meu código anterior* */

/*
export class PopupRunOutOf extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisible:true,
        }
    }
    toggleVisibility(){
        this.setState({
            modalVisible:!this.setState.modalVisible,
        })
    }
    render()
    {
        return(
            <Modal animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View>
                    <View style={styles.popupMessageView}>
                        <Text style={styles.popupText}>Acabou a comida</Text>
                    </View>
                    <View style={styles.popupIconView}>
                        
                    </View>
                    <View style={styles.popupButtonView}>
                        <TouchableHighlight
                            style={styles.popupButton}
                            onPress={() => {
                                this.toggleVisibility();
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }
}
*/