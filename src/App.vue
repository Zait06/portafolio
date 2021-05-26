<template>
  <div id="app">
    <Navbar/>
    <ModalProject/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
  html{
    scroll-behavior: smooth;
  }
  #app{
    background: rgb(70, 70, 70);
  }
  .my-text{
      color:white;
      font-size: 17.5px;
  }
  h1,h2,h3,h4,h5,h6{
    color: white !important;
  }
</style>

<script>
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'
  import ModalProject from './components/ModalProject.vue'

  export default {
    components:{
      Navbar,
      Footer,
      ModalProject
    }
  }
</script>