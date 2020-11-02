import React, {Component} from 'react';
import { TeamAtributes } from './../../../components/TeamAtribute/index';
import { IndividualAtributes } from './../../../components/IndividualAtribute/index';
import { TextView } from './../../../components/TextView/index';
import { ImageBackground, Image, View } from 'react-native';
import { styles } from './styles';
import VoteButtons from './../../../components/VoteButton/index';
export default class AtributeScreen extends Component
{
  render()
  {
    return(
      <View style={styles.screen}>
        <View style={styles.teamAtributesView}>
          <TeamAtributes>
          </TeamAtributes>
        </View>
        <View style={styles.textView}>
          <TextView>
          </TextView>
        </View>
        <View style={styles.individualAtributesView}>
          <IndividualAtributes>
          </IndividualAtributes>
        </View>
        <View style={styles.voteView}>
          <VoteButtons></VoteButtons>
        </View>
      </View>
    );
  }
}

/*


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

      */
