const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.employees = require("./employee.js")(mongoose);
db.departments = require("./department.js")(mongoose);

module.exports = db;
