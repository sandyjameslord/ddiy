<template>
    <main id="body">
        <br>
        <div id="number">0</div>
        <div v-for="(job) in jobs" :key="job._id">
            <div v-if="$route.query.jobID == job._id"> 
                <div id="profileInformationContainer" class="informationContainer">
                    <div id="clientName">Client Name: </div>
                </div>
<!-- 
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link :to="{ path: 'addJobUpdate', query: { jobID: `${job._id}`, jobType: `${job.jobType}` }}">Make an update for Job {{job.jobNumberForThisClient}}.
                        </nuxt-link>
                    </div>
                </div> -->
                <div>Ready? Click below to send.</div>
                <div ontouchstart="">
                    <div class="button" @click="createClientAccAndSendClientAnEmailUpdate()">
                        <nuxt-link :to="{ path: 'jobProfile', query: { jobID: `${job._id}`, jobType: `${job.jobType}` }}">Send email update for Job {{job.jobNumberForThisClient}}.
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
            ddiyID: "",
            expiry: "",
            accessString: "",
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
        randomStringGenerator() {
            let randomClientAccessString = ""

            let ranges = {
                0: Array.from({length: 10}, (x, i) => i).map(i => i+48),
                1: Array.from({length: 26}, (x, i) => i).map(i => i+65),
                2: Array.from({length: 26}, (x, i) => i).map(i => i+97),
            }

            while (randomClientAccessString.length < 40) {
                let randomRangeChoice = Math.floor((Math.random() * 3))
                let randomindex = Math.floor(Math.random() * ranges[randomRangeChoice].length)
                let randomChoice = String.fromCharCode(ranges[randomRangeChoice][randomindex])
                randomClientAccessString += randomChoice
            }
            return randomClientAccessString
        },
        determineClient(){
            for (let i = 0; i < this.clients.length; i++) {
                let client = this.clients[i]

                for (let j = 0; j< this.jobs.length; j++) {
                    let job = this.jobs[i]
                    if (job.ddiyID = client.ddiyID) {
                        return client
                    }
                }
            }
        },

        async createClientAccAndSendClientAnEmailUpdate() {

            let client = this.determineClient()
            let ddiyID = client.ddiyID
            let clientEmail = client.clientEmailAddress
            let clientName = client.clientName
            let businessName = client.businessName

            let accessString = this.randomStringGenerator()

            let data = {

                ddiyID: ddiyID,
                expiry: `${Date.now() + 604800}`,
                accessString: accessString,
                
            };

            let result = await this.$axios.$post("/api/clientAccs", data);
            let mailString = `mailto:${clientEmail}?subject=AccountData&body=
Hello ${clientName},%0A
You have been invited by ${businessName} to review the results of recent work done for you.%0A Please click on the link below to view all updates.%0A
http://localhost:8001/clientConnection?accessString=${accessString}%0A

We hope you have a great day!%0A
Best,%0A
Don't Do It Yourself Team
`
            window.open(mailString);
        },

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