<template>
    <div class="container is-mobile" id="killing-time">
        <p class="title has-text-white has-text-centered" data-aos="fade-up">Killing Time</p>
        <p class="has-text-white has-text-centered my-text" data-aos="fade-up">
            When I have free time, I like coding some challenges; I think is a good hobby and you can improve your abilities.
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
                    'key': 'snakeC',
                    'name': 'Snake C',
                    'img':'SnakeCpp.png',
                    'description': "The classic Snake game developed on C++"
                },
            ]
        }
    },
}
</script>