import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableHighlightBase,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {color} from './../../../enums/color';
import { stylesChoice, styles, stylesProb } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { icons } from './../../../enums/icons';
import { screen } from './../../../enums/screen';
import {states} from './../../../enums/states';
import {TextView} from './../../../components/TextView/index';
import VoteButtons from './../../../components/VoteButton/index';
import Donut from './../../../components/ProgressBar/index';
import * as utils from './../../../util/utils';
import {DECK, DECK_CHOICE,DECK_EFFECT,DECK_FOREST,DECK_PROBABILITY, TYPE, VOTE} from './../../../config/cardConfig';
import Roulette from './../../../components/Roulette/index';
const voteTimerDuration = 5000;

class Counter extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        if(!this.props.disabled){
            return (
                <Donut duration={voteTimerDuration}/>
            )
        } else {
            return null;
        }
    }
}

class Mission extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        const onClick = this.props.onClick;
        const m = this.props.m;
        return(
            <View style={styles.COMission}>
                <Text style={styles.Text}>{m['text']}</Text>
            </View>
        )
    }
}

class Option extends Component
{
    constructor(props){
        super(props);
    }
    getColor(){
        const t = this.props.o['type'];
        if(t == VOTE.AGREE)
            return color.AGREE;
        if(t == VOTE.DISAGREE)
            return color.DISAGREE; 
    }
    render(){
        const o = this.props.o;
        return(
            <View style={stylesChoice.Option}>
                <Text style={[styles.Text,stylesChoice.OptionText,{color:this.getColor()}]}>{o['action']}{o['blind'] && this.props.reveal != true ? "" : o['consequence']}</Text>
            </View>
        )
    }
}

