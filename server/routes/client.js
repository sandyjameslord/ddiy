const router = require('express').Router();
const Client = require("../models/client");

// const upload = require("../middleware/upload-photo");

// // get all clients
router.get("/clients", async (req, res) => {
    try {
        let clients = await Client.find();
        res.json({success: true, clients: clients})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single client
// router.post("/clients", upload.single("photo"), async (req, res) => {
router.post("/clients", async (req, res) => {
    try {

        let client = new Client();

        client.clientName = req.body.clientName;
        client.companyInternalID = req.body.companyInternalID;
        client.ddiyID = req.body.ddiyID;
        client.businessName = req.body.businessName;
        client.clientSignupDate = req.body.clientSignupDate;
        client.clientLandline = req.body.clientLandline;
        client.clientCellPhone = req.body.clientCellPhone;
        client.clientStreetAddress = req.body.clientStreetAddress;
        client.clientEmailAddress = req.body.clientEmailAddress;
        client.clientSiteString = req.body.clientSiteString;

        await client.save();

        res.json({success: true, message: "New client successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});



module.exports = router;