import React, { Component } from 'react';
import {View, Animated, Text, TouchableWithoutFeedback, Button} from 'react-native';
import { styles } from './styles';
import { wheelSize } from './styles';
import Svg, {Path} from 'react-native-svg'; 
import {TextView} from './../TextView/index';
import {spinDuration , turns, initialAngle} from './../../config/rouletteConfig';
import {ROULETTE_DATA} from './../../config/config';
export default class Roulette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleMsg:"Gire a roleta",
      random:0,
      angle:null,
      selectedItem:null,
      showSelectedItem:false,
      allowUserClick:true,
    };
    
    this.spin = this.spin.bind(this);
  }

  static defaultProps={
    items:ROULETTE_DATA,
    lockOnSpinEnd:false,
    onSpinEnd:(s)=>{},
  }

  getItemPosition = (itemIndex) => {
    const nbItem = this.props.items.length;
    const itemAngle = itemIndex*360/nbItem;
    const radius = wheelSize/2;
    const x = wheelSize/4;
    return {
      transform:[
        //Fix rotation pivot in center
        {translateX:-radius/2},
        {translateY:radius},
        //Rotate by itemAngle
        {rotate:itemAngle+'deg'},
        //Adjust numbers near outer circumference 
        {translateY:-radius+20}]}
  }

  spin = () => {
    if(this.state.allowUserClick){
      
      this.animatedValue = new Animated.Value(0);

      const random = Math.random();
      const selectedItem = Math.floor(random * this.props.items.length) + 1;
      const animationAngle = -360 * (turns + random) - initialAngle; // -360 because must be anticlockwise
      
      this.interpolateRotation = this.animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg',animationAngle+'deg']})  

      this.setState({ 
        titleMsg:"Girando...",
        random:random,
        selectedItem: selectedItem,
        showSelectedItem:false,
        angle:this.interpolateRotation,
        allowUserClick:false})

      this.animationCSS = {
        transform:[
          {rotate: this.interpolateRotation}]}
      
      Animated.timing(this.animatedValue,{
        useNativeDriver:true,
        toValue: 1,
        duration: spinDuration
      }).start(({ finished }) => {
        this.setState({
          titleMsg:"Ande " + this.state.selectedItem + (this.state.selectedItem==1? " casa" : " casas"),
          showSelectedItem:true,
          allowUserClick: !this.props.lockOnSpinEnd,
        })
        this.props.onSpinEnd(this.state.selectedItem);
      });
    } 
  }

  createSlices = () => {
    let slices = [];

    const colorArr = ['yellow', 'red', 'blue','yellow', 'red', 'blue']; //color the slice
    const numberOfSlices = this.props.items.length;
    for (let i = 0; i < numberOfSlices; i++) {
      slices.push({percent: 1 / numberOfSlices, color: colorArr[i] || 'gray'});//default color = gray
    }

    let cumulativePercent = 0;

    function getCoordinatesForPercent(percent) {
      const x = Math.cos(2 * Math.PI * percent);
      const y = Math.sin(2 * Math.PI * percent);
      return [x, y];
    }

    let arr = [];
    arr = slices.map((slice) => {
      const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
      cumulativePercent += slice.percent;
      const [endX, endY] = getCoordinatesForPercent(cumulativePercent);
      const largeArcFlag = slice.percent > 0.5 ? 1 : 0;
      const pathData = [
        `M ${startX} ${startY}`, // Move
        `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
        "L 0 0" // Line
      ].join(" ");
      return <Path d={pathData} fill={slice.color} key={pathData} />;
    });
    return arr;
  }

  render() {
    const { items } = this.props;
    
    return (
        <View style={styles.wheelContainer}>
        <TriangleDown/>
        <TouchableWithoutFeedback onPress={this.spin}>
            
            <Animated.View style={[styles.wheel,this.animationCSS]}>
            
            <Svg
            height={wheelSize}
            width={wheelSize}
            viewBox="-1 -1 2 2"
            style={[styles.svg,{ transform: [{ rotate: 30 + initialAngle +"deg" }] }]}
            >
                {this.createSlices()}
                {items.map((item, index) => (
                <View style={[styles.wheelItem,this.getItemPosition(index)]} key={index}>
                <Text style={styles.wheelItemText}>{item}</Text>
                </View>
            ))}
            
            </Svg>
            
            
            
            </Animated.View>

        </TouchableWithoutFeedback>
        <Circle/>
            <View style={styles.wheelMsgView}>
                <Text style={styles.wheelMsg}>{this.state.showSelectedItem == true ? this.state.selectedItem : ""}</Text>
            </View>
        </View>
    );
  }
}

class Circle extends Component {
  constructor(props){
      super(props);
  }
  render() {
      return (
          <View style={styles.circle} />
      )
  }
}

class TriangleDown extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={styles.triangleDown}/>
    )
  }
}