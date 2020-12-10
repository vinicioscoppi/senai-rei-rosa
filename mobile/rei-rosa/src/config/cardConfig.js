import BIOMES from './../config/config';

const ATRIBUTES = {
    'STRENGTH':0,
    'BRAVERY':1,
    'FRIENDSHIP':2,
    'WISDOM':3,
}

export const TYPE={
    EFFECT:0,
    CHOICE:1,
    BLIND_CHOICE:2,
    PROBABILITY:3,
}

export const BIOME={
    FOREST:1,
    DESERT:2,
    MOUNTAIN:3,
}

export const THE={
    MOST:0,
    LEAST:1,
}

export const VOTE={
    AGREE:0,
    DISAGREE:1,
}
// ==================================================================================== EFFECT CARDS

// CARD 1
const C1_MISSION1 = {
    "id":1,
    "text":"Mais Sábio: Gaste 1 de sabedoria para ir em busca de madeira e cipós.",
    "what":{"individual":["+0","+0","+0","-1"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['WISDOM'],"order":null}
}

const C1_MISSION2 = {
    "id":2,
    "text":"Mais forte: Gaste 2 de força para amarrar os cipós na madeira.",
    "what":{"individual":["-2","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['STRENGTH'],"order":null}
}

const EXAMPLE_CARD_1 = {
    "id":1,
    "type":TYPE.EFFECT,
    "header":"Uma chuva forte os surpreende! Façam uma cabana para se abrigarem.",
    "footer":"",
    "biome":BIOME.FOREST,
    "missions": 
    [C1_MISSION1,C1_MISSION2],
}

// CARD 3

const C3_MISSION1 = {
    "id":1,
    "text":"Mais corajoso: gaste 2 de coragem e você irá ganhar 1 de sabedoria.",
    "what":{"individual":["+0","-2","+0","+1"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['BRAVERY'],"order":null}
}

const C3_MISSION2 = {
    "id":2,
    "text":"Mais amigo: gaste 2 de amizade para juntos convencerem os vilões a seguirem a trilha sem causar brigas. \n\nO mais amigo ganhará 1 de sabedoria também.",
    "what":{"individual":["+0","+0","-2","+1"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['FRIENDSHIP'],"order":null}
}

const EXAMPLE_CARD_3 = {
    "id":3,
    "type":TYPE.EFFECT,
    "header":"Uma chuva forte os surpreende! Façam uma cabana para se abrigarem.",
    "footer":"",
    "biome":BIOME.FOREST,
    "missions": 
    [C3_MISSION1,C3_MISSION2],
}

// CARD 4

const C4_MISSION1 = {
    "id":1,
    "text":"Quem gastará 1 de sabedoria para conversar com ela e descobrir o caminho certo?",
    "what":{"individual":["+0","+0","+0","-1"],"team":["+0","+0","+0","+0","+0","1","+0"]},
    "who":{"classId":null,"target":null,"atribute":null,"order":null}
}

const EXAMPLE_CARD_4 = {
    "id":4,
    "type":TYPE.EFFECT,
    "header":"Vocês se perderam no caminho. Resolvem pedir ajuda para voltarem à trilha certa.",
    "footer":"Cada um: ganha 1 de amizade",
    "biome":BIOME.FOREST,
    "missions": 
    [C4_MISSION1],
}// # rodape

// CARD 5

const C5_MISSION1 = {
    "id":1,
    "text":"Quem gastará 1 de coragem e 1 de sabedoria para hipnotizar o leão com a flauta?",
    "what":{"individual":["+0","-1","+0","-1"],"team":["+0","+0","+0","+0","+0","+1","+0"]},
    "who":{"classId":null,"target":null,"atribute":null,"order":null}
}

const EXAMPLE_CARD_5 = {
    "id":1,
    "type":TYPE.EFFECT,
    "header":"Um leão surge na trilha, e uma flauta está no chão.",
    "footer":"Cada um: ganha 1 de amizade.",
    "biome":BIOME.FOREST,
    "missions": 
    [C5_MISSION1],
}

// CARD 6

const C6_MISSION1 = {
    "id":1,
    "text":"Quem gastará 2 de força para ajudar o pássaro a chegar no ninho?\n\n Esse jogador ganhará 1 de sabedoria por ter ajudado.",
    "what":{"individual":["-2","+0","+0","1"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":null,"atribute":null,"order":null}
}

const EXAMPLE_CARD_6 = {
    "id":6,
    "type":TYPE.EFFECT,
    "header":"Um pássaro está no chão enquanto há um ninho no alto da árvore.",
    "footer":"",
    "biome":BIOME.FOREST,
    "missions": 
    [C6_MISSION1],
}

// CARD 9

const C9_MISSION1 = {
    "id":1,
    "text":"Quem tem mais amizade para procurar um local para descansar?\n\n Gaste 1 de amizade e todos ganham 1 de força",
    "what":{"individual":["+0","+0","-1","+0"],"team":["+0","+0","+0","+1","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['FRIENDSHIP'],"order":null}
}

const EXAMPLE_CARD_9 = {
    "id":9,
    "type":TYPE.EFFECT,
    "header":"Vocês estão cansados! São muitas montanhas…",
    "footer":"",
    "biome":BIOME.MOUNTAIN,
    "missions": 
    [C9_MISSION1],
}

// CARD 10

const C10_MISSION1 = {
    "id":1,
    "text":"Cada um:\n\n Gasta 1 de força\n Ganha 1 de coragem",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","-1","+1","+0","+0"]},
    "who":{"classId":null,"target":null,"atribute":null,"order":null}
}

const EXAMPLE_CARD_10 = {
    "id":10,
    "type":TYPE.EFFECT,
    "header":"Vocês estão passando por uma montanha muito alta! Segurem-se nas rochas para não escorregarem.",
    "footer":"",
    "biome":BIOME.MOUNTAIN,
    "missions": 
    [C10_MISSION1],
}


// CARD 12

const C12_MISSION1 = {
    "id":1,
    "text":"Aquele que tem mais coragem deve gastar 1 de coragem para ir até lá e buscar água. \n\nPor ter feito isso, ganha 1 de amizade e a equipe ganha 1 de água.",
    "what":{"individual":["+0","-1","+1","+0"],"team":["+1","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['BRAVERY'],"order":null}
}

const EXAMPLE_CARD_12 = {
    "id":1,
    "type":TYPE.EFFECT,
    "header":"Vocês avistaram uma cachoeira!",
    "footer":"",
    "biome":BIOME.MOUNTAIN,
    "missions": 
    [C12_MISSION1],
}

// CARD 13

const C13_MISSION1 = {
    "id":1,
    "text":"Rápido! O mais sábio deve gastar 1 de sabedoria para encontrar um abrigo para seus amigos.\n\n Por ter feito isso, ganha 1 de amizade.",
    "what":{"individual":["+0","+0","+1","-1"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['WISDOM'],"order":null}
}

const EXAMPLE_CARD_13 = {
    "id":13,
    "type":TYPE.EFFECT,
    "header":"Estão ouvindo este barulho? São pedras descendo a montanha!",
    "footer":"",
    "biome":BIOME.MOUNTAIN,
    "missions": 
    [C13_MISSION1],
}

// CARD 14

const C14_MISSION1 = {
    "id":1,
    "text":"O mais forte deve gastar 2 de força para erguer algumas pedras para facilitar o caminho!\n\nTodos ganham 1 de amizade.",
    "what":{"individual":["-2","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+1","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['STRENGTH'],"order":null}
}

const EXAMPLE_CARD_14 = {
    "id":14,
    "type":TYPE.EFFECT,
    "header":"",
    "footer":"",
    "biome":BIOME.MOUNTAIN,
    "missions": 
    [C14_MISSION1],
}

// CARD 15

const C15_MISSION1 = {
    "id":1,
    "text":"O mais amigo deve gastar 2 de amizade para ajudá-lo. Ele ganhará 1 de sabedoria.",
    "what":{"individual":["+0","+0","-2","+1"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['FRIENDSHIP'],"order":null}
}

const C15_MISSION2 = {
    "id":2,
    "text":"O mais fraco ganha 1 de força",
    "what":{"individual":["+1","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.LEAST,"atribute":ATRIBUTES['STRENGTH'],"order":null}
}

const EXAMPLE_CARD_15 = {
    "id":15,
    "type":TYPE.EFFECT,
    "header":"Está ficando frio na montanha…",
    "footer":"",
    "biome":BIOME.MOUNTAIN,
    "missions": 
    [C15_MISSION1,C15_MISSION2],
}

// CARD 16

const C16_MISSION1 = {
    "id":1,
    "text":"O mais forte deverá ajudar seus colegas a subir gastando 2 de força, mas ganhando 1 de amizade",
    "what":{"individual":["-2","+0","+1","+0"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['STRENGTH'],"order":null}
}

const EXAMPLE_CARD_16 = {
    "id":16,
    "type":TYPE.EFFECT,
    "header":"Vocês estão subindo uma montanha.",
    "footer":"",
    "biome":BIOME.MOUNTAIN,
    "missions": 
    [C16_MISSION1],
}

// CARD 21

const C21_MISSION1 = {
    "id":1,
    "text":"Cada um gasta 1 de sabedoria para acharem a rota certa até as montanhas, onde está a flor rara, a cura do rei",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+0","-1"]},
    "who":{"classId":null,"target":null,"atribute":null,"order":null}
}

const EXAMPLE_CARD_21 = {
    "id":21,
    "type":TYPE.EFFECT,
    "header":"O vento mudou o lugar das dunas!",
    "footer":"",
    "biome":BIOME.DESERT,
    "missions": 
    [C21_MISSION1],
}

// CARD 22

const C22_MISSION1 = {
    "id":1,
    "text":"O mais sábio deve fazer algo para dar sombra! Ele deve gastar 1 de sabedoria e ganhar 1 de amizade.\n\n O restante do grupo ganha 1 de força.",
    "what":{"individual":["+0","+0","+1","-1"],"team":["+1","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['WISDOM'],"order":null}
}

const EXAMPLE_CARD_22 = {
    "id":22,
    "type":TYPE.EFFECT,
    "header":"O sol escaldante tem deixado vocês tontos!",
    "footer":"",
    "biome":BIOME.DESERT,
    "missions": 
    [C22_MISSION1],
}

// CARD 30

const C30_MISSION1 = {
    "id":1,
    "text":"Quem tem mais sabedoria para tirar a joaninha sem machucá-la?\n\n Gaste 1 de sabedoria para tirá-la e ganhe 1 de força.",
    "what":{"individual":["+1","+0","+0","-1"],"team":["+1","+0","+0","+0","+0","+0","+0"]},
    "who":{"classId":null,"target":THE.MOST,"atribute":ATRIBUTES['WISDOM'],"order":null}
}

const EXAMPLE_CARD_30 = {
    "id":30,
    "type":TYPE.EFFECT,
    "header":"Uma joaninha parou no nariz de um de vocês.",
    "footer":"",
    "biome":BIOME.FOREST,
    "missions": 
    [C30_MISSION1],
}

// ==================================================================================== CHOICE CARDS

const C2_OPTION_AGREE = {
    "type":VOTE.AGREE,
    "blind":false,
    "action":"Seguir neste caminho:\n",
    "consequence":"cada um gasta 1 de força",
    "voteText":"Você escolheu ",
    "keyword":"Seguir neste",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","-1","+0","+0","+0"]},
}

const C2_OPTION_DISAGREE = {
    "type":VOTE.DISAGREE,
    "blind":false,
    "action":"Procurar outro caminho:\n",
    "consequence":"cada um gasta 1 de sabedoria",
    "voteText":"Você escolheu ",
    "keyword":"Procurar outro",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+0","-1"]},
}

const EXAMPLE_CARD_2 = {
    "id":2,
    "type":TYPE.CHOICE,
    "header":"O caminho está cheio de galhos com espinhos. Decidam:",
    "footer":"",
    "biome":BIOME.FOREST,
    "options":[C2_OPTION_AGREE,C2_OPTION_DISAGREE],
    "votes":[null,null,null,null]
}

const C18_OPTION_AGREE = {
    "type":VOTE.AGREE,
    "blind":false,
    "action":"Vocês aceitam\n",
    "consequence":"e avançam 1 casa?",
    "voteText":"Você escolheu ",
    "keyword":"Aceitar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["-1","+1","+1","+0","+0","+0","+0"]},
}

const C18_OPTION_DISAGREE = {
    "type":VOTE.DISAGREE,
    "blind":false,
    "action":"Ou preferem não aceitar\n",
    "consequence":"e recuar 4 casas?",
    "voteText":"Você escolheu ",
    "keyword":"Não aceitar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","-4","+0","+0","+0","-1"]},
}

const EXAMPLE_CARD_18 = {
    "id":18,
    "type":TYPE.CHOICE,
    "header":"Vocês encontraram um camelo carregando cestas com comida. Ele e seu dono estão com sede. O dono oferece 1 de comida, mas pede 1 de água",
    "footer":"",
    "biome":BIOME.DESERT,
    "options":[C18_OPTION_AGREE,C18_OPTION_DISAGREE],
    "votes":[null,null,null,null]
}

const C19_OPTION_AGREE = {
    "type":VOTE.AGREE,
    "blind":true,
    "action":"Descansarem\n",
    "consequence":"Recuem 3 casas",
    "voteText":"Você escolheu ",
    "keyword":"Descansar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+0","+0"]},
}

const C19_OPTION_DISAGREE = {
    "type":VOTE.DISAGREE,
    "blind":true,
    "action":"Continuar o caminho \n",
    "consequence":"Gastem 1 de água e 1 de força cada um e avancem 1 casa",
    "voteText":"Você escolheu ",
    "keyword":"Continuar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["-1","+0","+1","-1","+0","+0","+0"]},
}

const EXAMPLE_CARD_19 = {
    "id":19,
    "type":TYPE.CHOICE,
    "header":"Está muito quente! Vocês acham melhor:",
    "footer":"",
    "biome":BIOME.DESERT,
    "options":[C19_OPTION_AGREE,C19_OPTION_DISAGREE],
    "votes":[null,null,null,null]
}

const C23_OPTION_AGREE = {
    "type":VOTE.AGREE,
    "blind":true,
    "action":"Vocês preferem seguir o caminho\n",
    "consequence":"cada um gasta 1 de sabedoria",
    "voteText":"Você escolheu ",
    "keyword":"Seguir",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+0","-1"]},
}

const C23_OPTION_DISAGREE = {
    "type":VOTE.DISAGREE,
    "blind":true,
    "action":"ou investigar a cidade?\n",
    "consequence":"cada um ganha 1 de sabedoria",
    "voteText":"Você escolheu ",
    "keyword":"Investigar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+0","+1"]},
}

const EXAMPLE_CARD_23 = {
    "id":23,
    "type":TYPE.CHOICE,
    "header":"Vocês encontraram uma cidade inteira transformada em pedra!",
    "footer":"",
    "biome":BIOME.DESERT,
    "options":[C23_OPTION_AGREE,C23_OPTION_DISAGREE],
    "votes":[null,null,null,null]
}

const C24_OPTION_AGREE = {
    "type":VOTE.AGREE,
    "blind":false,
    "action":"Conversam com ela e podem até ganhar algo\n",
    "consequence":"cada um ganha 1 de amizade e o grupo ganha 1 de água",
    "voteText":"Você escolheu ",
    "keyword":"Conversar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+1","+0","+0","+0","+0","+1","+0"]},
}

const C24_OPTION_DISAGREE = {
    "type":VOTE.DISAGREE,
    "blind":false,
    "action":"ou fogem correndo?\n",
    "consequence":"cada um gasta 1 coragem",
    "voteText":"Você escolheu ",
    "keyword":"Correr",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","+0","-1","+0","+0"]},
}

const EXAMPLE_CARD_24 = {
    "id":24,
    "type":TYPE.CHOICE,
    "header":"Uma criatura mágica azul surge da areia. O que vocês fazem?",
    "footer":"",
    "biome":BIOME.DESERT,
    "options":[C24_OPTION_AGREE,C24_OPTION_DISAGREE],
    "votes":[null,null,null,null]
}

const C25_OPTION_AGREE = {
    "type":VOTE.AGREE,
    "blind":true,
    "action":"deixá-lo e seguirem sem ele\n",
    "consequence":"cada um ganha 1 de força e 1 de coragem",
    "voteText":"Você escolheu ",
    "keyword":"Deixar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","+1","+1","+0","+0"]},
}

const C25_OPTION_DISAGREE = {
    "type":VOTE.DISAGREE,
    "blind":true,
    "action":"ou tentar levá-lo?\n",
    "consequence":"cada um gasta 1 de força e 1 de sabedoria",
    "voteText":"Você escolheu ",
    "keyword":"Levar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","-1","+0","+0","-1"]},
}

const EXAMPLE_CARD_25 = {
    "id":25,
    "type":TYPE.CHOICE,
    "header":"Vocês encontram uma estátua de ouro! Mas ela é muito pesada!\nVocês preferem: ",
    "footer":"",
    "biome":BIOME.DESERT,
    "options":[C25_OPTION_AGREE,C25_OPTION_DISAGREE],
    "votes":[null,null,null,null]
}

const C29_OPTION_AGREE = {
    "type":VOTE.AGREE,
    "blind":true,
    "action":"Vocês ajudam?\n",
    "consequence":"cada um ganha 2 de amizade.",
    "voteText":"Você escolheu ",
    "keyword":"Ajudar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","+0","+0","+2","+0"]},
}

const C29_OPTION_DISAGREE = {
    "type":VOTE.DISAGREE,
    "blind":true,
    "action":"ou passam por ele escondidos?\n",
    "consequence":"cada um gasta 2 de amizade e 1 de força",
    "voteText":"Você escolheu ",
    "keyword":"Não Ajudar",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","-1","+0","-2","+0"]},
}

const EXAMPLE_CARD_29 = {
    "id":29,
    "type":TYPE.CHOICE,
    "header":"Um vilão está machucado logo à frente.",
    "footer":"",
    "biome":BIOME,
    "options":[C29_OPTION_AGREE,C29_OPTION_DISAGREE],
    "votes":[null,null,null,null]
}

const C7_CONSEQUENCE1 = {
    "id":1,
    "when":[1,2,3],
    "text":"Se tirarem 1, 2 ou 3, avancem 1 casa",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+1","+0","+0","+0","+0"]},
}
const C7_CONSEQUENCE2 = {
    "id":2,
    "when":[4,5,6],
    "text":"Se tirarem 4, 5 ou 6, recuem 1 casa",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","-1","+0","+0","+0","+0"]},
}

const EXAMPLE_CARD_7 = {
    "id":7,
    "type":TYPE.PROBABILITY,
    "header":"Eis que surge um penhasco. Quem tem mais coragem para testar o cipó? Girem a roleta!",
    "footer":"",
    "biome":BIOME.FOREST,
    "consequences": 
    [
        C7_CONSEQUENCE1,
        C7_CONSEQUENCE2
    ],
}

const C8_CONSEQUENCE1 = {
    "id":1,
    "when":[1,2,3],
    "text":"Se tirarem 1, 2 ou 3, avancem 1 casa",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+1","+0","+0","+0","+0"]},
}
const C8_CONSEQUENCE2 = {
    "id":2,
    "when":[4,5,6],
    "text":"Se tirarem 4, 5 ou 6 vocês acordaram os lobos e por isso recuem 1 casa",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","-1","+0","+0","+0","+0"]},
}

const EXAMPLE_CARD_8 = {
    "id":8,
    "type":TYPE.PROBABILITY,
    "header":"Há três lobos dormindo. Atrás deles há algumas cordas que ajudarão na subida da montanha. Vocês tentam a sorte para passarem por eles. Girem a roleta!",
    "footer":"",
    "biome":BIOME.MOUNTAIN,
    "consequences": 
    [
        C8_CONSEQUENCE1,
        C8_CONSEQUENCE2
    ],
}

const C20_CONSEQUENCE1 = {
    "id":1,
    "when":[1,2,3],
    "text":"Se sair 1, 2 ou 3, vocês ganham 1 de comida e 1 de água.",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+1","+1","+0","+0","+0","+0","+0"]},
}
const C20_CONSEQUENCE2 = {
    "id":2,
    "when":[4,5,6],
    "text":"Se sair 4, 5 ou 6, cada um perde 1 de força.",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","-1","+0","+0","+0"]},
}

const EXAMPLE_CARD_20 = {
    "id":20,
    "type":TYPE.PROBABILITY,
    "header":"Uma pirâmide surge em meio a areia! Entrem na pirâmide para ganharem água e comida. Girem a roleta!",
    "footer":"",
    "biome":BIOME.DESERT,
    "consequences": 
    [
        C20_CONSEQUENCE1,
        C20_CONSEQUENCE2
    ],
}

const C28_CONSEQUENCE1 = {
    "id":1,
    "when":[1,2,3],
    "text":"Se sair 1, 2 ou 3, eles são aldeões: avancem 1 casa.",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+1","+1","+0","+0","+0","+0","+0"]},
}
const C28_CONSEQUENCE2 = {
    "id":2,
    "when":[4,5,6],
    "text":"Se sair 4, 5 ou 6, eles são vilões: recuem 1 casa.",
    "what":{"individual":["+0","+0","+0","+0"],"team":["+0","+0","+0","-1","+0","+0","+0"]},
}

const EXAMPLE_CARD_28 = {
    "id":28,
    "type":TYPE.PROBABILITY,
    "header":"Vocês encontram uma aldeia desconhecida e não sabem se ela é habitada por aldeões ou por vilões. Girem a roleta.",
    "footer":"",
    "biome":BIOME.FOREST,
    "consequences": 
    [
        C28_CONSEQUENCE1,
        C28_CONSEQUENCE2
    ],
}

/*export const DECK = [
    EXAMPLE_CARD_1,
    EXAMPLE_CARD_2,
    EXAMPLE_CARD_3,
    EXAMPLE_CARD_4,
    EXAMPLE_CARD_5,
    EXAMPLE_CARD_6,
    EXAMPLE_CARD_7,
    EXAMPLE_CARD_8,
    EXAMPLE_CARD_9,
    EXAMPLE_CARD_10,
    EXAMPLE_CARD_12,
    EXAMPLE_CARD_13,
    EXAMPLE_CARD_14,
    EXAMPLE_CARD_15,
    EXAMPLE_CARD_16,
    EXAMPLE_CARD_18,
    EXAMPLE_CARD_19,
    EXAMPLE_CARD_20,
    EXAMPLE_CARD_21,
    EXAMPLE_CARD_22,
    EXAMPLE_CARD_23,
    EXAMPLE_CARD_24,
    EXAMPLE_CARD_25,
    EXAMPLE_CARD_28,
    EXAMPLE_CARD_29,
    EXAMPLE_CARD_30
]*/

export const DECK = [
    EXAMPLE_CARD_2,
    EXAMPLE_CARD_4,
    EXAMPLE_CARD_5,
    EXAMPLE_CARD_6,
    EXAMPLE_CARD_7,
    EXAMPLE_CARD_8,
    EXAMPLE_CARD_9,
    EXAMPLE_CARD_10,
    EXAMPLE_CARD_12,
    EXAMPLE_CARD_13,
    EXAMPLE_CARD_14,
    EXAMPLE_CARD_16,
    EXAMPLE_CARD_18,
    EXAMPLE_CARD_19,
    EXAMPLE_CARD_20,
    EXAMPLE_CARD_21,
    EXAMPLE_CARD_22,
    EXAMPLE_CARD_23,
    EXAMPLE_CARD_24,
    EXAMPLE_CARD_25,
    EXAMPLE_CARD_28,
    EXAMPLE_CARD_29,
    EXAMPLE_CARD_30
]

export const DECK_EFFECT = DECK.filter((c)=>c['type']==TYPE.EFFECT);
export const DECK_CHOICE = DECK.filter((c)=>c['type']==TYPE.CHOICE);
export const DECK_PROBABILITY = DECK.filter((c)=>c['type']==TYPE.PROBABILITY);
export const DECK_FOREST= DECK.filter((c)=>c['biome']==BIOME.FOREST);
export const DECK_DESERT = DECK.filter((c)=>c['biome']==BIOME.DESERT);
export const DECK_MOUNTAIN = DECK.filter((c)=>c['biome']==BIOME.MOUNTAIN);

/*
(pode não haver arqueiro... :c)

27P
Vocês encontraram um vilão. Ele quer duelar com o(a) arqueiro(a).
Girem a roleta!
Se sair 1, 2 ou 3, vocês não ganharam. O arqueiro(a) gasta 2 de coragem.
Se sair 4, 5 ou 6, vocês conseguiram! Arqueiro(a) ganha 1 de coragem.
*/