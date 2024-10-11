// const Department = require("../models/department");
const db = require('../models');
const Department = db.departments;

// Create and save a new department

const create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({ message: "Content cannot be empty!" });
        return;
    }

    // Create a department
    const department = new Department({
        name: req.body.name,
        description: req.body.description
    });

    // Save department in the database
    Department
        .save(department)
        .then(data => {
            res.redirect("/departmment");
            //res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "An error occurred while creating a department."
            });
        });
};


// Retrieve all departments from the database

const findAll = async (req, res) => {
    const departments = await Department.find();
    res.render("departments", { departments });
};

// Find a single employee with an id
const findOne = (req, res) => {
    const id = Number(req.params.id);

    Department.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found Department with id " + id });
            else {
                const department = {
                    _id: data._id,
                    name: data.name,
                    description: data.description
                }
                res.render('department', { department: department });

            }
        })
        .catch(err => {
            res.status(500).
                send({ message: "Error retrieving department with id = " + id });
        });
};

// Update a department with id in the request
const update = (req, res) => {
    if (!res.body) {
        return res.status(400).send({
            message: "Data to update department can not be empty!"
        });
    }
    const id = Number(req.params.id);

    Employee.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update department with id=${id}. Maybe department was not found!`
                });
            } else {
                res.redirect("/department");
                //res.send({ message: "A department was updated successfully." });
            }

        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating a department with id=" + id
            });
        });
};

// Delete a department with the specified id in the request
const deleteOne = (req, res) => {
    const id = Number(req.params.id);

    Employee.findByIdAndRemove(id, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete a department with id=${id}. Maybe department was not found!`
                });
            } else {
                res.redirect("/department");
                // res.send({
                //     message: "A department was deleted successfully!"
                // });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete department with id=" + id
            });
        });
};

// Delete all Departments from the database.
const deleteAll = (req, res) => {
    Employee.deleteMany()
        .then(data => {
            res.send({
                message: `${data.deletedCount} Departments were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all departments."
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


