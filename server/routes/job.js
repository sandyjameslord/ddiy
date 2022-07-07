const router = require('express').Router();
const Job = require("../models/job");

// const upload = require("../middleware/upload-photo");

// // get all clients
router.get("/jobs", async (req, res) => {
    try {
        let jobs = await Job.find();
        res.json({success: true, jobs: jobs})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// post single job
// router.post("/clients", upload.single("photo"), async (req, res) => {
router.post("/jobs", async (req, res) => {
    try {

        let job = new Job();
        // client.clientName = "fake name";
        // client.companyInternalID = "fake internal id";
        // client.ddiyID = "ddiid fake";
        job.clientName = req.body.clientName;
        job.ddiyID = req.body.ddiyID;
        job.jobType = req.body.jobType;
        job.jobDescription = req.body.jobDescription;
        job.jobNotes = req.body.jobNotes;
        job.jobEstimate = req.body.jobEstimate;
        job.jobBeginningDate = req.body.jobBeginningDate;
        job.jobEndDate = req.body.jobEndDate;
        job.jobPaidInFull = req.body.jobPaidInFull;
        job.jobNumberForThisClient = req.body.jobNumberForThisClient;
        
        console.log("inside job post creation")
        await job.save();

        res.json({success: true, message: "New job successfully saved."})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// router.put("/jobs/jobID", async (req, res) => {
router.put("/jobs/:jobID", async (req, res) => {
// router.put("/jobs", async (req, res) => {
    try {

        let job = await Job.findOneAndUpdate(
            { _id: req.params.jobID},
            {
                $set: {
                    jobPaidInFull: req.body.jobPaidInFull,
                    // jobID: req.body.jobID
                }
            },
            {upsert: true}
        );

        res.json({success: true, updatedJob: job})
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});


module.exports = router;