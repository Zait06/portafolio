<template>
  <div class="home">
    <Hero></Hero>
    <div class="container cuerpo">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</template>

<style>
  #cuerpo{
    color: #35313B;
  }
  img{
    align-content: center;
  }
</style>

<script>
import Hero from '../components/Hero.vue'

export default {
  
  name: 'Home',
  components: {
    Hero
  }
}
</script>
