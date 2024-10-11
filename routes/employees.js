module.exports = app => {

    const employeeController = require('../controllers/employee.controller');

    const employeeRouter = require('express').Router();

    // Create a new employee
    employeeRouter.post("/employee/create/", employeeController.create);

    // Retrieve all employees
    employeeRouter.get("/", employeeController.findAll);

    // Retrieve a single employee with id
    employeeRouter.get("/employee/edit/:id", employeeController.findOne);

    // Update an employee with id
    employeeRouter.put("/employee/update/:id", employeeController.update);

    // Delete an employee with id
    employeeRouter.delete("/employee/delete/:id", employeeController.deleteOne);

    // Delete all employees
    employeeRouter.delete("/employee", employeeController.deleteAll);

    //app.use("api/employees", employeeRouter);

};

