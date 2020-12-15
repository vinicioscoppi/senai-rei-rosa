module.exports = class Room {
    constructor(idRoom) {
        this._idRoom = idRoom;
        this._players = [];
        this._gameRunning = false;
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

    get idRoom() {
        return this._idRoom;
    }

    set idRoom(idRoom) {
        this._idRoom = idRoom;
    }

    get gameRunning() {
        return this._gameRunning;
    }

    set gameRunning(gameRunning) {
        this._gameRunning = gameRunning;
    }
}