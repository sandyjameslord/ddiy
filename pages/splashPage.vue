<template>
    <main>
        <img src="/img/professional.jpg" alt="">
        <template v-if="(true)">
            
        <!-- <template v-if="!$auth.$state.loggedIn"> -->
            <div id="logoContainer">
                <nuxt-link to='/'>
                    <span id="logoLayer1"                   class="logoLayer logoLayerCircle"> DIY </span>
                    <span id="logoLayer2"                   class="logoLayer logoLayerCircle"> D </span>
                    <span id="logoBackgroundCircleLayer"    class="logoLayer logoLayerCircle"></span>
                </nuxt-link>
            </div>
            <div id="titularInformationContainer">
                <div id="titularInformation">Don't Do It Yourself</div>
            </div>
            
        </template>
    </main>
</template>

<script>

export default {
    layout: 'splashPageLayout'
}
</script>

<style scoped>

@media only screen and (max-width: 550px) {
* {
    overflow-y: hidden;
}
img {
    /* position: absolute; */
    height: 120%;
    width: 120%;
    object-fit: cover;
    z-index: -1;
    transform: scale(1.0);
}

.logoLayer {
    position: absolute;
    top: 60%;
    left: 35%;
    text-align: left;
    font-size: 3em;
    white-space: pre;
    font-family: 'Vujahday Script', cursive;
    animation-delay: 0.0s;
    animation-duration: 3.0s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
}

.logoLayerCircle {
    border-radius: 30vw;
    /* font-size: 2em; */
}

#logoBackgroundCircleLayer {
    border: 1vw solid transparent;
    top: 1vw;
    left: 1vw;
    animation-name: transition2;
    animation-duration: 3.0s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

#logoLayer2 {
    background-color: transparent;
    color: black;
    animation-name: transition2;
    animation-timing-function: ease-in-out;
    animation-duration: 3.0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

#titularInformationContainer {
    display: flex;
    justify-content: center;
}

#titularInformation {
    position: absolute;
    bottom: 10px;
    text-align: center;
    background-color: rgba(255,255,255,0.8);
    color: red;
    border-radius: 5px;
    padding: 15px 5px;
    border: 3px solid red;
    font-size: 1.5em;
    width: 60%;
}

}

@media only screen and (min-width: 700px) {
  #sloganContainer {
    margin-top: 1em;
    margin-right: 1em;
    background-color: rgba(20, 20, 20, 0.50);
    padding: 0.4em;
    height: 2.0em;
    color: white;
    text-align: center;
    border-radius: 0.2em;
}

#navbarContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transform: scale(4.0) translateX(14.3em) translateY(6em);
    
}

#logoContainer {
    height: 6em;
    width: 6em;
    transform: translateX(1em);
}

.logoLayer {
    position: absolute;
    top: 0.2em;
    left: 1.0em;
    width: 2.2em;
    height: 2.2em;
    line-height: 2.2em;
    text-align: left;
    font-size: 2em;
    white-space: pre;
    font-family: 'Vujahday Script', cursive;

    animation-name: transitionNavbarContainer;
    animation-delay: 3.0s;
    animation-duration: 3.0s;
    animation-timing-function: cubic-bezier(0.4, 1.5);
    animation-iteration-count: 1;
    animation-direction: alternate;
    /* animation-fill-mode: */


}

.logoLayerCircle {
    border-radius: 4.0em;
    font-size: 2em;
}

#logoBackgroundCircleLayer {
    border: 0.1em solid transparent;
    top: 0.1em;
    left: 0.9em;
    animation-name: transition2;
    animation-duration: 3.0s;
    animation-timing-function: cubic-bezier(0.4, 1.5);
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

#logoLayer1 {
    
}

#logoLayer2 {
    background-color: transparent;
    color: black;
    animation-name: transition1;
    animation-timing-function: cubic-bezier(0.4, 1.5);
    animation-duration: 3.0s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
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
