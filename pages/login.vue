<template>
    <main>
        <!-- <div id='title'>Log in </div> -->

        <form class='container'>
            <div class='subContainer1'>
                <label class='label1'>Email</label>
                <div class='inputContainer'>
                    <input id="email" class="input1" type="email" v-model="email" @keyup="checkIfValid($event, 'email')">
                    <span id="checkMark1" class="checkMark">&#10003;</span>
                </div>
            </div>
            <div class='subContainer1'>
                <label class='label1'>Password</label>
                <div class='inputContainer'>
                    <input id="password" class="input1" type="password" v-model="password" @keyup="checkIfValid($event, 'password')">
                    <span id="checkMark2" class="checkMark">&#10003;</span>
                </div>
            </div>
            <div ontouchstart="">
                <div class="button" @click="onLogin">
                    <span id="loginButton">Click to Log In</span>
                </div>
            </div>
            <!-- <span class="submitButton" @click="onLogin">Log in to your account</span> -->
        </form>
    </main>
</template>
<script>
export default {
    middleware: "auth",
    auth: "guest",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async onLogin() {
            try {
  

                this.$auth.loginWith("local", { data: {
                    email: this.email,
                    password: this.password
                }});
                
              setTimeout(() => {
                    console.log('about to push to profile');
                    this.$router.push("/profile");

                // }, 0);
                }, 500);

                console.log("hi")
                
                
            } catch (err) {
                
                console.log(err)
            }
        },
        checkIfValid($event, inputType) {
            if (inputType === "email") {
                let checkMark = document.getElementById("checkMark1")
                var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                emailPattern.test(this.email) === true ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
            else if (inputType === "password"){
                let checkMark = document.getElementById("checkMark2")
                this.password.length > 2 ? checkMark.style.opacity = 1.0 : checkMark.style.opacity = 0.0;
            }
        },
    },   
}
</script>
<style scoped>

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


.button span{    
  color:white;
  font-family:Helvetica, sans-serif;
  font-weight:bold;
  font-size: 1.3em;
  text-align: center;
  text-decoration:none;
  background-color:red;
  display:block;
  position:relative;
  padding:10px 20px;
  
  -webkit-tap-highlight-color: rgba(200, 0, 0, 1.0);
  text-shadow: 0px 1px 0px #000;
  filter: dropshadow(color=#000, offx=0px, offy=1px);
  
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);
  box-shadow:inset 0 1px 0 #FFE5C4, 0 10px 0 rgba(150, 0, 0, 1.0);

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.button span:active{
  top:10px;

  background-color:rgba(200, 0, 0, 1.0);
  -webkit-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 rgba(150, 0, 0, 1.0);
  -moz-box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3pxpx 0 rgba(150, 0, 0, 1.0);
  box-shadow:inset 0 1px 0 #FFE5C4, inset 0 -3px 0 rgba(150, 0, 0, 1.0);

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