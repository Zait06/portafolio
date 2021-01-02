<template>
  <div class="home">
    <Hero></Hero>
    <div class="container">
      <AboutMe/>
    </div>
  </div>
</template>

<style>
  .home{
    background: linear-gradient(to bottom, #0a0a0a, rgb(72, 72, 72));
  }
</style>

<script>
import Hero from '../components/Hero.vue'
import AboutMe from '../components/AboutMe'

export default {
  
  name: 'Home',
  components: {
    Hero,
    AboutMe
  }
}
</script>
