<template>
    <main>
        <!-- <template v-if="(true)"> -->
        <template v-if="$auth.$state.loggedIn">
            <br>
            <!-- <div>say hi!</div> -->
            <div id='firstName' ><nuxt-link to='/profile'>Hi {{$auth.$state.user.firstName}}, click to view your profile.</nuxt-link></div>
            <br>
        </template>

        <template v-else>
            <div id='outerContainer'>
            
            <div id='title'>Don't Do It Yourself .info</div>
            
                <div id='innerContainer'>
                    <div id='line1' class='line'>Connect with your clients.</div>
                    <div id='line2' class='line'>Easily store photos and other information.</div>
                    <div id='line3' class='line'>Give your clients a reason to share your information.</div>
                    
                    
                    <br>
                    <div id='line9' class='line'><nuxt-link to='/signup'>Sign up for a free account and register your business today!</nuxt-link></div>
                    <br>
                </div>
        
            </div>  
        </template>

        
    </main>
</template>

<script>

export default {
    middleware: "auth",
    auth: "guest",
}
</script>

<style scoped>


</style>
