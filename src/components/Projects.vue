<template>
    <div class="container is-mobile" id="aboutMe">
        <p class="title has-text-white has-text-centered" data-aos="fade-up">Projects</p>
        <div class="columns is-3 is-multiline">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
</template>

<style>
    p{
        color:white;
    }
</style>

<script>

import Card from './Card'

export default {
    components:{
        Card
    },
    data() {
        return {
            proj:[
                {
                    'name': 'SARES',
                    'img':'../assets/logo.png',
                    'description': 'It\'s a project that it try to have a controler teacher register on a school.'
                },
                {
                    'name': 'PSO',
                    'img':'../assets/logo.png',
                    'description': 'It\'s a project that it try to have a controler teacher register on a school.'
                },
                {
                    'name': 'MLP',
                    'img':'../assets/logo.png',
                    'description': 'It\'s a project that it try to have a controler teacher register on a school.'
                }
            ]
        }
    },
}
</script>