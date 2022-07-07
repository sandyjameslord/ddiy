<template>
    <main>
        <br>
        <div v-for="(client) in clients" :key="client._id">
            <div v-if="$route.query.clientID == client.ddiyID"> 
                <div id="profileInformationContainer" class="informationContainer">
                    <div id="clientNameTitle" class="informationMember">Client name:<span id="nameSpan"></span><span id="underlineSpan"></span></div>
                    <div id="clientSignupDate" class="informationMember"></div>
                    <div id="clientLandline" class="informationMember"></div>
                    <div id="clientCellPhone" class="informationMember"></div>
                    <div id="clientStreetAddress" class="informationMember"></div>
                    <div id="clientEmailAddress" class="informationMember"></div>
                </div>
                <br>
                
                
                <div v-for="(job) in jobs" :key="job._id">
                    <div v-if="job.clientName === client.clientName">
                        <br>
                        <div id="jobInfo">
                            <nuxt-link :to="{ path: 'jobProfile', query: { jobID: `${job._id}` }}">
                                <div class="wrapper">
                                    <div class="fill-text">
                                        <div class="fill-wrapper">Job {{job.jobNumberForThisClient}}:{{ job.jobType }}</div>
                                    </div>
                                    <div class="text">Job {{job.jobNumberForThisClient}}:{{ job.jobType }}</div>
                                </div>
                            </nuxt-link>
                        </div>
                        
                    </div>
                    <br>
                </div>

                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link :to="{ path: 'addJob', query: { clientID: `${client.clientName}` }}">Add a job to {{ client.clientName }}'s profile.
                        </nuxt-link>
                    </div>
                </div>


            </div>
                
        </div>
        <br>
    </main>
</template>

<script>
export default {
    components: {

    },
    middleware: "auth",
    data() {
        return {
            clientName: ""
        }
    },
    async asyncData({ $axios }) {
      try {
        let clientsResponse = await $axios.$get("/api/clients");
        let jobsResponse = await $axios.$get("/api/jobs");
        return {
          clients: clientsResponse.clients,
          jobs: jobsResponse.jobs
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {

        computeClientInformation() {
            let clientNameLocal = this.$route.query.clientID.split("__")[1];
            let clientNameTitle = document.getElementById("clientNameTitle");

            
            let nameSpan = document.getElementById("nameSpan");
            console.log("name span info:: ", nameSpan)
            nameSpan.innerHTML = `${clientNameLocal}` || "marmar";


            let underlineSpan = document.getElementById("underlineSpan");
            underlineSpan.style.backgroundColor = "white";
            underlineSpan.style.zIndex = "3000";
            underlineSpan.innerHTML = "                  "
            underlineSpan.style.whiteSpace = "pre";
            underlineSpan.style.fontSize = "0.01em"



            this.clientName = clientNameLocal;

            let clientStreetAddress = document.getElementById("clientStreetAddress");
            let clientCellPhone = document.getElementById("clientCellPhone");
            let clientLandline = document.getElementById("clientLandline");
            let clientEmailAddress = document.getElementById("clientEmailAddress");
            let clientSignupDate = document.getElementById("clientSignupDate");
            
            for (let i = 0; i < this.clients.length; i++) {
                if (this.clients[i].clientName == clientNameLocal) {
                    let client = this.clients[i];
                    clientStreetAddress.innerHTML = `Address: ${client.clientStreetAddress}`
                    clientCellPhone.innerHTML = `Cell: ${client.clientCellPhone}`
                    clientLandline.innerHTML = `Landline: ${client.clientLandline}`
                    clientEmailAddress.innerHTML = `Email: ${client.clientEmailAddress}`
                    clientSignupDate.innerHTML = `Client since: ${client.clientSignupDate}`
                    break;
                }
            }
        }
    },
    mounted() {
        this.computeClientInformation()
    }
}
</script>

<style scoped>
#jobInfo {
    background: linear-gradient(217deg, rgba(255,20,20,0.6), rgba(255,0,0,0) 70.71%),
        linear-gradient(127deg, rgba(255,255,255,.8), rgba(255,255,255,0) 70.71%)
        /* linear-gradient(336deg, rgba(255,20,20,0.6), rgba(255,0,0,0) 70.71%); */
  /* opacity: 0.3; */
  
}

#nameSpan {
    /* text-decoration: underline; */
}


</style>