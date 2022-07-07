<template>
    <main>
        <!-- <div id='title'>Sign up for a free DDIY account.</div> -->
        
        <form class='container'>
            <div class='subContainer1'>
                <label class='label1'>Business name</label>
                <div class='inputContainer'>
                    <input id="businessName" class="input1" type="text" v-model="businessName" :placeholder="'Business Name...'" @keyup="checkIfValid($event, 'businessName')">
                    <span id="checkMark1" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>First name</label>
                <div class='inputContainer'>
                    <input id="firstName" class="input1" type="text" v-model="firstName" :placeholder="'First Name...'" @keyup="checkIfValid($event, 'firstName')">
                    <span id="checkMark2" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Last name</label>
                <div class='inputContainer'>
                    <input id="lastName" class="input1" type="text" v-model="lastName" :placeholder="'Last Name...'" @keyup="checkIfValid($event, 'lastName')">
                    <span id="checkMark3" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>EIN <span id="whatIsEIN">?</span></label>
                    <div class='inputContainer'>
                    <input id="EIN" class="input1" type="text" v-model="businessEID" :placeholder="'EIN...'" @keyup="checkIfValid($event, 'businessEID')">
                    <span id="checkMark4" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Email</label>
                <div class='inputContainer'>
                    <input id="email" class="input1" type="email" v-model="email" :placeholder="'Email...'" @keyup="checkIfValid($event, 'email')">
                    <span id="checkMark5" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Password</label>
                <div class='inputContainer'>
                    <input id="password1" class="input1" type="password" v-model="password1" :placeholder="'Password...'" @keyup="checkIfValid($event, 'password1')">
                    <span id="checkMark6" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Confirm password</label>
                <div class='inputContainer'>
                    <input id="password2" class="input1" type="password" v-model="password2" :placeholder="'Confirm password...'" @keyup="checkIfValid($event, 'password2')">
                    <span id="checkMark7" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Street address</label>
                <div class='inputContainer'>
                    <input id="streetAddress" class="input1" type="text" v-model="streetAddress" :placeholder="'Street address...'" @keyup="checkIfValid($event, 'streetAddress')">
                    <span id="checkMark8" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>City/Town</label>
                <div class='inputContainer'>
                    <input id="city" class="input1" type="text" v-model="cityAddress" :placeholder="'City/Town...'" @keyup="checkIfValid($event, 'city')">
                    <span id="checkMark9" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Zip Code</label>
                <div class='inputContainer'>
                    <input id="zipCode" class="input1" type="text" v-model="zipCode" :placeholder="'Zip code...'" @keyup="checkIfValid($event, 'zipCode')">
                    <span id="checkMark10" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Cell #</label>
                <div class='inputContainer'>
                    <input id="cell" class="input1" type="text" v-model="cellNumber" :placeholder="'Cell #...'" @keyup="checkIfValid($event, 'cell')">
                    <span id="checkMark11" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div class='subContainer1'>
                <label class='label1'>Landline (optional)</label>
                <div class='inputContainer'>
                    <input id="landline" class="input1" type="text" v-model="landLine" :placeholder="'Landline (optional)'" @keyup="checkIfValid($event, 'landline')">
                    <span id="checkMark12" class="checkMark">&#10003;</span>
                </div>
            </div>

            <div ontouchstart="">
                <div class="button" @click="onSignup">
                    <span id="loginButton">Click to Sign Up</span>
                </div>
            </div>

            <!-- <div id='signUpButton' class="submitButton" @click="onSignup">Create your account.</div> -->

        </form>
        
    </main>
</template>

