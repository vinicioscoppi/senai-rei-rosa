const express = require('express');
const bodyParser = require('body-parser');
const Room = require('../models/room');
const Sticker = require('../models/sticker');

const stickerColors = require('../models/enums/room-sticker-color');
const stickerGeoForms = require('../models/enums/room-sticker-geo-form');

module.exports = class Config {
    constructor(dbClient) {
        this.PORT = 3000;
        this.express = express;
        this.bodyParser = bodyParser;
        this.dbClient = dbClient;
    }

    _setupRooms() {
        const multi = this.dbClient.multi();
        stickerColors.forEach((color, i) => {
            stickerGeoForms.forEach((geoForm, j) => {
                let key = `room-${j + 1 + (i * stickerGeoForms.length)}`;
                let value = JSON.stringify(new Room(new Sticker(color, geoForm)));
                multi.set(key, value);
            });
        });
        multi.execAsync().then(() => console.log('> Rooms setup finished')).catch(err => console.error(err));
    }
}