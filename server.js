const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8082"
};

app.use(cors(corsOptions));

app.set("view engine", "ejs");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// parse requests of content-type - application/json
app.use(express.json());


const db = require("./models");
db.mongoose
    .connect(db.url)
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// simple route
// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to Employee Management application." });
// });

const employeeRoutes = require('./routes/employee.routes');
const departmentRoutes = require('./routes/department.routes');

app.use('/employee', employeeRoutes);
app.use('/department', departmentRoutes);

app.get("/", (req, res) => {
    res.redirect("/employee");
    //res.send('Employee management system using NodeJS and MongoDB.');
});

// set port, listen for requests
const PORT = process.env.NODE_LOCAL_PORT || 3020;
const hostname = 'localhost';
app.listen(PORT, hostname, () => {
    console.log(`Server is running on port ${PORT}.`);
});
