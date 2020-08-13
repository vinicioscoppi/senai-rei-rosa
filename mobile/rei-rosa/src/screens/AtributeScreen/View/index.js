import React, {Component} from 'react';
import { TeamAtributes } from './../../../components/TeamAtribute/index'
import { IndividualAtributes } from './../../../components/IndividualAtribute/index'
import { TextView } from './../../../components/TextView/index'
import { ImageBackground, Image, View } from 'react-native'
import { styles } from './styles'
export default class AtributeScreen extends Component
{
  render()
  {
    return(
      <View>
        <ImageBackground style={styles.image} source={require('../../../assets/testeCapa.png')}>
          <TeamAtributes>
          </TeamAtributes>
          <TextView>
          </TextView>
          <IndividualAtributes>
          </IndividualAtributes>
        </ImageBackground>
      </View>
    );
  }
}
