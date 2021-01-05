<template>
    <div class="container is-mobile" id="killing-time">
        <p class="title has-text-white has-text-centered" data-aos="fade-up">Killing Time</p>
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
                    'name': 'Snake C',
                    'img':'SnakeCpp.png',
                    'description': "The classic game Snake develope on C++"
                },
            ]
        }
    },
}
</script>