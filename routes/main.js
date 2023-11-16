const express = require('express');

const route = express.Router();
const mainController = require('../controllers/main');

route.get('/',mainController.default);
route.post('/mailbox',mainController.messageHandler);

module.exports = route;