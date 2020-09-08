import React, { Component } from 'react';
import {
View, 
Text }
from 'react-native';
import Roulette from './screens/Roulette/View/index'
export default class App extends Component {
  constructor() {
    super();
  }
  render() { 
    return (
      <Roulette items={[1,2,3,4,5,6]} onSpinEnd={(msg) => alert("Numero tirado: " + msg)}></Roulette>
    );
  }
}
