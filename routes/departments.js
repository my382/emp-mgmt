
module.exports = app => {

    const departmentController = require('../controllers/department.controller');

    const departmentRouter = require('express').Router();

    // Create a new department
    departmentRouter.post("/department/create/", departmentController.create);

    // Retrieve all departments
    departmentRouter.get("/", departmentController.findAll);

    // Retrieve a single department with id
    departmentRouter.get("/department/:id", departmentController.findOne);

    // Update an department with id
    departmentRouter.put("/department/update/:id", departmentController.update);

    // Delete an department with id
    departmentRouter.delete("/department/delete/:id", departmentController.deleteOne);

    // Delete all departments
    departmentRouter.delete("/department", departmentController.deleteAll);

    //app.use("api/departments", departmentRouter);


};

