<template>
    <main>
        <br>
         <span class='smallTitleCenter'>Add a Job to {{$route.query.clientID}}'s Profile</span>
        <br><br>
        <form class='container'>
            <div class='subContainer1'>
                <label class='label1'>Job Type</label>
                <div class='inputContainer'>
                    <input id="jobType" class="input1" type="text" v-model="jobType" @keyup="checkIfValid($event, 'jobType')">
                    <span id="checkMark1" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Job Description</label>
                <div class='inputContainer'>
                    <input id="jobDescription" class="input1" type="text" v-model="jobDescription" @keyup="checkIfValid($event, 'jobDescription')">
                    <span id="checkMark2" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Job Notes</label>
                <div class='inputContainer'>
                    <input id="jobNotes" class="input1" type="text" v-model="jobNotes" @keyup="checkIfValid($event, 'jobNotes')">
                    <span id="checkMark3" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Job Estimate</label>
                <div class='inputContainer'>
                    <input id="jobEstimate" class="input1" type="text" v-model="jobEstimate" @keyup="checkIfValid($event, 'jobEstimate')">
                    <span id="checkMark4" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Job Beginning Date</label>
                <div class='inputContainer'>
                    <input id="jobBeginningDate" class="input1" type="text" v-model="jobBeginningDate" @keyup="checkIfValid($event, 'jobBeginningDate')">
                    <span id="checkMark5" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Job End Date</label>
                <div class='inputContainer'>
                    <input id="jobEndDate" class="input1" type="text" v-model="jobEndDate" @keyup="checkIfValid($event, 'jobEndDate')">
                    <span id="checkMark6" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Is the Job Paid in Full?</label>
                <div class='inputContainer'>
                    <input id="jobPaidInFull" class="input1" type="text" v-model="jobPaidInFull" @keyup="checkIfValid($event, 'jobPaidInFull')">
                    <span id="checkMark7" class="checkMark">&#10003;</span>
                </div>
            </div>

            <span @click="onAddJob">
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="/profile">
                            Add this job
                        </nuxt-link>
                    </div>
                </div>
            </span>
            <br>
        </form>
        
    </main>
</template>

<script>
export default {
    middleware: "auth",
    data() {
        return {
            jobType: "",
            ddiyID: "",
            jobDescription: "",
            jobNotes: "",
            jobEstimate: "",
            jobBeginningDate: "",
            jobEndDate: "",
            jobPaidInFull: "",
            jobNumberForThisClient: ""
            
            
        }
    },
    async asyncData({ $axios }) {
      try {
        let usersResponse = await $axios.$get("/api/users");
        let clientsResponse = await $axios.$get("/api/clients");
        let jobsResponse = await $axios.$get("/api/jobs");

        return {
          clients: clientsResponse.clients,
          users: usersResponse.users,
          jobs: jobsResponse.jobs,
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {

            checkIfValid($event, inputType) {
                if (inputType === "jobType"){
                    let checkMark = document.getElementById("checkMark1")
                    this.jobType.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
                else if (inputType === "jobDescription"){
                    let checkMark = document.getElementById("checkMark2")
                    this.jobDescription.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
                else if (inputType === "jobNotes"){
                    let checkMark = document.getElementById("checkMark3")
                    this.jobNotes.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
                else if (inputType === "jobEstimate"){
                    let checkMark = document.getElementById("checkMark4")
                    this.jobEstimate.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
                else if (inputType === "jobBeginningDate"){
                    let checkMark = document.getElementById("checkMark5")
                    this.jobBeginningDate.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
                else if (inputType === "jobEndDate"){
                    let checkMark = document.getElementById("checkMark6")
                    this.jobEndDate.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
                else if (inputType === "jobPaidInFull"){
                    let checkMark = document.getElementById("checkMark7")
                    this.jobPaidInFull.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
            },

        async onAddJob() {
            let jobNumberForThisClientLocal = 1;
            let ddiyID = ""
            for (let i = 0; i < this.jobs.length; i++ ) {
                if (this.jobs[i].clientName == this.$route.query.clientID) {
                    jobNumberForThisClientLocal++;
                    for (let j = 0; j < this.clients.length; j++) {
                        if (this.jobs[i].clientName == this.clients[j].clientName) {
                            ddiyID = this.clients[j].ddiyID
                            this.ddiyID = ddiyID
                        }
                    }
                }
            }

            
            

            let data = {
                clientName: this.$route.query.clientID,
                ddiyID: this.ddiyID,
                jobType: this.jobType,
                jobDescription: this.jobDescription,
                jobNotes: this.jobNotes,
                jobEstimate: this.jobEstimate,
                jobBeginningDate: this.jobBeginningDate,
                jobEndDate: this.jobEndDate,
                jobPaidInFull: this.jobPaidInFull,
                jobNumberForThisClient: jobNumberForThisClientLocal
                
            };
console.log("data::",data)
            let result = await this.$axios.$post("/api/jobs", data);
            // this.$router.push("/profile"); 
        }
    }    
}
</script>

<style scoped>

#localTitle {
    font-size: 1.4em;
    padding-top: 5px;
    margin-left: 5%;
    width: fit-content;
}

</style>