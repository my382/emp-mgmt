module.exports = app => {

    const employees = require('../controllers/employee.controller.js');

    var employeeRouter = require('express').Router();

    // Create a new employee
    employeeRouter.post("/", employees.create);

    // Retrieve all employees
    employeeRouter.get("/", employees.findAll);

    // Retrieve a single employee with id
    employeeRouter.get("/:id", employees.findOne);

    // Update an employee with id
    employeeRouter.put("/:id", employees.update);

    // Delete an employee with id
    employeeRouter.delete("/:id", employees.delete);

    // Delete all employees
    employeeRouter.delete("/", employees.deleteAll);

    //app.use("api/employees", employeeRouter);

};
