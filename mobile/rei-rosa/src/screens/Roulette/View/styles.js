import {StyleSheet} from 'react-native';

export const wheelSize = 400;
const circleSize = 100;
const TriangleSize = 30;
const wheelBorderSize =2;
const wheelColor = 'black';
const wheelNeutralColor = 'white';


export const styles = StyleSheet.create({
    wheelContainer:{
      display:'flex',
      position:'absolute',
      top:"50%",
      marginTop:"-50%",
      marginLeft:5,
      width:wheelSize + 2*wheelBorderSize,
      height:wheelSize + 2*wheelBorderSize,
      backgroundColor: wheelNeutralColor,
      borderColor:wheelColor,
      borderStyle:'solid',
      borderWidth:2,
      borderRadius:0.50*(wheelSize + 2*wheelBorderSize),
    },
    wheel:{
      display:'flex',
      position:'relative',
      margin:0,
      width:wheelSize,
      height:wheelSize,
      overflow:'hidden',
      borderColor:'red',
    },
    wheelItem:{
      display:'flex',
      position:'absolute',
      top:'50%',
      left:'50%',
      width:'50%',
      borderStyle:'solid',
      borderWidth:0,
      height:0,
    },
    wheelItemText:{
      fontSize:40,
      textAlign:'center'
    },
    wheelMsg:{
      fontSize:50,
      position:"absolute",
      bottom:'50%',
      left:'50%',
      marginBottom:-30,
      marginLeft:-15,
      zIndex:1,
    },
    circle: {
      position:'absolute',
      top:"50%",
      left:"50%",
      marginLeft:-circleSize/2,
      marginTop:-circleSize/2,
      width: circleSize,
      height: circleSize,
      borderRadius: 100/2,
      backgroundColor: 'white'
  },
  triangleDown: {
    position:'absolute',
    borderWidth:TriangleSize,
    top:"0%",
    left:"50%",
    width: 0,
    height: 0,
    marginLeft:-TriangleSize,
    marginTop:0,
    borderTopWidth:30,
    borderRightColor:'transparent',
    borderLeftColor:'transparent',
    borderBottomColor:'transparent',
    zIndex:1,
  },
});
  