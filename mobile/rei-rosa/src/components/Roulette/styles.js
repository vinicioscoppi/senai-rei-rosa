import {StyleSheet} from 'react-native';

export const wheelSize = 300;
const circleSize = 100;
const TriangleSize = 35;
const wheelBorderSize = 5;
const wheelColor = 'black';
const wheelMsgSize = 100;

export const styles = StyleSheet.create({
  wheelContainer:{
    alignSelf:"center",
    justifyContent:"center",
    //backgroundColor:"#0000ff",
    width:wheelSize+2*wheelBorderSize,
    height:wheelSize+2*wheelBorderSize,
    alignItems:"center",
  },
  wheel:{
    marginLeft:-wheelBorderSize,
    marginTop:-wheelBorderSize,
    overflow:'hidden',
    borderColor:wheelColor,
    borderStyle:'solid',
    alignSelf:"center",
    borderWidth:wheelBorderSize,
    borderRadius:1*(wheelSize),
    backgroundColor:"#00ffff",
  },
  wheelItem:{
    display:'flex',
    flex:1,
    left:'25%',
  },
  wheelItemText:{
    fontSize:40,
    textAlign:'center',
  },
  wheelMsgView:{
    position:"absolute",
    top:"50%",
    marginTop:-wheelMsgSize/2,
    height:wheelMsgSize,
    width:wheelMsgSize,
  },
  wheelMsg:{
    flex:1,
    fontSize:40,
    textAlign:'center',
    textAlignVertical:'center',
  },
  svg:{
    alignSelf:"center",
  },
  circle: {
    position:'absolute',
    top:"50%",
    marginTop:-circleSize/2,
    width: circleSize,
    height: circleSize,
    borderRadius: 100/2,
    backgroundColor: 'white',
  },
  triangleDown: {
    position:'absolute',
    borderWidth: TriangleSize,
    top:"0%",
    left:"37.8%",
    width: 0,
    borderRightColor:'transparent',
    borderLeftColor:'transparent',
    borderBottomColor:'transparent',
    zIndex:1,
  }
});
  