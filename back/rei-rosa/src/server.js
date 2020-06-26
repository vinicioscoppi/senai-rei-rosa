const Config = require('./config/config');
const { Promise } = require('bluebird');
const redis = Promise.promisifyAll(require('redis'));
const Room = require('./models/room');

const config = new Config(redis.createClient());
const app = config.express();

const NUMBER_OF_ROOMS_IN_MEMORY = 10;

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
