const express = require('express');
const bodyParser = require('body-parser');
const { Promise } = require('bluebird');
const redis = Promise.promisifyAll(require('redis'));

module.exports = class Config {
    constructor() {
        this.PORT = 3000;
        this.express = express;
        this.bodyParser = bodyParser;
        this.redis = redis;
    }
}