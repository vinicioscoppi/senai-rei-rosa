const Sticker = require('./sticker')

module.exports = class Room {
    constructor(sticker) {
        this.players = [];
        this.sticker = sticker;
    }

    getRoomsFromOneTo(number, dbClient) {
        const multi = dbClient.multi();
        multi.mget(this._mapKeysFromOneTo(number));
        return multi.execAsync();
    }

    _mapKeysFromOneTo(number) {
        return new Array(parseInt(number)).fill().map((v, i) => `room-${i+1}`);
    }
}