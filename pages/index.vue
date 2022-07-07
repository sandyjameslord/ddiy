<template>
    <main>
        <video autoplay muted loop autoreverse id="myVideo">
            <source src="/img/popi_edit.mp4" type="video/mp4">
        </video>


        <template v-if="$auth.$state.loggedIn">
            <div id="welcomeBackContainer">
                <span id="welcomeBack">Welcome back,</span>
                <span id="userName">{{$auth.$state.user.businessName}}</span>
            </div>
        </template>

        <DDIYLogo />

        <span id="loadingDotsContainer">
            <span id="loadingDot1" class="loadingDot">.</span>
            <span id="loadingDot2" class="loadingDot">.</span>
            <span id="loadingDot3" class="loadingDot">.</span>
        </span>

    </main>
</template>

<script>
import DDIYLogo from "~/components/DDIYLogo";
export default {
    layout: 'splashPageLayout',
    methods: {
    },
    components: {
        DDIYLogo
    },
    mounted() {
        console.log("hi",!this.$auth.$state.loggedIn)
        if (!this.$auth.$state.loggedIn) {
            setTimeout(() => {  
                this.$router.push("/welcome");
            },
            7000);
            // 811111000);
        }
        else 
        {
            setTimeout(() => {  
                this.$router.push("/profile");
            },
            7000);
            // 811111000);
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300&display=swap');

#welcomeBackContainer {
    position: absolute;
    top: 60px;
    display: flex;
    flex-direction: column;
    background-color: rgba(200, 30, 30, 0.1);
    justify-content: center;
    align-items: center;
    width: 80%;
    font-size: 5.3vmax;
    margin-left: 10%;
    border-radius: 10px;
    padding: 10px;


}

#welcomeBackContainer > span {
    padding: 10px;

    text-shadow:   -1px 1px 0 rgba( 255,255,255,1.0),
                    1px 1px 0 rgba(255,255,255,1.0),
                    1px -1px 0 rgba(255,255,255,1.0);
}

</style>
