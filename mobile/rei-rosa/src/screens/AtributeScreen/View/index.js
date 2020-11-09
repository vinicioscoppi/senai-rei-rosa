import React, {Component} from 'react';
import { TeamAtributes } from './../../../components/TeamAtribute/index';
import { IndividualAtributes } from './../../../components/IndividualAtribute/index';
import { TextView } from './../../../components/TextView/index';
import { ImageBackground, Image, View } from 'react-native';
import { styles } from './styles';
import VoteButtons from './../../../components/VoteButton/index';
export default class AtributeScreen extends Component
{
  constructor(props){
    super(props);
    const myStats = this.props.gameStats.players[this.props.gameStats.myClass-1];
    this.state = {
      strenght:myStats.strenght,
      bravery:myStats.bravery,
      friendship:myStats.friendship,
      wisdom:myStats.wisdom,
      water:this.props.gameStats.water,
      food:this.props.gameStats.food,
    }
  }
  _atributesHaveChanged(){
    const myStats = this.props.gameStats.players[this.props.gameStats.myClass-1];
    const att_changed = ( 
      (this.state.strenght != myStats.strenght)||
      (this.state.bravery != myStats.bravery)||
      (this.state.friendship != myStats.friendship)||
      (this.state.wisdom != myStats.wisdom));
    return att_changed;
  }
  updateStats(){
    const MY_CLASS = this.props.gameStats.myClass;
    const CUR_PLAYERS = this.props.gameStats.players;
    const MY_INDEX = CUR_PLAYERS.findIndex(element => element.classId == MY_CLASS);

    // copy players' array
    let NEW_PLAYERS = [...CUR_PLAYERS]; 
    
    // get all my player's atributes with '...' and change individual atributes
    NEW_PLAYERS[MY_INDEX] = { ...NEW_PLAYERS[MY_INDEX], 
      strenght: this.state.strenght,
      bravery: this.state.bravery,
      friendship: this.state.friendship,
      wisdom: this.state.wisdom
    };

    this.props.updatePlayer(NEW_PLAYERS);

  }
  restoreStats(){
    const myStats = this.props.gameStats.players[this.props.gameStats.myClass-1];
    this.setState({
      strenght:myStats.strenght,
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
      <View style={styles.screen}>
        <View style={styles.teamAtributesView}>
          <TeamAtributes myStats={this.state}>
          </TeamAtributes>
        </View>
        <View style={styles.textView}>
          <TextView gameStats={this.props.gameStats}>
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
