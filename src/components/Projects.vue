<template>
    <div class="container is-mobile" id="projects">
        <p class="title has-text-white has-text-centered" data-aos="fade-up">Projects</p>
        <p class="has-text-white has-text-centered my-text" data-aos="fade-up">
            Here I present some projects which have developed by myself since I have more coding knowledge.
        </p>
        <br>
        <div class="columns is-3 is-multiline">
            <div class="column is-4" data-aos="fade-up" v-for="p in proj" :key="p.name">
                <Card :project="p"/>
            </div>
        </div>
    </div>
</template>

<style>
    p{
        color: white !important;
    }
    .modal-card, .modal-card-head{
        background-color: black !important;
        border: 1px solid #000 !important;
    }
    .modal-card-body{
        background-color: #454545 !important;
        border: 1px solid #000 !important;
    }
    .modal-card-image{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: 50%;
    }
</style>

<script>

import Card from './Card';

export default {
    components:{
        Card,
    },
    data() {
        return {
            isCardModalActive: false,
            proj:[
                {
                    'key': 'sares',
                    'name': 'SARES',
                    'img':'SARES.jpg',
                    'description': "This project simulates a check clock on school. In addition, human capital has the teachers' record."
                },
                {
                    'key': 'pso_shape',
                    'name': 'PSO shape',
                    'img':'pso.png',
                    'description': 'With the PSO algorithm help, the particles tried to learn rectangles and circles.'
                },
                {
                    'key': 'guess_who',
                    'name': 'Guess Who?',
                    'img':'GuessWho.png',
                    'description': 'The classic Guess Who game, but in this version, the players will try to guess a Mexican historical figure.This with some clues and voice analysis for the answer.'
                },
            ]
        }
    },
    methods:{
        closeModal(){
            this.isCardModalActive = false;
        },
        seeModal(){
            this.$store.dispatch("trueShowModalAction");
        }
    }
}
</script>