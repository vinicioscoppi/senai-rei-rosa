const colors = require('./enums/room-sticker-color');
const geoForms = require('./enums/room-sticker-geo-form');

module.exports = class Sticker {

    constructor(color, geoForm) {
        this.geoForm = geoForm;
        this.color = color;
    }
}