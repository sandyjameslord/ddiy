<template>
    <main>
        <span id='number'>0</span>
        <div id="navbarContainer">
            <div id="logoContainer">
                <span id="d" class="letterPart"></span>
                <span id="dTopperRight" class="letterPart"></span>
                <span id="dTopperLeft" class="letterPart"></span>
                <span id="whiteLine" class="letterPart"></span>

                <span id="i" class="letterPart"></span>
                <div id="yContainer">
                    <span id="y-stroke-1" class="letterPart"></span>
                    <span id="y-stroke-2" class="letterPart"></span>
                    <span id="y-stroke-3" class="letterPart"></span>
                </div>
                <span id="smallCoverCircle" class="letterPart"></span>
            </div>
            
            
            <div id="hamburger" @click="showOptions">
                <span id="topBurgerLine" class='burgerLine'> . . . . . . </span>
                <span id="middleBurgerLine" class='burgerLine'> . . . . . . </span>
                <span id="bottomBurgerLine" class='burgerLine'> . . . . . . </span>
            </div>
        </div>
        <div id="loginContainer">
            <template v-if="$auth.$state.loggedIn">
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="/profile">Profile: {{ $auth.$state.user.businessName }}</nuxt-link>
                    </div>
                </div>
            </template>

            <template v-else>
                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="/login">Log In</nuxt-link>
                    </div>
                </div>

                <div ontouchstart="">
                    <div class="button">
                        <nuxt-link to="/signup">Sign Up</nuxt-link>
                    </div>
                </div>
            
            </template>
        </div> 

    </main>
