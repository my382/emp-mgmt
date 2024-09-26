const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8082"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

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


app.use('/employees', require('./routes/employee.routes'));
app.use('/departments', require('./routes/department.routes'));

app.get("/", (req, res) => {
    //res.redirect("/employees");
    res.send('World of NodeJS and MongoDB');
});

//require("./routes/employee.routes")(app);
//require("./routes/department.routes")(app);

// set port, listen for requests
const PORT = process.env.NODE_LOCAL_PORT || 3020;
const hostname = 'localhost';
app.listen(PORT, hostname, () => {
    console.log(`Server is running on port ${PORT}.`);
});
