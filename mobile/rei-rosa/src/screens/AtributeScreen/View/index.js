import React, {Component} from 'react';
import { TeamAtributes } from './../../../components/TeamAtribute/index';
import { IndividualAtributes } from './../../../components/IndividualAtribute/index';
import { TextView } from './../../../components/TextView/index';
import { ImageBackground, Image, View, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import VoteButtons from './../../../components/VoteButton/index';
import {states} from './../../../enums/states';
import {screen} from './../../../enums/screen';
import * as utils from './../../../util/utils';
export default class AtributeScreen extends Component
{
  constructor(props){
    super(props);
    const G = this.props.gameStats;
    const myStats = utils.findMyPlayer(G);
    this.state = {
      strength:myStats.strength,
      bravery:myStats.bravery,
      friendship:myStats.friendship,
      wisdom:myStats.wisdom,
      water:G.water,
      food:G.food,
    }
  }
  _atributesHaveChanged(){
    const myStats = utils.findMyPlayer(this.props.gameStats);
    const att_changed = ( 
      (this.state.strength != myStats.strength)||
      (this.state.bravery != myStats.bravery)||
      (this.state.friendship != myStats.friendship)||
      (this.state.wisdom != myStats.wisdom));
    return att_changed;
  }
  updateStats(){
    const G = this.props.gameStats;

    // object with updates 
    const myAttsUpdate = { 
      strength: this.state.strength,
      bravery: this.state.bravery,
      friendship: this.state.friendship,
      wisdom: this.state.wisdom
    };

    const NEW_PLAYERS = utils.getMyUpdatedPlayer(G,myAttsUpdate);
    this.props.updateGame({card:null,players:NEW_PLAYERS});
    this.props.updateFlow(states.WAITING_FOR_ACTION,screen.ATRIBUTE_SCREEN);
  }
  restoreStats(){
    const myStats = utils.findMyPlayer(this.props.gameStats);
    this.setState({
      strength:myStats.strength,
      bravery:myStats.bravery,
      friendship:myStats.friendship,
      wisdom:myStats.wisdom,
      water:this.props.gameStats.water,
      food:this.props.gameStats.food,
    })
  }
  render()
  {
    const DISABLE_VOTE = !this._atributesHaveChanged();
    return(
      <TouchableWithoutFeedback onPress={()=>{this.props.onScreenClick?.()}}>
        <View style={styles.screen}>
          <View style={styles.teamAtributesView}>
            <TeamAtributes gameStats={this.props.gameStats}>
            </TeamAtributes>
          </View>
          <View style={styles.textView}>
            <TextView screenStats={this.state} gameStats={this.props.gameStats}>
            </TextView>
          </View>
          <View style={styles.individualAtributesView}>
            <IndividualAtributes 
              atributes={this.state} 
              updateAtributes={(newState) => {this.setState(newState)}}>
            </IndividualAtributes>
          </View>
          <View style={[styles.voteView, DISABLE_VOTE ? styles.voteViewDisabled : null]}>
            <VoteButtons 
              onAgree={() => this.updateStats()}
              onDisagree={() => this.restoreStats()}
              disabled={DISABLE_VOTE}
            ></VoteButtons>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
