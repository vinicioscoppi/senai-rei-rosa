const Config = require('./config/config');
const { Promise } = require('bluebird');
const redis = Promise.promisifyAll(require('redis'));
const Room = require('./models/room');

const config = new Config(redis.createClient());
const app = config.express();

const NUMBER_OF_ROOMS_IN_MEMORY = 10;
const NUMBER_OF_MAX_USER_IN_ROOM = 4;
const NUMBER_OF_MIN_USER_IN_ROOM = 2;

app.listen(config.PORT, () => {
    console.log(`> Server running on port ${config.PORT}.`);
});

config.dbClient.on('connect', () => {
    console.log('> Connected to Redis database.');
    config.dbClient.flushallAsync().then(() => config._setupRooms());
});

app.use(config.bodyParser.json());

app.get('/room/:numberOfRooms', (req, res) => {
    let numberOfRooms = req.params.numberOfRooms;
    if (isNaN(numberOfRooms))
        res.status(400).send(`${numberOfRooms} não é um número.`);
    else if (numberOfRooms > NUMBER_OF_ROOMS_IN_MEMORY || numberOfRooms < 1)
        res.status(400).send(`Parâmetro deve ser um número de 1 a ${NUMBER_OF_ROOMS_IN_MEMORY} (era ${numberOfRooms}).`);
    else {
        new Room().getRoomsFromOneTo(numberOfRooms, config.dbClient)
            .then(rooms => res.send(rooms[0].map(room => JSON.parse(room))));
    }
});

app.get('/addUser/:nameUser/:idRoom', (req, res) => {

    if (isNaN(req.params.idRoom))
        res.status(400).send(`Id da sala não é um numero`);

    if (req.params.idRoom > 10)
        res.status(400).send(`Id da sala não existe`);

    const user = req.params.nameUser;
    const idRoom = "room-" + req.params.idRoom;

    new Room().getRoom(config.dbClient, idRoom).then(
        room => {
            var obj = JSON.parse(room);

            if (obj._players.length >= NUMBER_OF_MAX_USER_IN_ROOM)
                res.status(400).send(`Numero de usuários deve ser entre ${NUMBER_OF_MIN_USER_IN_ROOM} e ${NUMBER_OF_MAX_USER_IN_ROOM}.`);
            else {
                obj._players.push(user);

                new Room().addToRoom(idRoom, config.dbClient, obj).then(ret => res.send("Done!"));
            }
        }
    ).catch(error => console.error(error));
});