class CardEffect extends Component
{
    constructor(props){
        super(props);
    }
    listMissions(){
        let ms = [];
        const c = this.props.card;
        const firstUnsolved = c['missions'].find(element => !element['solved']);
        var x;
        for(x of c['missions'])
            ms[ms.length]=<Mission key={Math.random()} m={x} currentMission={x===firstUnsolved}></Mission>
        return ms;
    }
    render(){
        const card = this.props.card;
        const headerText = card['header'];
        const footerText = card['footer'];
        const missions=this.listMissions();
        const myColor=utils.getCardColor(card);
        
        return(
            <SafeAreaView style={[
                styles.card,
                {borderColor:myColor}]}
            >
                <View style={styles.COHeader}>
                    <TextView text={headerText}></TextView>
                </View>
                <View style={styles.COLinkView}>
                    <TouchableHighlight style={{flex:1,justifyContent:"center"}} onPress={() => this.props.onLinkClick()}>
                        <Text style={styles.COLink}>Voltar para a tela de atributos</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.COMissionsView}>
                    <ScrollView contentContainerStyle={styles.COMissions}>
                        {missions}
                    </ScrollView>
                </View>
                <View style={styles.CODescView}>
                    <View style={styles.CODesc}>
                        <TextView text={footerText}></TextView>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

class CardChoice extends Component{
    constructor(props){
        super(props);
        this.state={
            vote:null,
            reveal:null,
            hideTimer:true,
        }
    }
    listOptions(){
        let opts = [];
        const c = this.props.card;
        var x;
        for(x of c['options'])
            opts[opts.length]=<Option key={Math.random()} reveal={this.state.reveal} o={x}></Option>
        return opts;
    }
    vote(vote){
        vote = (vote == this.state.vote) ? null : vote;
        this.setState({ vote:vote, hideTimer: vote==null })
        clearTimeout(this.voteTimer);
        if(vote != null){
            this.voteTimer = setTimeout(()=>{
                if(this.state.vote != null ){
                    this.confirmVotes();
                    clearTimeout(this.voteTimer);
                }
            },voteTimerDuration)
        }
    }
    revealConsequence(){
        this.setState({reveal:true});
    }
    confirmVotes(){
        console.log("CONFIRMING VOTES...")
        this.revealConsequence();
        const myChoice = findOptionByVote(this.props.card,this.state.vote)
        console.log(`NewGS:${this.props.gameStats}`)
        let u = applyAllConsequences(myChoice['what'],this.props.gameStats)
        console.log(`NewGS:${u}`)
        this.props.onSolve();
    }
    render(){
        const card = this.props.card;
        const headerText = card['header'];
        const options = this.listOptions();
        const iVoted = this.state.vote != null;
        const voteText = iVoted ? card['options'][this.state.vote]['voteText'] : "";
        const voteKeyword = iVoted ? card['options'][this.state.vote]['keyword'] : "";
        const myColor=utils.getCardColor(card);
        console.info(`My color is: ${myColor}`);

        return(
            <SafeAreaView style={[
                styles.card,
                {borderColor:myColor}]}
            >
                <View style={stylesChoice.headerView}>
                    <TextView text={headerText}></TextView>
                </View>
                <View style={stylesChoice.LinkView}>
                    <TouchableHighlight style={{flex:1,justifyContent:"center"}} onPress={() => this.props.onLinkClick()}>
                        <Text style={[stylesChoice.Link]}>Voltar para a tela de atributos</Text>
                    </TouchableHighlight>
                </View>
                <View style={stylesChoice.OptionsView}>
                    <ScrollView contentContainerStyle={stylesChoice.Options}>
                        {options}
                    </ScrollView>
                    <View style={[stylesChoice.ProgressBarView,{display: iVoted? "flex" : "flex"}]}>
                        <Counter disabled={this.state.hideTimer}/>
                    </View>
                </View>
                <View style={stylesChoice.VoteView}>
                    <View style={stylesChoice.VoteDescView}>
                        <View style={{flexDirection:"row",display: iVoted? "flex" : "none"}}>
                            <Text style={[styles.Text,stylesChoice.DescText]}>
                                {voteText}
                            </Text>
                            <Text style={[styles.Text,stylesChoice.DescText,
                                {color: this.state.vote == VOTE.AGREE ? color.AGREE : color.DISAGREE}]
                            }>
                                {voteKeyword}
                            </Text>   
                        </View>
                    </View>
                    <View style={stylesChoice.VoteButtons}>
                        <VoteButtons 
                            disabled={this.props.solved}
                            onAgree={() => this.vote(VOTE.AGREE)}
                            onDisagree={() => this.vote(VOTE.DISAGREE)}>
                        </VoteButtons>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

class CardProbability extends Component{
    constructor(props){
        super(props);
    }
    solveCard(n){
        let myConsequence = findConsequenceByNumber(this.props.card,n);
        console.log(`NewGS:${this.props.gameStats}`)
        let updatedGame = applyAllConsequences(myConsequence['what'],this.props.gameStats)
        console.log(`NewGS:${updatedGame}`)
        this.props.onSolve(updatedGame)
    }
    render(){
        const card = this.props.card;
        const myColor=utils.getCardColor(card);
        console.info(`My color is: ${myColor}`);
        return(
            <TouchableWithoutFeedback onPress={()=>{}}>
                <SafeAreaView style={[
                    styles.card,
                    {borderColor:myColor}]}
                >
                    <View style={stylesProb.header}>
                        <Text style={stylesProb.headerText}>{this.props.card['header']}</Text>
                    </View>
                    <View style={stylesProb.LinkView}>
                        <TouchableHighlight style={{flex:1,justifyContent:"center",display:"none"}} onPress={() => this.props.onLinkClick()}>
                            <Text style={[stylesProb.Link]}>Voltar para a tela de atributos</Text>
                        </TouchableHighlight>
                    </View> 
                    <View style={stylesProb.consequencesView}>
                        {this.props.card['consequences'].map((cons) => 
                            <View key={Math.random()}>
                                <Text style={stylesProb.consequences}>{cons["text"]}</Text>
                            </View> 
                        )}
                    </View>
                    <View style={stylesProb.rouletteView}>
                        <Roulette lockOnSpinEnd={true} onSpinEnd={(n)=>{this.solveCard(n)}}></Roulette>
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        )
    }
}

export default class Card extends Component
{
    constructor(props){
        super(props);
        const G = this.props.gameStats;
        /*let k = 6;
        if(k>=DECK.length) console.error(`O DEQUE NÃO TEM ${k} CARTAS`);
        console.log("APRESENTANDO CARTA DE ID="+DECK[k]['id'])
        this.state={
            k:k,
            card:DECK[k],
            open:false,
            biome:biomes[DECK[k]['biome']],
            solved:false,
        }*/
        const myDECK = utils.getDeck(G.square);
        const k = 6 //Math.floor(Math.random() * myDECK.length);
        const card = myDECK[k];
        console.log("APRESENTANDO CARTA DE ID="+card['id'])
        this.state={
            k:k,
            card:card,
            open:false,
            solved:false,
        }
        this.props.updateGame({card:myDECK[k],gameState:states.CARD_CLOSED});
        //this._viewCards();
    }
    _viewCards(){
        /*if(this.state.k!=DECK.length-1){
            setTimeout(()=>{
                const biomes = ["BIOME_FOREST","BIOME_DESERT","BIOME_MOUNTAIN"];
                this.setState({
                    k:this.state.k+1,
                    card:DECK[this.state.k+1],
                    open:true,
                    biome:biomes[DECK[this.state.k+1]['biome']],
                });
                this._viewCards()
            },200)
        } else {
            return false;
        }*/
    }
    solveCard(u){
        this.setState({solved:true});
        utils.delay(2000).then(()=>{
            const update = {...u,...{card:null}}
            this.props.updateGame(update);
            this.props.updateFlow(states.WAITING_FOR_ACTION,screen.ATRIBUTE_SCREEN);
        })
    }
    gotoAttScr(){
        this.props.updateFlow(states.CARD_OPENED,screen.ATRIBUTE_SCREEN);
    }
    gotoRouletteScr(){
        this.props.updateFlow(states.CARD_OPENED,screen.ROULETTE);
    }
    toggleCard(){
        this.setState({open:!this.state.open});
        this.props.updateGame({gameState:states.CARD_OPENED});
    }
    _voteIsUnanimous(){
        // this is true just because 1Player has no others to find
        return true;
    }
    render()
    {
        const G = this.props.gameStats;
        const biome = utils.getMyBiome(G.square);
        const card = this.state.card;
        const myColor = utils.getCardColor(card);
        if(this.state.open){
            switch(this.state.card['type']){
                case TYPE['EFFECT']:
                    return(
                    <CardEffect onLinkClick={() => this.gotoAttScr()} 
                        card={this.state.card} 
                        onSolve={()=>{this.solveCard()}}
                    ></CardEffect>);
                case TYPE['CHOICE']:
                    return(<CardChoice onLinkClick={() => this.gotoAttScr()} 
                        card={this.state.card} 
                        onSolve={(u)=>{this.solveCard(u)}}
                        gameStats={this.props.gameStats}
                        solved={this.state.solved}
                        ></CardChoice>);
                case TYPE['PROBABILITY']:
                    return(<CardProbability onLinkClick={() => this.gotoAttScr()} 
                    card={this.state.card} 
                    gameStats={this.props.gameStats}
                    onSolve={(u) => this.solveCard(u)}></CardProbability>);
                default:
                    console.error("Não esqueça do atributo type no JSON da sua carta ;)");
                    return(<View>Tipo de Card não reconhecido</View>);
            }
        } else {
            return(
                <TouchableWithoutFeedback onPress={()=>{this.toggleCard();}}>
                    <SafeAreaView style={[
                        styles.card,
                        {borderColor:myColor}]}
                    >
                        <View style={styles.CCTextView}>
                            <TextView gameStats={this.props.gameStats} screenStats={this.state} text={`Você caiu na casa ${this.props.gameStats.square} \n Toque para abrir sua carta`}></TextView>
                        </View>
                        <View style={styles.CCIconView}>
                            <Icon
                                style={styles.CCIcon}
                                name={biome['icon']}
                                color={biome['color']}
                            />
                        </View>
                        <View style={styles.CCFooter}></View>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            )
        }
    }
}

// name of team atributes and individual atributes -> necessary for functions below...
const att_team = ["water","food","square"]
const att_ind = ["strength","bravery","friendship","wisdom"]

// converts players json to array
const att_indJsonToarray = (pls) => {
  let a = [];
  let b = [];
  for(let j=0; j < pls.length; j++){
    if(pls[j]!=null){
      for(let i=0; i < att_ind.length; i++){
        a.push(pls[j][att_ind[i]])
      }
      b.push(a)
      a=[];
    } else {
      b.push(null)
    }
  }
  return b;
}

// array to converts players json 
const att_indArrayToJson = (array) => {
  let pls = []
  let j = {}
  for(let k=0; k<array.length; k++){
    if(array[k]!=null){
    for(let i=0; i<att_ind.length;i++){
      j[att_ind[i]]=array[k][i];
    }
    pls.push(j)
    } else {
      pls.push(null)
    }
    j={}
  }
  return pls
}

// converts team atribute json to array
const att_teamJsonToarray = (g) => {
  let a = [];
    for(let i=0; i < att_team.length; i++){
      a.push(g[att_team[i]])
    } 
  return a;
}

// converts array to team atribute json
const att_teamArrayToJson = (array) => {
  let j={}
  for(let i=0;i<att_team.length;i++){
    j[att_team[i]]=array[i];
  }
  return j;
}

// merges update on player object
const merge_atributes = (newAttsJson,pl) => {
  if(pl===null){return null}
  return {...newAttsJson,...pl}
}

// applies consequences of card to player atributes
const apply_atributes = (ca,pa) => {
  if(pa==null){return null}
  let sum = ca.map((a)=>{
    if(a[0] == "+")
      return parseInt(a[1]);
    else
      return 0;
  })
  let sub = ca.map((a)=>{
    if(a[0] == "-")
      return parseInt(a[1]);
    else
      return 0;
  })
  let seta = ca.map((a)=>{
    if(a.length == 1)
      return parseInt(a);
    else
      return null;
  })

  for(let i=0; i<pa.length; i++){
    pa[i] = seta[i] === null ? pa[i] + sum[i] - sub[i] : seta[i] 
  }

  return pa;
}

// Certififies no atribute is above 6 or below 0
const remove_discrepancies = (a) => {
  if(a==null){return null}
  for(let i=0;i<a.length;i++){
    if(a[i] > 6){
      a[i] = 6;
    }
    if(a[i] < 0){
      a[i] = 0;
    }
  }
  return a;
}

// Certifies team has no negative atributes, nor more than 10 water/food
const remove_discrepanciesTeam = (a) => {
    if(a==null){return null}
    for(let i=0;i<a.length;i++){
        if(a[i] > 10 && i!=2){
            a[i] = 10;
        }
        if(a[i] < 0){
            a[i] = 0;
        }
    }
    return a;
}

// finds which consequence should be applied given a card and a number (given by roulette) 
const findConsequenceByNumber = (c,number) => {
  return c['consequences'].filter((cons)=>{
    return cons['when'].find((n)=> n == number)
  })[0];
}

// finds the option that should be applied given the team votes
const findOptionByVote = (c,vote) => {
    return c['options'].filter((opt)=>{
      return opt['type'] === vote
    })[0];
}

// applies teams array to all players of the game and the room itself
const applyTeamsConsequence = (a,g) => {
    let gp = att_indJsonToarray(g['players']);
    let gt = att_team.map((x)=>{return g[x]})
    let att = a['team'].slice(0,att_team.length);
    let ati = a['team'].slice(att_team.length,a.length)
    gp = gp.map((el)=>{
        return remove_discrepancies(apply_atributes(ati,el));
    })
    gp = att_indArrayToJson(gp)
    gp = gp.map((el,i)=>{
        return merge_atributes(g['players'][i],el)
    })
    gt = remove_discrepanciesTeam(apply_atributes(att,gt))
    gt = att_teamArrayToJson(gt);
    g = merge_atributes(g,gt);
    g['players'] = gp;

    return g;
}

const applyIndividualConsequence = (a,g) => {
    const idToApply = g['turn'];
    let pls = g['players']
    
    const indexToApply = pls.findIndex((p)=>{
      if(p!=null){
        return p['classId']===idToApply
      }
    })
  
    let apls = att_indJsonToarray(pls);
    remove_discrepancies(apply_atributes(a['individual'],apls[indexToApply]))
    pls = att_indArrayToJson(apls)
    pls = pls.map((el,i)=>{
        return merge_atributes(g['players'][i],el)
    })
    g['players'] = pls;
    return g;
  }
  
  const applyAllConsequences = (a,g) => {
    return applyIndividualConsequence(a,applyTeamsConsequence(a,g))
  }


  


  
  
  
