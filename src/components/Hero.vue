<template>
    <div class="hero is-large">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-half">
                        <h1 class="title has-text-white
                            animate__animated 
                            animate__fadeInDown 
                            animate__delay-1s">
                            Hi, I am Zait
                        </h1>
                        <h2 class="subtitle has-text-white
                            animate__animated 
                            animate__fadeInDown 
                            animate__delay-2s">
                            Computer-systems engineer
                        </h2>
                    </div>
                    <div class="class column">
                        <!-- <h2 class="subtitle has-text-white has-text-centered
                            animate__animated 
                            animate__fadeInDown 
                            animate__delay-2s">
                            Computer-systems engineer
                        </h2> -->
                    </div>
                </div>
            </div>
        </div>
        <vue-particles color="#ffffff" class="particles-js">
        </vue-particles>
    </div>
</template>

<style>
    .hero{
        background: linear-gradient(to bottom, #0a0a0a, rgb(70, 70, 70),);
    }
    .particles-js{
        background-size: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 90%;
    }
    .myImg{
        position: absolute;
        z-index: 999;
    }
    .container{
        z-index: 999;
    }
</style>

<script>
export default {
  name: 'Hero',
}
</script>