import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {color} from './../../enums/color';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome'
import { icons } from './../../enums/icons'

class AtributeCell extends Component{
    constructor(props){
        super(props);
        this.state = {enabled: this.props.enabled}
        this.switchEnableState.bind(this);
    }
    switchEnableState(){
        if(this.props.action(this.props.id)){
            this.setState({enabled:!this.state.enabled});
        }
    }
    render()
    {
        return(
            <TouchableOpacity onPress={() => this.switchEnableState()}>
                <View style={
                    (this.state.enabled === true) ? 
                    [styles.atributeCell, {backgroundColor: this.props.colorEnabled,}] : 
                    [styles.atributeCell, {backgroundColor: this.props.colorDisabled,}]
                }>
                    <Text>{this.props.id}</Text>
                    <Text>{this.props.enabled}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class AtributeBar extends Component {
    constructor(props){
        super(props);
        this.generateCells = this.generateCells.bind(this);
        this.allowCellChanges = this.allowCellChanges.bind(this);
        this.state = {
            cells: this.generateCells(this.props.score), 
            score:this.props.score
        };
    }
    allowCellChanges = (idCellToChange) =>
    {
        const changeIsAdding1Point = (idCellToChange == (this.state.score + 1));
        const changeIdSubtracting1Point = (idCellToChange == this.state.score);
        const IAllowCellToChange = changeIsAdding1Point || changeIdSubtracting1Point;
        
        let newScore = this.state.score;

        if(changeIsAdding1Point){
            newScore++;
        }
        if(changeIdSubtracting1Point){ 
            newScore--;
        }

        this.setState({score:newScore});
        return IAllowCellToChange;
    }
    generateCells = (score) => 
    {
        var cells = [];

        for(let i = 6; i >= 1; i--)
        {
            if(i <= score){
                cells.push(
                    <AtributeCell 
                        id={i} 
                        atribute={this.props.atribute} 
                        enabled={true} 
                        colorEnabled={this.props.colorEnabled} 
                        colorDisabled={this.props.colorDisabled} 
                        action={() => this.allowCellChanges(i)}>
                    </AtributeCell>
                );
            } else {
                cells.push(
                    <AtributeCell 
                        id={i} 
                        atribute={this.props.atribute} 
                        enabled={false} 
                        colorEnabled={this.props.colorEnabled} 
                        colorDisabled={this.props.colorDisabled} 
                        action={() => this.allowCellChanges(i)}>     
                    </AtributeCell>
                );
            }
        }

        return cells;
    }
    render()
    {
        return(
            <View style={styles.atributeBar}>
                
                {this.state.cells.map((cell) => 
                   <View key={cell.props.id}>
                       {cell}
                   </View> 
                )}
                <View style={styles.atributeBarTitle}>
                    <Text>{this.props.atribute}</Text>
                </View>
            </View>
        );
    }
}

export class IndividualAtributes extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View style={styles.atributes}>  
                <AtributeBar key={1} atribute="FORCA" colorEnabled={color.STRENGTH_ENABLED} colorDisabled={color.STRENGTH_DISABLED} score={5}></AtributeBar>
                <AtributeBar key={2} atribute="CORAGEM" colorEnabled={color.BRAVERY_ENABLED} colorDisabled={color.BRAVERY_DISABLED} score={6}></AtributeBar>
                <AtributeBar key={3} atribute="AMIZADE" colorEnabled={color.FRIENDSHIP_ENABLED} colorDisabled={color.FRIENDSHIP_DISABLED} score={6}></AtributeBar>
                <AtributeBar key={4} atribute="SABEDORIA" colorEnabled={color.WISDOW_ENABLED} colorDisabled={color.WISDOM_DISABLED} score={6}></AtributeBar>
                <Icon name={icons.forca} size={60}></Icon>
            </View>
        );
    }
}