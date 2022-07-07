<template>
    <main>
        <span id='number'>0</span>
        <!-- <template v-if="(true)"> -->
        <template v-if="$auth.$state.loggedIn">
            <br>
            <!-- <div>say hi!</div> -->
            <div id='firstName' ><nuxt-link to='/profile'>Hi {{$auth.$state.user.firstName}}, click to view your profile.</nuxt-link></div>
            <br>
        </template>

        <template v-else>
            <div id='outerContainer'>
            
            <!-- <div id='title'>Don't Do It Yourself .info</div> -->
            
                <div id='innerContainer'>
                    <div id='line1' class='line'>
                        <span id="dontContainer">
                            <span id='dont'>Don't </span>
                            <span id="subLine"></span>
                        </span>
                        <span id="doItYourself"> Do It Yourself</span>
                    </div>
                    <br><br>
                    <div id="andyRoofBox">
                        <img id="andyRoof" src="/img/andy_roof.jpg" alt="">
                    </div>
                    <br>
                    <div id='line2' class='subline'>Leave it to the Professionals!</div>
                    <br><br>
                    <div id='line3' class='subline'>DDIY is a communication resource for Contractors and their clients.</div>
                    <br><br>
                    <div id='line4' class='subline'>Give your clients daily updates with text and pictures to show them the job is getting done.</div>
                    <br><br>
                </div>
            </div>  
        </template>
    </main>
</template>

<script>

export default {
    // middleware: "auth",
    auth: "guest",
    methods: {
    },
    mounted() {
        const body = document.body;
        let dont = document.getElementById("dont")

        body.onscroll = logScroll;

        function logScroll(e) {
            let number = document.getElementById("number")
            let subLine = document.getElementById("subLine")
            let doItYourself = document.getElementById("doItYourself")

            if (number.innerHTML == "0") {
                subLine.style.width = "0.0em"
                subLine.style.transition = "0.5s width ease-in-out"

                doItYourself.style.transform = "translateX(-0.01em)"
                doItYourself.style.transition = "0.5s transform ease-in-out"
                
                setTimeout(() => {
                    number.innerHTML = "0";
                    subLine.style.width = "2.2em";
                    subLine.style.transition = "0.125s width ease-in-out"

                    doItYourself.style.transform = "translateX(0.0em)"
                    doItYourself.style.transition = "0.5s transform ease-in-out"


                }, 500);
                
                
            } 

        }
    }
}
</script>

<style scoped>



#number {
    position: absolute;
    top: 0;
    visibility: hidden;
    height: 0;
    width: 0;
}

#subLine {
    height: 5px;
    width: 2.2em;
    background-color: red;
    margin-left: 0.4em;
}

#dontContainer {
    display: flex;
    flex-direction: column;
}

#dont {
    white-space: pre;
    transform: translateX(0.3em);
}

#doItYourself {
    white-space: pre;
}

/* #before {
    position:
    top: 0;
    left: 0;
    content: "    ffff      ";
    height: 112px;
    width: 100px;
    background-color: red;
    color: red;
    white-space: pre;
    z-index: 20;

} */


#line1 {
    display: flex;
    flex-direction: row;
    font-size: 2.5em;
    /* text-align: center; */
    /* transform: translateX(20%); */
}

#line2 {
    font-size: 1.5em;
    /* font-size-adjust: 1em;
    margin: auto; */
    /* text-align: center;
    text-decoration: underline;
    text-decoration-color: red; 
    text-decoration-style: double; */
}

#andyRoof {
    width: 90%;
    max-width: 400px;
    margin-left: 5%;
}
.subline {
    font-size: 1.2em;
}
@media only screen and (min-width: 460px) {
    #andyRoofBox {
        display: flex;
        width: 100%;
        justify-content: center;
    }
    #andyRoof {
        width: 400px;
        /* max-width: 400px; */
        /* margin: auto; */
    }        
}

@media only screen and (max-width: 385px) {
    #line1 {
        display: flex;
        flex-direction: row;
        font-size: 1.8em;
        /* text-align: center; */
        /* transform: translateX(20%); */
}
}

#andyroof:hover {
    
}



</style>
