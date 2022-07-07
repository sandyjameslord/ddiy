const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    clientName: String,
    ddiyID: String, 
    jobType: String,
    jobDescription: String,
    jobNotes: String,
    jobEstimate: String,
    jobBeginningDate: String,
    jobEndDate: String,
    jobPaidInFull: String,
    jobNumberForThisClient: String
});

module.exports = mongoose.model("Job", JobSchema);