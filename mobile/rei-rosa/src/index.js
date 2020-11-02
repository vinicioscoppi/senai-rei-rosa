import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableHighlight,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { TextView } from './components/TextView/index';
import ChooseClass from './screens/ChooseClass/View/index';
import AtributeScreen from './screens/AtributeScreen/View/index';
export default class App extends Component {
  render() {
    return (
      <AtributeScreen></AtributeScreen>
    );
  }
}
