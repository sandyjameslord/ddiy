<template>
    <main>
        <div id='footerContainer'>
            <div id="footerInfoContainer">
                <div id="footerTitle" class="footerLine">Don't Do It Yourself!</div>
                <div id="footerTextContent" class="footerLine">Connect with your clients to easily share daily updates.</div>
                <div id="footerCopyright" class="footerLine">Copyright 2021 Sandy Lord</div>
            </div>
            
            <div id="buttonContainer">
                <template v-if="$auth.$state.loggedIn">
                    <span @click="onLogout">
                        <div ontouchstart="">
                            <div class="button">
                                <nuxt-link to="/welcome">
                                    Logout
                                </nuxt-link>
                            </div>
                        </div>
                    </span>
                </template>
            </div>

        </div>
    </main>
</template>
<script>

export default {

  methods: {
    async onLogout() {
        // console.log("logging out")
      await this.$auth.logout();
      this.$router.push("/welcome");
    }
  }
}

</script>
<style scoped>

#buttonContainer {
    height: 100%;
}

.button {
    margin-top: 45px;
    margin-right: 20px;
    background-color: rgba(255, 20, 20, 1.0);
}

</style>