</template>
<script>
import DDIYLogo from "~/components/DDIYLogo";
export default {
    components: {
        DDIYLogo
    },
    methods: {
        showAnimation() {
            let logoContainer = document.getElementById("logoContainer");
            let d = document.getElementById("d");
            let dTopperRight = document.getElementById("dTopperRight");
            let dTopperLeft = document.getElementById("dTopperLeft");
            let i = document.getElementById("i");
            let yContainer = document.getElementById("yContainer");
            let yStroke1 = document.getElementById("y-stroke-1");
            let yStroke2 = document.getElementById("y-stroke-2");
            let yStroke3 = document.getElementById("y-stroke-3");
            let bottomBurgerLine = document.getElementById("bottomBurgerLine");

            let initialDTopperRightStyle = getComputedStyle(dTopperRight)
            let initialDTopperLeftStyle = getComputedStyle(dTopperLeft)

            // console.log(initialDTopperRightStyle)
            dTopperRight.style = initialDTopperRightStyle
            dTopperLeft.style = initialDTopperLeftStyle

            // console.log(initialDTopperRightStyle)


            // let dTopperRightFirstMove = "@keyframes dTopperRightFirstMove { 0% {transform: translateX(0px);} 100% {transform: translateX(220px);} }";
            // let dTopperLeftFirstMove = "@keyframes dTopperLeftFirstMove { 0% {transform: translateX(0px);} 100% {transform: translateX(10px);} }";

            // while (document.styleSheets[0].length > 0) {
            //         document.styleSheets[0].removeRule(0);
            // }

            // dTopperRight.style = initialDTopperRightStyle
            // dTopperLeft.style = initialDTopperLeftStyle

            // console.log(dTopperRight.style)


            // document.styleSheets[0].insertRule(dTopperRightFirstMove, 0);
            // document.styleSheets[0].insertRule(dTopperLeftFirstMove, 1);

            // dTopperRight.style.animation = "";
            // dTopperLeft.style.animation = "";

            // dTopperRight.style.animation = "dTopperRightFirstMove 375ms linear forwards";
            // dTopperLeft.style.animation = "dTopperLeftFirstMove 375ms linear forwards";

        },
        showOptions() {
            let topBurgerLine = document.getElementById("topBurgerLine");
            let middleBurgerLine = document.getElementById("middleBurgerLine");
            let bottomBurgerLine = document.getElementById("bottomBurgerLine");

            let number = document.getElementById("number");

            // first animation chunk - move forward
            let topBurgerLineKFFirstMove = "@keyframes topBurgerLineKFFirstMove         { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);}                    50% {transform: translateX(0px)  translateY(8px)   rotateZ(-90deg) ;}                  100% {transform: translateX(0px)  translateY(20px)   rotateZ(-135deg) ;} }";
            let middleBurgerLineKFFirstMove = "@keyframes middleBurgerLineKFFirstMove   { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);}                    50% {transform: translateX(5px) translateY(-17px) rotateZ(-90deg) ; opacity: 0.2 ;}    100% {transform: translateX(5px) translateY(-7px) rotateZ(-90deg) ; opacity: 0.0} }";
            let bottomBurgerLineKFFirstMove = "@keyframes bottomBurgerLineKFFirstMove   { 0% {transform: translateX(0px) translateY(0px) rotateZ(0deg);}                    50% {transform: translateX(0px) translateY(-11px) rotateZ(-90deg) ;}                   100% {transform: translateX(0px) translateY(-12px) rotateZ(-45deg) ;} }";
            
            // first animation chunk - move back
            let topBurgerLineKFSecondMove = "@keyframes topBurgerLineKFSecondMove       {0% {transform: translateX(0px)  translateY(20px)   rotateZ(-135deg) ;}              50% {transform: translateX(0px)  translateY(8px)   rotateZ(-90deg) ;}                 100%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} }";
            let middleBurgerLineKFSecondMove = "@keyframes middleBurgerLineKFSecondMove {0% {transform: translateX(5px) translateY(-7px) rotateZ(-90deg); opacity: 0.0 ;}  50% {transform: translateX(5px) translateY(-17px) rotateZ(-90deg); opacity: 0.2 ;}    100%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} opacity: 1.0 ;}";
            let bottomBurgerLineKFSecondMove = "@keyframes bottomBurgerLineKFSecondMove {0% {transform: translateX(0px) translateY(-12px) rotateZ(-45deg) ;}                 50% {transform: translateX(0px) translateY(-11px) rotateZ(-90deg) ;}                  100%{transform: translateX(0px) translateY(0px) rotateZ(0deg);} }";
            
            if (number.innerHTML == 0) {
                while (document.styleSheets[0].length > 0) {
                    document.styleSheets[0].removeRule(0);
                }

                document.styleSheets[0].insertRule(topBurgerLineKFFirstMove, 0);
                document.styleSheets[0].insertRule(middleBurgerLineKFFirstMove, 1);
                document.styleSheets[0].insertRule(bottomBurgerLineKFFirstMove, 2);

                topBurgerLine.style.animation = "";
                middleBurgerLine.style.animation = "";
                bottomBurgerLine.style.animation = "";

                topBurgerLine.style.animation = "topBurgerLineKFFirstMove 375ms linear forwards";
                middleBurgerLine.style.animation = "middleBurgerLineKFFirstMove 375ms linear forwards";
                bottomBurgerLine.style.animation = "bottomBurgerLineKFFirstMove 375ms linear forwards";

                number.innerHTML = 1;
            } else {
                while (document.styleSheets[0].length > 0) {
                    document.styleSheets[0].removeRule(0);
                }

                document.styleSheets[0].insertRule(topBurgerLineKFSecondMove, 0);
                document.styleSheets[0].insertRule(middleBurgerLineKFSecondMove, 1);
                document.styleSheets[0].insertRule(bottomBurgerLineKFSecondMove, 2);

                topBurgerLine.style.animation = "";
                middleBurgerLine.style.animation = "";
                bottomBurgerLine.style.animation = "";

                topBurgerLine.style.animation = "topBurgerLineKFSecondMove 250ms linear forwards";
                middleBurgerLine.style.animation = "middleBurgerLineKFSecondMove 250ms linear forwards";
                bottomBurgerLine.style.animation = "bottomBurgerLineKFSecondMove 250ms linear forwards";

                number.innerHTML = 0;
            }
        }
    }
}
</script>


<style scoped>

#logoContainer {
    position: inherit;
    transform: scale(0.3) translateX(-180px) translateY(-40px);
    animation-fill-mode: forwards;
    animation-delay: 0.25s;
}

#navbarContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: -1;
}
#loginContainer {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}


</style>