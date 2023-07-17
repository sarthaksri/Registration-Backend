const mongoose = require('mongoose');
const orientationRegistration = require('../Schema/orientationRegistration');
const orientationRegistrationDb = require('../Database/orientationRegistrationDb');
const asyncHandler = require("express-async-handler");

orientationRegistrationDb.connectToMongo();

exports.orientationData_get = asyncHandler(async (req, res) => {
    await orientationRegistration.create({
        name: req.body.name,
        email: req.body.email,
        phoneNo: req.body.phoneNo,
        branch: req.body.branch,
}) });