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

export class IndividualAtributes extends Component
{
    constructor(props){
        super(props);
    }
    render()
    {
        return(
            <View style={styles.atributes}>  
                <AtributeBar key={1} atribute="FORCA" colorEnabled={color.STRENGTH_ENABLED} colorDisabled={color.STRENGTH_DISABLED} score={6}></AtributeBar>
                <AtributeBar key={2} atribute="CORAGEM" colorEnabled={color.BRAVERY_ENABLED} colorDisabled={color.BRAVERY_DISABLED} score={6}></AtributeBar>
                <AtributeBar key={3} atribute="AMIZADE" colorEnabled={color.FRIENDSHIP_ENABLED} colorDisabled={color.FRIENDSHIP_DISABLED} score={6}></AtributeBar>
                <AtributeBar key={4} atribute="SABEDORIA" colorEnabled={color.WISDOW_ENABLED} colorDisabled={color.WISDOM_DISABLED} score={6}></AtributeBar>
            </View>
        );
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
    render()
    {
        return(
            <View style={styles.atributeBar}>
                <View style={styles.atributeBarCells}>
                    {this.state.cells.map((cell) => 
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
            cells.push(
                <AtributeCell 
                    id={i} 
                    atribute={this.props.atribute} 
                    enabled={i <= score} 
                    colorEnabled={this.props.colorEnabled} 
                    colorDisabled={this.props.colorDisabled} 
                    action={() => this.allowCellChanges(i)}>
                </AtributeCell>
            );   
        }

        return cells;
    }
    
}

class AtributeCell extends Component{
    constructor(props){
        super(props);
        this.state = {enabled: this.props.enabled}
        this.switchEnableState.bind(this);
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
                    <Text style={styles._id}>{this.props.id}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    switchEnableState(){
        if(this.props.action(this.props.id)){
            this.setState({enabled:!this.state.enabled});
        }
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