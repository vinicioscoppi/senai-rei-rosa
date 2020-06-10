const Config = require('./config/config');
const config = new Config();

const app = config.express();
const databaseClient = config.redis.createClient();

app.listen(config.PORT, () => {
    console.log(`> Server running on port ${config.PORT}.`);
});

databaseClient.on('connect', () => {
    console.log('> Connected to Redis database.');
});

app.use(config.bodyParser.json());

app.post('/', (req, res) => {
    res.send(req.body);
});

app.get('/', (req, res) => {
    res.send(req.body);
});

