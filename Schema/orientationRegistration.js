const mongoose = require('mongoose');

const orientationRegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNo: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    branch: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('orientationRegistration', orientationRegistrationSchema);