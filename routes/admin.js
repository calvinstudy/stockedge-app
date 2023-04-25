const express = require("express");
const AdminController = require("../controller/AdminController");
const routes = express.Router();

routes.get("/dashboard", AdminController.getDashboard);

routes.get("/barang", AdminController.getBarang);

module.exports = routes;
