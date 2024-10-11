// const Employee = require("../models/employee");
// const Department = require("../models/department");
const db = require('../models');
const Employee = db.employees;
const Department = db.departments;


// Create and save a new employee

const create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }

    // Create an employee
    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department
    });


    // Save Employee in the database
    Employee
        .save(employee)
        .then(data => {
            //res.send(data);
            res.redirect("/employee");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating an employee."
            });
        });
};


// Retrieve all employees from the database

const findAll = async (req, res) => {
    alert('Employee Controller findAll called');
    const employees = await Employee.find().populate('department');
    const departments = await Department.find();
    res.render("employees", { employees, departments });
};

// Find a single employee with an id
const findOne = (req, res) => {
    const id = Number(req.params.id);

    Employee.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Not found Employee with id " + id });
            }
            else {
                const employee = {
                    _id: data._id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    department: data.department
                };
                res.render('employee', { employee: employee });
            }
        })
        .catch(err => {
            res.status(500).
                send({ message: "Error retrieving employee with id = " + id });
        });
};

// Update an employee with id in the request
const update = (req, res) => {
    if (!res.body) {
        return res.status(400).send({
            message: "Data to update employee can not be empty!"
        });
    }
    const id = Number(req.params.id);

    Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update employee with id=${id}. Maybe employee was not found!`
                });
            } else {
                res.redirect("/employee");
                //res.send({ message: "An employee was updated successfully." });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating an employee with id=" + id
            });
        });
};

// Delete an employee with the specified id in the request
const deleteOne = (req, res) => {
    const id = Number(req.params.id);

    Employee.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete an employee with id=${id}. Maybe employee was not found!`
                });
            } else {
                res.redirect("/employee");
                // res.send({
                //     message: "An employee was deleted successfully!"
                // });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete employee with id=" + id
            });
        });
};

// Delete all Employees from the database.
const deleteAll = (req, res) => {
    Employee.deleteMany()
        .then(data => {
            res.send({
                message: `${data.deletedCount} Employees were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all employees."
            });
        });
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    deleteOne,
    deleteAll
};




