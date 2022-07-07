const router = require('express').Router();
const ClientAcc = require("../models/clientAcc");

// const upload = require("../middleware/upload-photo");

// // get all clientAccs
router.get("/clientAccs", async (req, res) => {
    try {
        let clientAccs = await ClientAcc.find();
        res.json({success: true, clientAccs: clientAccs})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single clientAcc
// router.post("/clients", upload.single("photo"), async (req, res) => {
router.post("/clientAccs", async (req, res) => {
    try {

        let clientAcc = new ClientAcc();
        clientAcc.ddiyID = req.body.ddiyID;
        clientAcc.expiry = req.body.expiry;
        clientAcc.accessString = req.body.accessString;
        
        await clientAcc.save();

        res.json({success: true, message: "New clientAcc successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});



module.exports = router;