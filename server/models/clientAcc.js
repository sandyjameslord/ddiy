const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientAccSchema = new Schema({
    ddiyID: String,
    expiry: String,
    accessString: String
});

module.exports = mongoose.model("ClientAcc", ClientAccSchema);