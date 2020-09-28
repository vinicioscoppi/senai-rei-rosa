const Config = require('./config/config');
const { Promise } = require('bluebird');
const redis = Promise.promisifyAll(require('redis'));
const Room = require('./models/room');

const config = new Config(redis.createClient());
const app = config.express();

const MAX_NUMBER_OF_ROOMS_IN_MEMORY = 10;
const NUMBER_OF_MAX_USER_IN_ROOM = 4;
const NUMBER_OF_MIN_USER_IN_ROOM = 2;

//allow CORS (enable when testing requests from the front-end)
 app.use(config.cors());

app.listen(config.PORT, () => {
    console.log(`> Server running on port ${config.PORT}.`);
});

config.dbClient.on('connect', () => {
    console.log('> Connected to Redis/Memurai database.');
    config.dbClient.flushallAsync()
        .then(() => config._setupRooms())
        .then(roomsInMemory => config.dbClient.setAsync('CURRENT_NUMBER_OF_ROOMS', roomsInMemory))
        .then(() => config.dbClient.setAsync('SYNC', false));
        .then(() => config.dbClient.setAsync('GAME_STARTED', false));
});

app.use(config.bodyParser.json());

//get N rooms
app.get('/room/:numberOfRooms', (req, res) => {
    let numberOfRooms = req.params.numberOfRooms;
    if (isNaN(numberOfRooms))
        res.status(400).send(`${numberOfRooms} não é um número.`);
    else if (numberOfRooms > MAX_NUMBER_OF_ROOMS_IN_MEMORY || numberOfRooms < 1)
        res.status(400).send(`Parâmetro deve ser um número de 1 a ${MAX_NUMBER_OF_ROOMS_IN_MEMORY} (era ${numberOfRooms}).`);
    else {
        new Room().getRoomsFromOneTo(numberOfRooms, config.dbClient)
            .then(rooms => {
                res.send(rooms[0].map(room => JSON.parse(room)));
                return rooms[0].length;
            })
            .then(numberOfRoomsInMemory => config.dbClient.setAsync('CURRENT_NUMBER_OF_ROOMS', numberOfRoomsInMemory));
    }
});

//post a user into a room
// { user: 'userId', roomIndex: number }
app.post('/user', (req, res) => {

    
    if (isNaN(req.body.roomIndex))
        res.status(400).send(`Id da sala não é um numero`);

    if (req.body.roomIndex > 10)
        res.status(400).send(`Id da sala não existe`);

    const user = req.body.user;
    const idRoom = `room-${req.body.roomIndex}`;
    const roomRepo = new Room();

    roomRepo.getRoom(config.dbClient, idRoom).then(
        room => {
            let obj = JSON.parse(room);
            if (obj._players.length >= NUMBER_OF_MAX_USER_IN_ROOM)
                res.status(400).send(`Numero de usuários deve ser entre ${NUMBER_OF_MIN_USER_IN_ROOM} e ${NUMBER_OF_MAX_USER_IN_ROOM}.`);
            else {
                obj._players.push(user);
                roomRepo.addToRoom(idRoom, config.dbClient, obj).then(() => res.send({ 'users':obj._players, idRoom }));
            }
        }
    ).catch(error => console.error(error));
});

//get all rooms with sync status
app.get('/sync/rooms', (req, res) => {
    const multi = config.dbClient.multi();
    config.dbClient.getAsync('SYNC')
        .then(sync => {
            if (sync === 'false') {
                res.send({ synchronized: false });
            } else if (sync === 'true') {
                multi.keys('room-*');
                return multi.execAsync();
            } else {
                console.error('Impossible to get the value of SYNC');
                throw new Error('Impossible to get the value of SYNC');
            }
        })
        .then(keys => {
            keys[0].forEach(key => multi.get(key));
            return multi.execAsync();
        })
        .then(rooms => {
            res.send({ synchronized: true, rooms: rooms.map(room => JSON.parse(room)) });
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });
});

//synchronize the current number of rooms
app.post('/sync', (req, res) => {
    config.dbClient.getAsync('SYNC').then(sync => {
        if (sync === 'true') {
            res.send({ synchronized: true });
        } else {
            let currentNumberOfRooms = 0;
            const multi = config.dbClient.multi();
            config.dbClient.getAsync('CURRENT_NUMBER_OF_ROOMS')
            .then(currentNumber => {
                currentNumberOfRooms = currentNumber;
                multi.keys('room-*');
                return multi.execAsync();
            })
            .then(keys => keys[0].filter(key => parseInt(key.substring(5)) > currentNumberOfRooms))
            .then(roomsToDelete => {
                roomsToDelete.forEach(room => multi.del(room));
                return multi.execAsync();
            })
            .then(() => config.dbClient.setAsync('SYNC', true))
            .then(() => res.send({ synchronized: true }));
        }
    });
});

app.post('/start', (req, res) => {
    const multi = config.dbClient.multi();
    config.dbClient.getAsync('SYNC')
        .then(sync => {
            if (sync === 'false') {
                res.send({ synchronized: false });
            } else if (sync === 'true') {
                multi.keys('room-*');
                return multi.execAsync();
            } 
        })
        .then(keys => {
            keys[0].forEach(key => multi.get(key));
            return multi.execAsync();
        })
        .then(rooms => { 
            const verifyRooms = rooms.map(room => JSON.parse(room));
            var roomsToDelete = [];
            
            verifyRooms.forEach((room) => { if (room._players.length < 2) roomsToDelete.push(room); });

            if(roomsToDelete.length > 0){
                roomsToDelete.forEach(room => multi.del(room));
            }

            return multi.execAsync();
        })
        .then(() => config.dbClient.setAsync('GAME_STARTED', true))
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });
});


app.get('/gameStarted', (req, res) => {
    const multi = config.dbClient.multi();
    config.dbClient.getAsync('GAME_STARTED')
        .then(started => {
            if (started === 'false') {
                res.send({ started: false });
            } else if (started === 'true') {
                res.send({ started: true });
            } 
        })
        .catch(error => {
            console.error(error);
            res.sendStatus(500);
        });
});