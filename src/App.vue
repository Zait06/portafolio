<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>
  #app{
    background: rgb(70, 70, 70);
  }
</style>

<script>
  import Navbar from './components/Navbar'
  import Footer from './components/Footer'

  export default {
    components:{
      Navbar,
      Footer
    }
  }
</script>