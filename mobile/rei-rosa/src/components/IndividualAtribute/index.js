import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {color} from './../../enums/color';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { icons } from './../../enums/icons';

export class IndividualAtributes extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        const atributes = this.props.atributes;
        const updateAtributes = this.props.updateAtributes;
        return(
            <View style={styles.atributes}>  
                <AtributeBar key={1} 
                    atribute="FORCA" 
                    colorEnabled={color.STRENGTH_ENABLED} 
                    colorDisabled={color.STRENGTH_DISABLED} 
                    score={atributes.strenght}
                    onScoreChange={(newScore) => updateAtributes({strenght:newScore})}>
                </AtributeBar>
                <AtributeBar key={2} 
                    atribute="CORAGEM" 
                    colorEnabled={color.BRAVERY_ENABLED} 
                    colorDisabled={color.BRAVERY_DISABLED} 
                    score={atributes.bravery}
                    onScoreChange={(newScore) => updateAtributes({bravery:newScore})}>
                </AtributeBar>
                <AtributeBar key={3} atribute="AMIZADE" 
                    colorEnabled={color.FRIENDSHIP_ENABLED} 
                    colorDisabled={color.FRIENDSHIP_DISABLED} 
                    score={atributes.friendship}
                    onScoreChange={(newScore) => updateAtributes({friendship:newScore})}>
                </AtributeBar>
                <AtributeBar key={4} atribute="SABEDORIA" 
                    colorEnabled={color.WISDOW_ENABLED} 
                    colorDisabled={color.WISDOM_DISABLED} 
                    score={atributes.wisdom}
                    onScoreChange={(newScore) => updateAtributes({wisdom:newScore})}>
                </AtributeBar>
            </View>
        );
    }
}

class AtributeBar extends Component {
    constructor(props){
        super(props);
        this.generateCells = this.generateCells.bind(this);
        this.changeCell = this.changeCell.bind(this);
    }
    render()
    {
        const SCORE = this.props.score;
        const cells = this.generateCells(SCORE);
        return(
            <View style={styles.atributeBar}>
                <View style={styles.atributeBarCells}>
                    {cells.map((cell) => 
                        <View style={styles.cellView} key={cell.props.id}>
                            {cell}
                        </View> 
                    )}
                </View>
                <View style={styles.atributeBarTitle}>
                    <View style={styles.iconView}>
                        <CellIcon atribute={this.props.atribute}></CellIcon>
                    </View>
                </View>
            </View>
        );
    }
    changeCell = (id) =>
    {
        const CUR_SCORE = this.props.score; 
        const changeIsAdding1Point = id == (CUR_SCORE + 1);
        const changeIdSubtracting1Point = id == CUR_SCORE;
        const IAllowCellToChange = changeIsAdding1Point || changeIdSubtracting1Point;
        
        let NEW_SCORE = CUR_SCORE;

        if(changeIsAdding1Point){
            NEW_SCORE++;
        }
        if(changeIdSubtracting1Point){ 
            NEW_SCORE--;
        }

        this.props.onScoreChange(NEW_SCORE);
    }
    generateCells = (score) => 
    {
        var cells = [];

        for(let i = 6; i >= 1; i--)
        {
            cells.push(
                <AtributeCell 
                    id={i} 
                    atribute={this.props.atribute} 
                    enabled={i <= score} 
                    colorEnabled={this.props.colorEnabled} 
                    colorDisabled={this.props.colorDisabled} 
                    action={(id) => this.changeCell(id)}>
                </AtributeCell>
            );   
        }

        return cells;
    }
    
}

class AtributeCell extends Component{
    constructor(props){
        super(props);
    }
    render()
    {
        const ENABLED = this.props.enabled;
        const COLOR_ENABLED = this.props.colorEnabled;
        const COLOR_DISABLED = this.props.colorDisabled;
        return(
            <TouchableOpacity onPress={() => this.props.action(this.props.id)}>
                <View style={[
                    styles.atributeCell, 
                    {backgroundColor: ENABLED ? COLOR_ENABLED : COLOR_DISABLED}
                ]}>
                    <Text style={styles._id}>{this.props.id}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

class CellIcon extends Component{
    constructor(props){
        super(props);
    }
    render(){
        switch(this.props.atribute){
            case "FORCA":
                return(<Icon style={styles.icon} name={icons.STRENGTH} color={color.STRENGTH_ENABLED}/>)
            case "CORAGEM":
                return(<Icon style={styles.icon} name={icons.BRAVERY} color={color.BRAVERY_ENABLED}/>)
            case "AMIZADE":
                return(<Icon style={styles.icon} name={icons.FRIENDSHIP} color={color.FRIENDSHIP_ENABLED}/>)
            case "SABEDORIA":
                return(<Icon style={styles.icon} name={icons.WISDOW} color={color.WISDOW_ENABLED}/>)                    
            default:
                return(<Icon style={styles.icon} name={icons.FOOD} color={color.FOOD}/>)
        }
    }
}