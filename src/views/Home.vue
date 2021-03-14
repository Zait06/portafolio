<template>
  <div class="home">
    <Hero></Hero>
    <GoToTop/>
    <div class="container">
      <AboutMe/>
      <br>
      <ModalProject/>
      <Projects/>
      <br>
      <KillTime/>
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
import GoToTop from '../components/GoToTop'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import KillTime from '../components/KillTime'
import ModalProject from '../components/ModalProject'

export default {
  
  name: 'Home',
  components: {
    Hero,
    AboutMe,
    Projects,
    KillTime,
    GoToTop,
    ModalProject
  },
}
</script>
