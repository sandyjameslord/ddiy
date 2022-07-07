<template>
    <main id="body">
        <br><br>
        <div id="profileInformationContainer" class="informationContainer">
                           
            <span class='informationMember informationMember1' id='userName'>Name: {{ $auth.$state.user.firstName + " " + $auth.$state.user.lastName }}</span>
            <span class='informationMember informationMember2' id='userEmail'>Email / Login: {{ $auth.$state.user.email }}</span>
            <span class='informationMember informationMember3' id='userEmail'>EID: {{ $auth.$state.user.businessEID }}</span>
            <span class='informationMember informationMember4' id='userAddress'>Address: {{ $auth.$state.user.streetAddress + ", " + $auth.$state.user.cityAddress + ", MA " + $auth.$state.user.zipCode}}</span>
            <span class='informationMember informationMember5' id='userCellNumber'>Cell #: {{ $auth.$state.user.cellNumber }}</span>
            <span class='informationMember informationMember6' id='userlandLine'>Land line: {{ $auth.$state.user.landLine }}</span>
        </div>

        <div v-if="$auth.$state.user.userType == 'contractor'">
            <div id='clientsTitle' class="smallTitleCenter">My Clients</div>    
            <br>
            <div id="interactionContainer">
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="/addClient">
                            Add a new client
                        </nuxt-link>
                    </div>
                </div>

                <input type="text" name="" id="search" placeholder="Search for a client" @input="performSearch">
            </div>
            
            <br>

            <div id="clientsNamesContainer">

            </div>
            
        <br>
        </div>
    </main>
</template>

<script>
export default {
    components: {

    },
    middleware: "auth",
    data() {
        return {
            currentMatches: []
        }
    },
    async asyncData({ $axios }) {
      try {
        let clientsResponse = await $axios.$get("/api/clients");

        return {
          clients: clientsResponse.clients
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {
        performSearch() {
            let searchTerm = document.getElementById("search").value
            this.performLogicAndScreenReset()
            this.createListOfClients(searchTerm)
            this.addClientsToScreen(searchTerm)
        },

        performLogicAndScreenReset(){
            this.currentMatches = []
            while (clientsNamesContainer.childElementCount > 0) {
                let currentNode = clientsNamesContainer.firstElementChild
                currentNode.remove()
            }
        },


        createListOfClients(searchTerm) {
            if (searchTerm === undefined) {searchTerm = ""}

            for (let i = 0; i < this.clients.length; i++) {
                let currentClient = this.clients[i]
                if (this.$auth.$state.user.businessName == currentClient.businessName) {
                    if (currentClient.clientName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        this.currentMatches.push(currentClient)
                    }
                }
            }

            for (let i = 0; i < this.currentMatches.length; i++) {
                let currentClient = this.currentMatches[i]
                let clientName = currentClient.clientName
                if (clientName.toLowerCase().startsWith(searchTerm.toLowerCase())) {
                    let index = this.currentMatches.indexOf(i) 
                    let newFirstItem = this.currentMatches.splice(index, 1)
                    this.currentMatches.unshift(newFirstItem)
                }
            }
        },
        addClientsToScreen(searchTerm){ 
            if (searchTerm === undefined) {searchTerm = ""}

            for (let i = 0; i < this.currentMatches.length; i++) {
                let namePart1 = document.createElement("span")
                let namePart2 = document.createElement("span")
                let namePart3 = document.createElement("span")
                
                let currentClient = this.currentMatches[i]
                let clientName = currentClient.clientName || currentClient[0].clientName
                if (searchTerm != undefined || searchTerm != "") {
                    if (clientName.toLowerCase().includes(searchTerm.toLowerCase())) {
                        if (clientName.toLowerCase().startsWith(searchTerm.toLowerCase())) {           
                            let firstText = clientName.slice(0, searchTerm.length)
                            let secondText = clientName.slice(searchTerm.length, clientName.length)

                            namePart1.innerHTML = `${firstText}`
                            namePart1.style.textDecoration = "underline"
                            namePart2.innerHTML = `${secondText}`
                        }
                        else if (clientName.toLowerCase().endsWith(searchTerm.toLowerCase())){
                            let firstText = clientName.slice(0, (clientName.length - searchTerm.length))
                            let secondText = clientName.slice(clientName.length - searchTerm.length, clientName.length)
                            let thirdText = ""

                            namePart1.innerHTML = `${firstText}`
                            namePart2.innerHTML = `${secondText}`
                            namePart2.style.textDecoration = "underline"
                            namePart3.innerHTML = `${thirdText}`
                        }
                        else {
                            let firstIndex = clientName.toLowerCase().indexOf(searchTerm.toLowerCase())
                            let firstText = clientName.substring(0, firstIndex)
                            let secondText = searchTerm
                            let thirdText = clientName.substring(clientName.toLowerCase().indexOf(searchTerm.toLowerCase()) + searchTerm.length, clientName.length)

                            namePart1.innerHTML = `${firstText}`
                            namePart2.innerHTML = `${secondText}`
                            namePart2.style.textDecoration = "underline"
                            namePart3.innerHTML = `${thirdText}`
                        }
                    }
                }
                let ddiyID = currentClient.ddiyID || currentClient[0].ddiyID

                let link = document.createElement("a")
                link.href = `/clientProfile?clientID=${ddiyID}`

                let firstLevel = document.createElement("div");
                firstLevel.classList = "wrapper mediumClientTitleCenter"

                let secondLevel = document.createElement("div")
                secondLevel.classList = "fill-text"

                let thirdLevel = document.createElement("div")
                thirdLevel.classList = "fill-wrapper"

                thirdLevel.append(namePart1)
                thirdLevel.append(namePart2)
                thirdLevel.append(namePart3)

                let secondLevel2 = document.createElement("div")
                secondLevel2.classList = "text"

                secondLevel2.append(namePart1)
                secondLevel2.append(namePart2)
                secondLevel2.append(namePart3)

                let sinceTime = currentClient.clientSignupDate || currentClient[0].clientSignupDate

                let since = document.createElement("span")
                since.id = "since"
                since.innerHTML = `since ${sinceTime.substring(0, 4)}`

                let deleteSpan = document.createElement("span")
                deleteSpan.innerHTML = "delete client"
                // deleteSpan.addEventListener()

                let break1 = document.createElement("br")
                let break2 = document.createElement("br")
                let break3 = document.createElement("br")

                secondLevel.append(thirdLevel)
                
                firstLevel.append(secondLevel)
                firstLevel.append(secondLevel2)
                firstLevel.append(since)
                firstLevel.append(break1)
                firstLevel.append(break2)

                link.append(firstLevel)
                link.append(break3)

                clientsNamesContainer.append(link)

            }
        },
    },

    mounted() {
        this.currentMatches = []
        this.performSearch()
    }

}
</script>

<style scoped>

#interactionContainer {
    display: flex;
}

#search {
    width: 60%;
    text-size-adjust: 25px;
}

</style>