<template>
    <div class="container is-mobile" id="projects">
        <p class="title has-text-white has-text-centered" data-aos="fade-up">Projects</p>
        <div class="columns is-3 is-multiline">
            <div class="column is-4" data-aos="fade-up" v-for="p in proj" :key="p.name">
                <Card :project="p"/>
            </div>
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
                    'img':'logo.png',
                    'description': "This project simulates a check clock on school. In addition, human capital has the teachers' record."
                },
                {
                    'name': 'PSO',
                    'img':'pso.png',
                    'description': 'It\'s a project that it try to have a controler teacher register on a school.'
                },
                {
                    'name': 'Snake C',
                    'img':'logo.png',
                    'description': 'It\'s a project that it try to have a controler teacher register on a school.'
                },
            ]
        }
    },
}
</script>