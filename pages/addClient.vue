<template>
    <main>
        <br><br>
        <div>Add a New Client</div>
        <br>
        <form class='container'>
            <div class='subContainer1'>
                <label class='label1'>Client Name (required)</label>
                <div class='inputContainer'>
                    <input id="clientName" class="input1" type="text" v-model="clientName" @keyup="checkIfValid($event, 'clientName'); adjustLink();">
                    <span id="checkMark1" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Client Email (required)</label>
                <div class='inputContainer'>
                    <input id="clientEmailAddress" class="input1" type="email" v-model="clientEmailAddress" @keyup="checkIfValid($event, 'clientEmailAddress'); adjustLink();">
                    <span id="checkMark7" class="checkMark">&#10003;</span>
                </div>
            </div>
            <div class='subContainer1'>
                <label class='label1'>Company Internal ID (optional)</label>
                <div class='inputContainer'>
                    <input id="companyInternalID" class="input1" type="text" v-model="companyInternalID" @keyup="checkIfValid($event, 'companyInternalID'); adjustLink();">
                    <span id="checkMark2" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Approximate date started working for client</label>
                <div class='inputContainer'>
                    <input id="clientSignupDate" class="input1" type="date" v-model="clientSignupDate" @keyup="checkIfValid($event, 'clientSignupDate'); adjustLink();">
                    <span id="checkMark3" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>

                <label class='label1'>Client Street Address (Optional)</label>
                <div class='inputContainer'>
                    <input id="clientStreetAddress" class="input1" type="text" v-model="clientStreetAddress" @keyup="checkIfValid($event, 'clientStreetAddress'); adjustLink();">
                    <span id="checkMark4" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Client Land Line (Optional)</label>
                <div class='inputContainer'>
                    <input id="clientLandline" class="input1" type="text" v-model="clientLandline" @keyup="checkIfValid($event, 'clientLandline'); adjustLink();">
                    <span id="checkMark5" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Client Cell Phone (Optional)</label>
                <div class='inputContainer'>
                    <input id="clientCellPhone" class="input1" type="text" v-model="clientCellPhone" @keyup="checkIfValid($event, 'clientCellPhone'); adjustLink();">
                    <span id="checkMark6" class="checkMark">&#10003;</span>
                </div>
            </div>

            <br><br><br>
            <span @click="onAddClient" >
                <div ontouchstart="">
                    <div class="button">
                        <a id="link" href="/profile">
                            Add your client
                        </a>
                    </div>
                </div>
            </span>
        </form>
    </main>
</template>

<script>
export default {
    middleware: "auth",
    data() {
        return {
            clientName: "",
            companyInternalID: "",
            ddiyID: "",
            businessName: "",
            clientSignupDate: "",
            clientStreetAddress: "",
            clientCellPhone: "",
            clientLandline: "",
            clientEmailAddress: ""
        }
    },
    async asyncData({ $axios }) {
      try {
        let usersResponse = await $axios.$get("/api/users");
        let clientsResponse = await $axios.$get("/api/clients");

        return {
          clients: clientsResponse.clients,
          users: usersResponse.users,
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {

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

        adjustLink() {
            let link = document.getElementById("link")
            let data = {
                clientName: this.clientName || "not entered",
                clientEmailAddress: `${this.clientEmailAddress}` || "not entered",
            };

            console.log("inside adjustLink(), current data Object: ", data)

            let keys = Object.keys(data)
            let values = Object.values(data)

            let linkIsReady = true

            for (let i = 0; i < values.length; i++) {
                if (values[i] == "not entered") {
                    let key = keys[i]
                    if (key == "clientName") {
                        // Object.keys(link)["to"] = "#"
                        linkIsReady = false
                    }
                    if (key == "clientEmailAddress") {
                        // Object.keys(link)["to"] = "#"
                        linkIsReady = false
                    }
                }
            }

            // console.log("link: ", link)
            if (linkIsReady) {
                link["href"] = "/profile"
                console.log("link is ready, so its on profile: ", link)
            } else {

                link["href"] = "#"
                console.log("link isn't ready, so its on #: ", link)
            }
        },

        

        async onAddClient() {
            
            let contractorNumberOfClients = 1
            let numTotalClients = this.clients.length
            let numTotalUsers = this.users.length
            for (let i = 0; i < numTotalClients; i++) {
                for (let j = 0; j < numTotalUsers; j++) {
                    if (this.clients[i].businessName === this.users[j].businessName) {
                        contractorNumberOfClients++;
                    }
                }
            }

            // if (this.clientSignupDate == "new") {this.clientSignupDate = Date.now()}

            let clientSiteStringRandom = ""

            let firstChoice = Math.random(0, 3)
            console.log(firstChoice)


            let data = {
                clientName: this.clientName || "not entered",
                companyInternalID: this.companyInternalID || "not entered",
                ddiyID: `${this.$auth.$state.user.businessName}__${this.clientName}__${contractorNumberOfClients}` || "not entered",
                businessName: `${this.$auth.$state.user.businessName}` || "not entered",
                clientSignupDate: `${this.clientSignupDate}` || "not entered",
                clientLandline: `${this.clientLandline}` || "not entered",
                clientCellPhone: `${this.clientCellPhone}` || "not entered",
                clientStreetAddress: `${this.clientStreetAddress}` || "not entered",
                clientEmailAddress: `${this.clientEmailAddress}` || "not entered",
                clientSiteString: `${clientSiteStringRandom}`
            };

            let keys = Object.keys(data)
            let values = Object.values(data)

            for (let i = 0; i < values.length; i++) {
                if (values[i] == "not entered") {
                    let key = keys[i]
                    if (key == "clientSignupDate") {
                        let date = new Date
                        let year = date.getFullYear()
                        console.log("year: ",year)
                        console.log(Object.values(data)[i])
                        Object.values(data)[i] = `${year}`
                        console.log(Object.values(data)[i])
                        data["clientSignupDate"] = `${year}`
                        console.log(Object.values(data)[i])
                    }
                    if (key == "clientName") {
                        confirm("You must include at least: \nClient name\nClient email")
                        return
                    }
                    if (key == "clientEmailAddress") {
                        confirm("You must include at least: \nClient name\nClient email")
                        return
                    }
                    
                }
                
            }
            let dataIsReady = true
            for (let i = 0; i < values.length; i++) {
                if (values[i] == "not entered") {
                    // if (Object.values(data)[i] == "not entered") {
                    let key = keys[i]
                    if (key == "clientName") {
                        dataIsReady = false
                    }
                    if (key == "clientEmailAddress") {
                        dataIsReady = false
                    }
                }
                
            }
            if (dataIsReady) {
                let result = await this.$axios.$post("/api/clients", data);
            }
            
            
        }
    },
    mounted() {
        this.adjustLink()
    },    
}
</script>

<style scoped>

</style>