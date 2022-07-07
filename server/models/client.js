const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    clientName: String,
    companyInternalID: String,
    ddiyID: String,
    businessName: String,
    clientSignupDate: String,
    clientLandline: String,
    clientCellPhone: String,
    clientStreetAddress: String,
    clientEmailAddress: String,
    clientSiteString: String,
});

module.exports = mongoose.model("Client", ClientSchema);