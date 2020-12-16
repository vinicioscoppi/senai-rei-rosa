import React, {Component} from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Modal,
  Button,
  TouchableHighlight,
} from 'react-native';
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as CONFIG from './../../config/config';
export class TeamAtributes extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        const GS=this.props.gameStats;
        return(
            <SafeAreaView style={styles.teamAtributes}>
                {CONFIG.TEAM_ATRIBUTES.map((att)=>{
                    return(
                        <View key={att['id']} style={styles.teamAtributeView}>
                            <View style={styles.iconView}>
                                <Icon 
                                    style={styles.icons} 
                                    name={att['icon']} 
                                    size={30} 
                                    color={att['color']}/>
                            </View>
                            <View style={styles.barView}>
                                <TeamAtributeBar 
                                    atribute = {att}
                                    points = {GS[att['name']]}
                                ></TeamAtributeBar>
                            </View>
                        </View>
                    )
                })}
            </SafeAreaView>
        );
    }
}

export class TeamAtributeBar extends Component
{
    constructor(props){
        super(props);
    }
    renderCells(atribute,points){
        let cells = [];
        for(let i=1;i<=atribute['points'];i++)
        {
            cells[i] = 
                <View key={i} style={
                    {flex:1/atribute['points'],
                    borderRightWidth:1,
                    borderColor: (i <= points) ? "#fff" : "#000",
                    backgroundColor: i <= points ? atribute['color'] : "#000"}
                }>
                    <Text style={{textAlign:"center"}}>{i}</Text>
                </View>
        }
        return cells;
    }
    render()
    {   
        const atribute = this.props.atribute;
        const points = this.props.points;
        return(
            <View style={[
                styles.teamAtributeBar,
            ]}>
                {this.renderCells(atribute,points)}
            </View>
        );
    }
}