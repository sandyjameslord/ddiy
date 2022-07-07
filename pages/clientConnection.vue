<template>
    <main>
        <br><br>
        <div id="profileInformationContainer" class="informationContainer">
            <div id="clientName">Client Name: </div>
            <div id="companyName">Company Name: </div>
            <div id="jobType">Job Type: </div>
            <div id="jobDescription">Job Description: </div>
            <!-- <div id="updateDate">Update Date: </div>
            <div id="updateText">Update Text:</div> -->
        </div>
        <div id="updatesContainer" ></div>

    </main>
</template>

<script>
export default {
    components: {

    },
    // middleware: "auth",
    data() {
        return {
            currentMatches: []
        }
    },
    async asyncData({ $axios }) {
      try {
        let clientsResponse = await $axios.$get("/api/clients");
        let jobsResponse = await $axios.$get("/api/jobs");
        let jobUpdatesResponse = await $axios.$get("/api/jobUpdates");
        let clientAccsResponse = await $axios.$get("/api/clientAccs");
        return {
          clients: clientsResponse.clients,
          jobs: jobsResponse.jobs,
          jobUpdates: jobUpdatesResponse.jobUpdates,
          clientAccs: clientAccsResponse.clientAccs
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {
        createUpdates() {
            let updatesContainer = document.getElementById("updatesContainer");
            
            // let numberOfUpdates = 0
            // for (let i = 0; i < this.jobUpdates.length; i++) {
            //     if (this.$route.query.jobID == this.jobUpdates[i].jobID) {
            //         numberOfUpdates++;
            //     }
            // }

            for (let i = 0; i < this.jobUpdates.length; i++) {
                if (this.$route.query.jobID == this.jobUpdates[i].jobID) {
                    
                    let currentUpdate = this.jobUpdates[i]

                    let updateContainer = document.createElement("div");
                    updateContainer.classList = "updateInformationContainer informationContainer"
                    updateContainer.id = `Update${currentUpdate.updateNumber}`

                    let updateLine1 = document.createElement("div");
                    let updateLine2 = document.createElement("div");
                    let updateLine3 = document.createElement("div");

                    let updateNumber = currentUpdate.updateNumber

                    updateLine1.innerHTML = `Update: ${updateNumber}`
                    updateLine2.innerHTML = `Date: ${currentUpdate.updateDate}`
                    updateLine3.innerHTML = `Description: ${currentUpdate.updateDescription}`

                    updateContainer.appendChild(updateLine1)
                    updateContainer.appendChild(updateLine2)
                    updateContainer.appendChild(updateLine3)
                    
                    updatesContainer.appendChild(updateContainer)
                }
                
            }

            
        },
        displayClientInfo(){
            let clientNameDiv = document.getElementById("clientName")
            let companyNameDiv = document.getElementById("companyName")
            let jobTypeDiv = document.getElementById("jobType")
            let jobDescriptionDiv = document.getElementById("jobDescription")
            let updateDateDiv = document.getElementById("updateDate")
            let updateTextDiv = document.getElementById("updateText")
            
            let updatesContainer = document.getElementById("updatesContainer");

            for (let i = 0; i < this.clients.length; i++) {
                let client = this.clients[i]
                for (let j = 0; j < this.clientAccs.length; j++) {
                    let clientAcc = this.clientAccs[j]
                    if (client.ddiyID == clientAcc.ddiyID) {
                        clientNameDiv.innerText = "Your name: " + client.clientName
                        companyNameDiv.innerText = "Company name: " + client.businessName
                        for (let k = 0; k < this.jobs.length; k++) {
                            let job = this.jobs[k]
                            if (job.ddiyID == clientAcc.ddiyID) {
                                jobTypeDiv.innerText = "Job type: " + job.jobType
                                jobDescriptionDiv.innerText = "Job type: " + job.jobDescription
                                for (let l = 0; l < this.jobUpdates.length; l++) {
                                    let currentUpdate = this.jobUpdates[i]
                                    // console.log("job update.jobID", jobUpdate.jobID)
                                    // console.log("job._id", job._id)
                                    // if (jobUpdate.jobID == job._id) {
                                        let updateContainer = document.createElement("div");
                                        updateContainer.classList = "updateInformationContainer informationContainer"
                                        updateContainer.id = `Update${currentUpdate.updateNumber}`

                                        let updateLine1 = document.createElement("div");
                                        let updateLine2 = document.createElement("div");
                                        let updateLine3 = document.createElement("div");

                                        let updateNumber = currentUpdate.updateNumber

                                        updateLine1.innerHTML = `Update: ${updateNumber}`
                                        updateLine2.innerHTML = `Date: ${currentUpdate.updateDate}`
                                        updateLine3.innerHTML = `Description: ${currentUpdate.updateDescription}`

                                        updateContainer.appendChild(updateLine1)
                                        updateContainer.appendChild(updateLine2)
                                        updateContainer.appendChild(updateLine3)
                    
                                        updatesContainer.appendChild(updateContainer)
                                    // }
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    mounted() {
        this.displayClientInfo()
        this.createUpdates()
    }

}
</script>

<style scoped>

</style>