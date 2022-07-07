<template>
    <main>
        
         <span class="mediumTitleCenter">{{$route.query.jobType}}</span>
        <br><br>
        <form id='container'>

            <div class='subContainer1'>
                <label id="updateNumberLabel" class='label1'></label>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Date</label>
                <div class='inputContainer'>
                    <input type="date" id="birthday" name="birthday" v-model="updateDate">
                    <span id="checkMark1" class="checkMark">&#10003;</span>
                </div>
            </div>
            
            <div class='subContainer1'>
                <label class='label1'>Description</label>
                <div class='inputContainer'>
                    <input id="password" class="input1" type="text" v-model="updateDescription" @keyup="checkIfValid($event, 'description')">
                    <span id="checkMark2" class="checkMark">&#10003;</span>
                </div>
            </div>
            
            <div ontouchstart="">
                <div class="button" @click="onAddJobUpdate">
                    <nuxt-link to="/profile">Update this job</nuxt-link>
                </div>
            </div>
            
            <br>
        </form>
        
    </main>
</template>

<script>
export default {
    middleware: "auth",
    data() {
        return {
            jobID: "",
            updateDate: "",
            updateDescription: "",
            updateNumber: ""
        }
    },
    async asyncData({ $axios }) {
      try {
        let usersResponse = await $axios.$get("/api/users");
        let clientsResponse = await $axios.$get("/api/clients");
        let jobUpdatesResponse = await $axios.$get("/api/jobUpdates");

        return {
          clients: clientsResponse.clients,
          users: usersResponse.users,
          jobUpdates: jobUpdatesResponse.jobUpdates,
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {
        async onAddJobUpdate() {
            let updateNumber = 1;
            
            if (this.jobUpdates) {
                for (let i = 0; i < this.jobUpdates.length; i++) {
                    if (this.jobUpdates[i].jobID === this.$route.query.jobID) {
                        updateNumber++;
                    }
                }
            }
            
            let data = {
                jobID: this.$route.query.jobID,
                updateDate: this.updateDate,
                updateDescription: this.updateDescription,
                updateNumber: `${updateNumber}`,
                
            };

            let idNumber = `${this.$route.query.jobID}`
            console.log("idNumber:  ", idNumber)
            let result = await this.$axios.$post("/api/jobUpdates", data);
            this.$router.push(`/jobProfile?jobID=${idNumber}`); 
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
        addUpdateNumberLabel() {
            let numberOfUpdatesForClient = 1
            for (let i = 0; i < this.jobUpdates.length; i++) {
                if (this.$route.query.jobID == this.jobUpdates[i].jobID) {
                    numberOfUpdatesForClient++                
                }
            }

            let updateLabel = document.getElementById("updateNumberLabel")
            updateLabel.innerHTML = `Update ${numberOfUpdatesForClient}`           
            

        }
    },
    mounted() {
        this.addUpdateNumberLabel()
    }    
}
</script>

<style scoped>
#birthday {
    height: 50px;
    width: 150px;
}
</style>