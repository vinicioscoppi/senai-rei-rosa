export const states = {
    HALT:0, // Estado quando o professor "destrói" as salas antes do jogo terminar.
    CHOOSING_ROOM:2,// Estado escolhendo sala
    CHOOSING_CLASS:1, // Estado escolhendo classe
    STARTING_GAME:3, // Estado quando o jogo acabou de começar e os atributos iniciais vão ser colocados
    SPIN_GET_ATRIBUTES:4, // Estado quando o jogador está escolhendo seus atributos iniciais
    WAITING_FOR_ACTION:5, // Estado esperando o clique do usuário
    SPIN_NUMBER_OF_SQUARES:6, // Girando a roleta para saber quantas casas andar
    //SPIN_PROBABILITY_CARD:7, // Girando a roleta para ver por causa de um desafio de carta
    SPINNING:8,
    REVEAL_SPIN_RESULT:9, // Estado ao revelar o número tirado pela roleta
    CARD_CLOSED:10, // Carta fechada
    CARD_OPENED:11, // Carta aberta (desafio conhecido)
    CARD_SOLVED:16, // Estado quando a carta é resolvida
    VOTING:12, // Votando em uma proposta de um jogador
    VOTE_END_AGREE:13, // Grupo aceita a proposta do jogador
    VOTE_END_DISAGREE:14, // Grupo cancela a proposta do jogador
    GAME_ENDING:15, // Fim de jogo (Precisamos conversar com a Elisa sobre isso...)
}

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