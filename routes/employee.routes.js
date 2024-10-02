const employeeController = require('../controllers/employee.controller');

const employeeRouter = require('express').Router();

// Create a new employee
employeeRouter.post("/employee/create/", employeeController.create);

// Retrieve all employees
employeeRouter.get("/employee", employeeController.findAll);

// Retrieve a single employee with id
employeeRouter.get("/employee/:id", employeeController.findOne);

// Update an employee with id
employeeRouter.put("/employee/:id", employeeController.update);

// Delete an employee with id
employeeRouter.delete("/employee/:id", employeeController.deleteOne);

// Delete all employees
employeeRouter.delete("/employee", employeeController.deleteAll);

module.exports = employeeRouter;
