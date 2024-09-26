module.exports = app => {

    const departments = require('../controllers/department.controller.js');

    var departmentRouter = require('express').Router();

    // Create a new department
    departmentRouter.post("/", departments.create);

    // Retrieve all departments
    departmentRouter.get("/", departments.findAll);

    // Retrieve a single department with id
    departmentRouter.get("/:id", departments.findOne);

    // Update an department with id
    departmentRouter.put("/:id", departments.update);

    // Delete an department with id
    departmentRouter.delete("/:id", departments.delete);

    // Delete all departments
    departmentRouter.delete("/", departments.deleteAll);

    //app.use("api/departments", departmentRouter);


};
