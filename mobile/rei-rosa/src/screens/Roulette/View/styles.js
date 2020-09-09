import {StyleSheet} from 'react-native';

export const wheelSize = 350;
const circleSize = 100;
const TriangleSize = 30;
const wheelBorderSize = 5;
const wheelColor = 'black';
const wheelMsgSize = 100;

export const styles = StyleSheet.create({
  screen:{
    flex:1,     
  },
  header:{
    flex:0.3,
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    fontSize:30
  },
  main:{
    flex:0.6,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
  },
  footer:{
    flex:0.1,      
  },
  wheelContainer:{
    width:wheelSize,
    height:wheelSize,
  },
  wheel:{
    width:wheelSize+2*wheelBorderSize,
    height:wheelSize+2*wheelBorderSize,
    marginLeft:-wheelBorderSize,
    marginTop:-wheelBorderSize,
    overflow:'hidden',
    borderColor:wheelColor,
    borderStyle:'solid',
    borderWidth:wheelBorderSize,
    borderRadius:1*(wheelSize),
  },
  wheelItem:{
    display:'flex',
    position:'absolute',
    top:'50%',
    left:'50%',
    width:'50%',
    borderStyle:'solid',
    height:0,
  },
  wheelItemText:{
    fontSize:40,
    textAlign:'center',
  },
  wheelMsg:{
    fontSize:50,
    position:"absolute",
    top:'50%',
    left:'50%',
    height:wheelMsgSize,
    width:wheelMsgSize,
    marginTop:-wheelMsgSize/2,
    marginLeft:-wheelMsgSize/2,
    textAlign:'center',
    textAlignVertical:'center',
    alignItems:'center',
    justifyContent:'center',
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
    backgroundColor: 'white',
  },
  triangleDown: {
    position:'absolute',
    borderWidth: TriangleSize,
    top:"0%",
    left:"50%",
    width: 0,
    height: 0,
    marginLeft: -TriangleSize,
    marginTop:0,
    borderTopWidth:30,
    borderRightColor:'transparent',
    borderLeftColor:'transparent',
    borderBottomColor:'transparent',
    zIndex:1,
  }
});
  