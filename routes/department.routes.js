
module.exports = app => {

    const departmentController = require('../controllers/department.controller');

    var departmentRouter = require('express').Router();

    // Create a new department
    departmentRouter.post("/department/create/", departmentController.create);

    // Retrieve all departments
    departmentRouter.get("/department", departmentController.findAll);

    // Retrieve a single department with id
    departmentRouter.get("/department/:id", departmentController.findOne);

    // Update an department with id
    departmentRouter.put("/department/:id", departmentController.update);

    // Delete an department with id
    departmentRouter.delete("/department/:id", departmentController.deleteOne);

    // Delete all departments
    departmentRouter.delete("/department", departmentController.deleteAll);

    //app.use("api/departments", departmentRouter);


};

