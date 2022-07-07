<template>
  
  <div id="background">
    <div id="background2">
      <div id="mainContainer">
        <br>
        <Nuxt id="mainContent" />
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
    components: {

    }
}
</script>

<style scoped>
/* #background {
  background: url("/img/professional.jpg") no-repeat fixed center;
  background-size: 200vh;
  background-blend-mode: lighten;
}

#background2 {
  background: rgba(50,10,10,0.3) repeat fixed center;
  background-size: 200vh;
  
} */

#mainContent {
  flex-grow: 1;
  z-index: 10;
}

#mainContainer {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(50, 10, 10, 0.01);
  z-index: -5;
}

  
</style>
