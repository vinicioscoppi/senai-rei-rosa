const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Room = require('../models/room');
const arrayFromTo = require('../utils/array-from-to');

module.exports = class Config {
    constructor(dbClient) {
        this.PORT = 3001;
        this.express = express;
        this.bodyParser = bodyParser;
        this.dbClient = dbClient;
        this.cors = cors;
    }

    _setupRooms() {
        const multi = this.dbClient.multi();
        arrayFromTo(1, 10).forEach(index => {
            const key = `room-${index}`;
            const value = JSON.stringify(new Room(index));
            multi.set(key, value);
        });
        return multi.execAsync().then(() => {
            console.log(`> Setup finished adding 10 rooms.`);
            return 10;
        }).catch(err => { console.error(err); return 0; });
    }
}