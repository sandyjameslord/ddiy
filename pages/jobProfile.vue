<template>
    <main id="body">
        <br>
        <div id="number">0</div>
        <div v-for="(job) in jobs" :key="job._id">
            <div v-if="$route.query.jobID == job._id"> 
                <div id="profileInformationContainer" class="informationContainer">
                    <div class="informationMember">Job {{job.jobNumberForThisClient}}: {{job.clientName}}'s {{job.jobType}}</div><br>
                    <div class="informationMember">Description: {{job.jobDescription}}</div><br>
                    <div class="informationMember">Notes: {{job.jobNotes}}</div><br>
                    <div class="informationMember">Estimated project timeline: {{job.jobBeginningDate}} - {{job.jobEndDate}}</div><br>
                    <div class="informationMember">Estimate: {{job.jobEstimate}}</div><br>
                    <div id="paidInFull" class="informationMember">Paid in Full: {{job.jobPaidInFull}}. <span @click="updateToPaidInFull">MARK as paid in full</span></div><br>
                </div>

                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link :to="{ path: 'addJobUpdate', query: { jobID: `${job._id}`, jobType: `${job.jobType}` }}">Make an update for Job {{job.jobNumberForThisClient}}.
                        </nuxt-link>
                    </div>
                </div>

                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link :to="{ path: 'giveClientAnUpdate', query: { jobID: `${job._id}`, jobType: `${job.jobType}` }}">Send client an update for Job {{job.jobNumberForThisClient}}.
                        </nuxt-link>
                    </div>
                </div>

                <div id="updateSelectorContainer"> </div>

                <div id="updatesContainer" ></div>
            
            </div>

        </div>
        <br><br><br><br><br>
    </main>
</template>

<script>
// import AddAppointmentComp from "~/components/AddAppointmentComp";
export default {
    components: {

    },
    middleware: "auth",
    data() {
        return {

        }
    },
    async asyncData({ $axios }) {
      try {
        let clientsResponse = await $axios.$get("/api/clients");
        let jobsResponse = await $axios.$get("/api/jobs");
        let jobUpdatesResponse = await $axios.$get("/api/jobUpdates");
        return {
          clients: clientsResponse.clients,
          jobs: jobsResponse.jobs,
          jobUpdates: jobUpdatesResponse.jobUpdates
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {
        async updateToPaidInFull() {
            let data = {
                jobPaidInFull: "Yes",
            };

            let result = await this.$axios.$put(`/api/jobs/${this.$route.query.jobID}`, data);

            let paidInFull =  document.getElementById("paidInFull");
            paidInFull.innerHTML = "Paid in Full: Yes"

        },
        checkIfValid($event, inputType) {
            if (inputType === "clientName"){
                let checkMark = document.getElementById("checkMark1")
                this.clientName.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "companyInternalID"){
                let checkMark = document.getElementById("checkMark2")
                this.companyInternalID.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "clientSignupDate"){
                let checkMark = document.getElementById("checkMark3")
                this.clientSignupDate.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "clientStreetAddress"){
                let checkMark = document.getElementById("checkMark4")
                this.clientStreetAddress.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "clientLandline"){
                let checkMark = document.getElementById("checkMark5")
                this.clientLandline.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "clientCellPhone"){
                let checkMark = document.getElementById("checkMark6")
                this.clientCellPhone.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "clientEmailAddress"){
                let checkMark = document.getElementById("checkMark7")
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                emailPattern.test(this.clientEmailAddress) === true ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }

        },
        moveUpdateSelectorBoxUp() {
            let container = document.getElementById("updateSelectorContainer");
            let number = document.getElementById("number")
            
            let height = window.scrollY

            if (height === 0) {
                container.style.position = "initial"
                number.innerHTML = "0"
            } 

        },
        moveUpdateSelectorBoxDown(){

            let container = document.getElementById("updateSelectorContainer");
            let number = document.getElementById("number")

            if (number.innerHTML == "0") {
                container.style.position = "absolute"
                let height = document.documentElement.scrollHeight
                
                container.style.top = `${height - 250}px`
                number.innerHTML = "1"
            } 

        },
        createUpdates() {
            let updatesContainer = document.getElementById("updatesContainer");
            
            let numberOfUpdates = 0
            for (let i = 0; i < this.jobUpdates.length; i++) {
                if (this.$route.query.jobID == this.jobUpdates[i].jobID) {
                    numberOfUpdates++;
                }
            }

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

        createUpdateSelectorButtons() {
            let container = document.getElementById("updateSelectorContainer");
            container.style.backgroundColor = "white"
            container.style.width = '100%'
            container.style.height = '70px'

            let numberOfUpdates = 0
            for (let i = 0; i < this.jobUpdates.length; i++) {
                if (this.$route.query.jobID == this.jobUpdates[i].jobID) {
                    numberOfUpdates++;
                }
            }

            for (let i = 0; i < this.jobUpdates.length; i++) {
                if (this.$route.query.jobID == this.jobUpdates[i].jobID) {
                    
                    let currentUpdate = this.jobUpdates[i]

                    let outerCont = document.createElement("div");
                    outerCont.ontouchstart = ""
                    
                    let buttonUpdate = document.createElement("div")
                    
                    let width = '100%'
                    if (numberOfUpdates > 0) {
                        let wdth = 100 / numberOfUpdates
                        width = `${wdth}%`
                    }
                    
                    buttonUpdate.style.width = width
                    buttonUpdate.className = 'button'
                    buttonUpdate.onclick = "goToUpdate"

                    let lnk = document.createElement("a")

                    lnk.addEventListener("click", this.moveUpdateSelectorBoxDown)

                    lnk.setAttribute('href',`#Update${currentUpdate.updateNumber}`);

                    let updateNumber = currentUpdate.updateNumber

                    lnk.innerHTML = `${updateNumber}`
                    lnk.style.whiteSpace = 'pre';

                    buttonUpdate.appendChild(lnk)
                    outerCont.appendChild(buttonUpdate)
                    container.appendChild(outerCont)
                }
                
            }

        },
    },
    mounted() {
        window.addEventListener("scroll", this.moveUpdateSelectorBoxUp)
        this.createUpdates()
        this.createUpdateSelectorButtons()
    }
}
</script>

<style scoped>
#profileInformationContainer:first-child {
    padding-top: 1em;
} 

#profileInformationContainer {
    height: 12em;
}

.updateInformationContainer {
    height: 150px;
}

#updateSelectorContainer {
    display: flex;
    margin-top: 10px;
}

</style>