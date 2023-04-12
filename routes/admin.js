const express = require('express');
const AdminController = require('../controller/AdminController');
const routes = express.Router();

routes.get('/', AdminController.getBarang);

module.exports = routes;