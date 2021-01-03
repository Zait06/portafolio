<template>
  <div class="home">
    <Hero></Hero>
    <div class="container">
      <AboutMe/>
      <br>
      <Projects/>
    </div>
  </div>
</template>

<style>
  .home{
    background: linear-gradient(to bottom, #0a0a0a, rgb(70, 70, 70));
  }
</style>

<script>
import Hero from '../components/Hero.vue'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'

export default {
  
  name: 'Home',
  components: {
    Hero,
    AboutMe,
    Projects
  }
}
</script>
