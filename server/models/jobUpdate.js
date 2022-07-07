const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobUpdateSchema = new Schema({
    jobID: String,
    updateDate: String,
    updateDescription: String,
    updateNumber: String
});

module.exports = mongoose.model("JobUpdate", JobUpdateSchema);