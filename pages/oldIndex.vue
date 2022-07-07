<template>
    <main>
        <img src="/img/professional.jpg" alt="">
        <!-- <template v-if="(true)"> -->
            
        <template v-if="!$auth.$state.loggedIn">
            <div id="logoContainer">
                <nuxt-link to='/'>
                    <span id="logoLayer1"                   class="logoLayer logoLayerCircle"> DIY </span>
                    <span id="logoLayer2"                   class="logoLayer logoLayerCircle"> D </span>
                    <span id="logoBackgroundCircleLayer"    class="logoLayer logoLayerCircle"></span>
                </nuxt-link>
            </div>
            <div id="loadingDotsContainer">
                <span id="loadingDot1" class="loadingDot">.</span>
                <span id="loadingDot2" class="loadingDot">.</span>
                <span id="loadingDot3" class="loadingDot">.</span>
            </div>

            
        </template>
        
        <template v-else>
            <div id="welcomeBack">Welcome back {{$auth.$state.user.businessName}}</div>

            <div id="logoContainer">
                <nuxt-link to='/'>
                    <span id="logoLayer1"                   class="logoLayer logoLayerCircle"> DIY </span>
                    <span id="logoLayer2"                   class="logoLayer logoLayerCircle"> D </span>
                    <span id="logoBackgroundCircleLayer"    class="logoLayer logoLayerCircle"></span>
                </nuxt-link>
            </div>
            <div id="loadingDotsContainer">
                <span id="loadingDot1" class="loadingDot">.</span>
                <span id="loadingDot2" class="loadingDot">.</span>
                <span id="loadingDot3" class="loadingDot">.</span>
            </div>
        </template>
        
    </main>
</template>

<script>

export default {
    layout: 'splashPageLayout',
    methods: {
    },
    mounted() {
        console.log("hi",!this.$auth.$state.loggedIn)
        if (!this.$auth.$state.loggedIn) {
            setTimeout(() => {  
                this.$router.push("/welcome");
            },
            111000);
        }
        else 
        {
            setTimeout(() => {  
                this.$router.push("/profile");
            },
            111000);
        }
    }
}
</script>

<style scoped>
#welcomeBack {
    position: absolute;
    top: 10%;
    left: 35%;
    width: 30%;
}


body {
    overflow-y: hidden;
    overflow-x: hidden;
}
img {
    height: 120%;
    width: 120%;
    object-fit: cover;
    z-index: -1;
    transform: scale(1.0);
    opacity: 1.0;
}

#loadingDotsContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 90%;
    left: 45%;
    width: 10%;
    font-size: 3em;
}

.loadingDot {
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}

#loadingDot1 {
    animation-name: loadingDotAnimation1;
    animation-delay: 0.0s;
}

#loadingDot2 {
    animation-delay: 0.0s;
    animation-name: loadingDotAnimation2;
}

#loadingDot3 {
    animation-delay: 0.0s;
    animation-name: loadingDotAnimation3;
}

.logoLayer {
    position: absolute;
    top: 60%;
    left: 35%;
    text-align: left;
    font-size: 4em;
    white-space: pre;
    font-family: 'Vujahday Script', cursive;
    animation-delay: 0.0s;
    animation-duration: 3.0s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    background-color: aqua;
}

/* .logoLayerCircle {
    border-radius: 30vw;
} */

/* #logoBackgroundCircleLayer {
    border: 1vw solid transparent;
    top: 1vw;
    left: 1vw;
    animation-name: transition2;
    animation-duration: 3.0s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
} */

#logoLayer2 {
    background-color: transparent;
    color: black;
    animation-name: transition2;
    animation-timing-function: ease-in-out;
    animation-duration: 3.0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

/* } */


@keyframes moveLogoToCorner {
    0% {}
    50% {transform: scale(2.0)}
    100% {
        position: absolute;
        top: 1em;
        left: 1em;
    }
}

@keyframes loadingDotAnimation1 {
0% {

    }
    20% { 
      transform: scale(3.0) translateX(-5px) translateY(-20px);
      /* border-radius: 5px; */
      /* color: red; */
      }
50% {
    color: red;
    
    }
80% { 
      transform: scale(3.0) translateX(-5px) translateY(-20px);
      /* border-radius: 5px; */
      /* color: red; */
      }

100% { 
      transform: scale(1.0) translateX(0px) translateY(0px);
      /* border-radius: 5px; */
      color: black;
      }
}

@keyframes loadingDotAnimation2 {
0% {

    }
40% { 
      transform: scale(3.0) translateX(-0px) translateY(-20px);
      /* border-radius: 5px; */
      /* color: red; */
      }
50% {
    color: red;
    
    }

80% { 
      transform: scale(3.0) translateX(-0px) translateY(-20px);
      /* border-radius: 5px; */
      /* color: red; */
      }
100% { 
      transform: scale(1.0) translateX(0px) translateY(0px);
      /* border-radius: 5px; */
      color: black;
      }
}

@keyframes loadingDotAnimation3 {
0% {

    }

50% {
    color: red;
    
    }
60% { 
      transform: scale(3.0) translateX(5px) translateY(-20px);
      /* border-radius: 5px; */
      /* color: red; */
      }
80% { 
      transform: scale(3.0) translateX(5px) translateY(-20px);
      /* border-radius: 5px; */
      /* color: red; */
      }
100% { 
      transform: scale(1.0) translateX(0px) translateY(0px);
      /* border-radius: 5px; */
      color: black;
      }
}


@keyframes transition2 {
0% {

    }
50% {
    color: red;
    
    }
100% { 
      transform: scale(3.0) translateX(10px) translateY(-0px);
      color: red;
      }
}
</style>
