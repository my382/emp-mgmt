const mongoose = require('mongoose');
const { Schema } = mongoose;
const employeeSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        department: {
            type: Schema.Types.ObjectId,
            ref: 'Department',
            required: true
        }
    }
);

module.exports = mongoose.model('Employee', employeeSchema);