<script>
export default {
    middleware: "auth",
    auth: "guest",
    data() {
        return {
            firstName: "",
            lastName: "",
            businessName: "",
            businessEID: "",
            email: "",
            password1: "",
            password2: "",
            streetAddress: "",
            cityAddress: "",
            zipCode: "",
            cellNumber: "",
            landLine: "",
            userType: "",

        }
    },
    methods: {
        checkIfValid($event, inputType) {
            
            
            if (inputType === "businessName"){
                let checkMark = document.getElementById("checkMark1")
                this.businessName.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "firstName"){
                let checkMark = document.getElementById("checkMark2")
                this.firstName.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "lastName"){
                let checkMark = document.getElementById("checkMark3")
                this.lastName.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "businessEID"){
                let checkMark = document.getElementById("checkMark4")
                this.businessEID.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "email") {
                let checkMark = document.getElementById("checkMark5")
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                emailPattern.test(this.email) === true ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "password1"){
                let checkMark = document.getElementById("checkMark6")
                this.password1.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "password2"){
                let checkMark = document.getElementById("checkMark7")
                if (this.password2.length > 2) {
                    this.password1 === this.password2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
                }
                
            }
            else if (inputType === "streetAddress"){
                let checkMark = document.getElementById("checkMark8")
                this.streetAddress.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "city"){
                let checkMark = document.getElementById("checkMark9")
                this.cityAddress.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "zipCode"){
                let checkMark = document.getElementById("checkMark10")
                this.zipCode.length === 5 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "cell"){
                let checkMark = document.getElementById("checkMark11")
                this.cellNumber.length > 9 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "landline"){
                let checkMark = document.getElementById("checkMark12")
                this.landLine.length > 9 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            
        },
        async onSignup() {
            try {
                let data = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    businessName: this.businessName,
                    businessEID: this.businessEID,
                    email: this.email,
                    password: this.password2,
                    streetAddress: this.streetAddress,
                    cityAddress: this.cityAddress,
                    zipCode: this.zipCode,
                    cellNumber: this.cellNumber,
                    landLine: this.landLine,
                    userType: "contractor",

                };

                let response = await this.$axios.$post("/api/auth/signup", data);
                
                if (response.success) {
                    this.$auth.loginWith("local", {
                        data: {
                            email: this.email,
                            password: this.password2
                        }
                    });
                }
                this.$router.push("/profile");
            } catch (err) {
                console.log(err)
            }
        }
    }    
}
</script>

<style scoped>
#whatIsEIN {
    margin-left: 100px;
}

.button{
  position:relative;
  display:inline-block;
  margin:10px;
  transform: scale(1.0);
    transition: transform 0.375s ease-in-out;
}

.button:hover {
    transform: translateX(0em) translateY(0em) scale(1.03);
    transition: transform 0.625s ease-in-out;
}

/* .button nuxt-link{ */
.button span{    
  color:white;
  font-family:Helvetica, sans-serif;
  font-weight:bold;
  font-size: 1.3em;
  /* font-size:36px; */
  text-align: center;
  text-decoration:none;
  background-color:red;
  /* background-color:#FFA12B; */
  display:block;
  position:relative;
  padding:10px 20px;
  
  -webkit-tap-highlight-color: rgba(200, 0, 0, 1.0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);

  /* -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100;
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 #915100; */
  
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button span:active{
  top:10px;
  /* background-color:#F78900; */
  background-color:rgba(200, 0, 0, 1.0);
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 rgba(150, 0, 0, 1.0);
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 rgba(150, 0, 0, 1.0);
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 rgba(150, 0, 0, 1.0);

  /* transform: scale(1.0); */
  transition: background-color 0.125s ease-out;
}

.button:after{
  content:"";
  height:100%;
  width:100%;
  padding:4px;
  position: absolute;
  bottom:-15px;
  left:-4px;
  z-index:-1;
  background-color:#2B1800;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.submitButton {
    background-color: transparent;
    width: 60%;
    font-size: 1.3em;
    text-align: center;
    padding: 10px 5px;
    margin-left: 20%;
    border: 2px solid red;
    border-radius: 10px;
    transition: background-color 0.375s ease-in-out;
}

.submitButton:hover {
    background-color: red;
    transition: background-color 0.625s ease-in-out;
}
</style>