const router = require('express').Router();
const JobUpdate = require("../models/jobUpdate");

router.get("/jobUpdates", async (req, res) => {
    try {
        let jobUpdates = await JobUpdate.find();
        res.json({success: true, jobUpdates: jobUpdates})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

router.post("/jobUpdates", async (req, res) => {
    try {

        let jobUpdate = new JobUpdate();

        jobUpdate.jobID = req.body.jobID;
        jobUpdate.updateDate = req.body.updateDate;
        jobUpdate.updateDescription = req.body.updateDescription;
        jobUpdate.updateNumber = req.body.updateNumber;
        
        console.log("inside jobUpdate post creation")
        await jobUpdate.save();

        res.json({success: true, message: "New jobUpdate successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;