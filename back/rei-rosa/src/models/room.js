const Sticker = require('./sticker')

module.exports = class Room {
    constructor(sticker, idRoom) {
        this._idRoom = idRoom;
        this._players = [];
        this._sticker = sticker;
    }

    getRoomsFromOneTo(number, dbClient) {
        const multi = dbClient.multi();
        multi.mget(this._mapKeysFromOneTo(number));
        return multi.execAsync();
    }

    _mapKeysFromOneTo(number) {
        return new Array(parseInt(number)).fill().map((v, i) => `room-${i + 1}`);
    }

    addToRoom(idRoom, dbClient, users) {
        return dbClient.setAsync(idRoom, JSON.stringify(users));
    }

    getRoom(dbClient, idRoom) {
        return dbClient.getAsync(idRoom);
    }

    get players() {
        return this._players;
    }
    set players(player) {
        this._players = player;
    }

    get sticker() {
        return this._sticker;
    }

    set sticker(sticker) {
        this._sticker = sticker;
    }

    get idRoom() {
        return this._idRoom;
    }

    set idRoom(idRoom) {
        this._idRoom = idRoom;
    }
}