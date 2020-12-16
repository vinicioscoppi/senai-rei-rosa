import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { states } from './../../enums/states';
import {screen} from './../../enums/screen';
import {PLAYER_CLASSES} from './../../config/config'
import * as utils from './../../util/utils';
import * as CONFIG from './../../config/config';
export class TextView extends Component
{
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    getText(){
        const S = this.props.screenStats;
        const G = this.props.gameStats;
        
        const GS = G?.gameState;
  
        const MY_PLAYER = utils.findMyPlayer(G);
        
        const CUR_SCREEN = utils.getMyScreen(G);
        
        let MY_CLASSNAME = utils.getMyClassname(G);
        
        MY_CLASSNAME = utils.nomeEmPortugues(MY_CLASSNAME)
        
        switch(CUR_SCREEN){
            case screen.CHOOSE_ROOM:
                return `Escolha sua sala`;
            case screen.CHOOSE_CLASS:
                const myClassname = CONFIG.PLAYER_CLASSES.find((el)=>{return el?.['id'] === S.currentChoice})?.['name']
                return `${S.currentChoice?`Você escolheu o ${utils.nomeEmPortugues(myClassname)}`:`Escolha sua classe`}`;
            case screen.ROULETTE:
                switch(GS){
                    case states.SPIN_GET_ATRIBUTES:
                        const nextNullAtt = utils.findMyNextNullAtribute(MY_PLAYER);
                        const nextNullAttText = utils.nomeEmPortugues(nextNullAtt?.['name'])
                        return `Toque na roleta para obter seus pontos \n iniciais de ${nextNullAttText}`;

                    case states.SPIN_NUMBER_OF_SQUARES:
                        return "Toque na roleta para andar as casas";
                    case states.WAITING_FOR_ACTION:
                        return `Avance ${SS.selectedItem} casas`; 
                    default:
                        return "Não implementado ainda...";    
                }
            case screen.ATRIBUTE_SCREEN:
                
                switch(GS){
                    case states.STARTING_GAME:
                        return `Você é o ${MY_CLASSNAME}!\n\n Toque aqui para receber seus atributos`;
                    case states.WAITING_FOR_ACTION:
                        console.log(`Turn:${G['turn']} ClassId:${MY_PLAYER['classId']}`)
                        if(utils.isMyTurn(G,MY_PLAYER)){
                            return `É a sua vez! \nToque para andar as casas`;
                        } else {
                            return `É a vez do ${MY_CLASSNAME.toLowerCase()} andar o peão da equipe!....`;
                        } 
                    case states.SPIN_NUMBER_OF_SQUARES:
                        return `Ande para a casa ${GS.square}`; 
                    case states.CARD_OPENED:
                        /*if(G['card']['type'] == 0)
                            return `${G['card']['missions'][0]['text']}`
                        if(G['card']['type'] == 1)
                            return `Toque para voltar à carta`;*/
                        return `Discuta com seus colegas quem irá resolver o desafio!\n\n Toque aqui para ver a carta`;
                }
                return "Não implementado ainda...";
            case screen.CARD:
                return "Não implementado ainda...";
            default:
                return "";
        }

    }
    render()
    {
        return(
            <View style={styles.textView}>
                <Text style={styles.text}>
                    {this.props.text == undefined ? this.getText() : this.props.text}
                </Text>
            </View>
        );
    }
/*
    switch(CUR_GAMESTATS.gameState){
        case states.HALT:
            return "O jogo foi terminado pelo professor";
        case states.CHOOSING_ROOM:
            return "Escolha a sua sala";
        case states.CHOOSING_CLASS:
            return "Escolha a sua classe";
        case states.STARTING_GAME:
            return "Você escolheu o Guerreiro";
        case states.SPIN_GET_ATRIBUTES:
            break;
        case states.SPIN_NUMBER_OF_SQUARES:
            break;
        case states.SPIN_PROBABILITY_CARD:
            break;
        case states.CARD_CLOSED:
            break;
        case states.CARD_OPENED:
            break;
        case states.VOTING:
            if(MY_TURN){
                return "My turn - VOTING";
            }
            break;
        case states.VOTE_END:
            break;
        case states.GAME_ENDING:
            break;
        default:
            return "";
    }*/

    /*
    Escolha a sua sala

    Escolha a sua classe

    Você escolheu o Guerreiro

    Você é o guerreiro!

    Toque na roleta para girar

    Girando...

    Avance x casas

    Você caiu na casa x
    Toque para abrir sua Carta

    Toque para mudar os atributos

    Toque para Confirmar

    Você cancelou a ação

    Todos concordam com o guerreiro?

    O grupo cancelou a ação

    O grupo concorda com você
    Você deu x pontos

    O arqueiro quer dar os pontos
    Você concorda?

    O grupo discorda do arqueiro
    Ação cancelada
    
    Você aceitou a ação.

    Todos aceitaram a ação
    O arqueiro deu 2 pontos

    Agora é a vez do Mago

    O mago está girando a roleta...

    */
}



