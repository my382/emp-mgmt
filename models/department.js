const mongoose = require('mongoose');
const { Schema } = mongoose;

const departmentSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: false,
        }
    }
);

module.exports = mongoose.model('Department', departmentSchema);
