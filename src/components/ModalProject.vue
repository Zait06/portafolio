<template>
    <b-modal class="myModal" v-model="$store.getters.show" 
        :width="640"
        :can-cancel="['&times;']">
        <header class="modal-card-head">
            <p class="modal-card-title is-white has-text-centered">{{$store.getters.getInfo.name}}</p>
            <button
                type="button"
                id="equis"
                @click="closeModal">
                &times;
            </button>
        </header>
        <div class="modal-card-body">
            {{getDescription($store.getters.getInfo.key)}}
            <div class="myInfo">
                <p v-for="txt in proy.info" :key="txt">
                    {{txt}}
                </p>
                <br>
                <p class="myTitle"><b>Technologies</b></p>
                <ul class="tech">
                    <li v-for="t in proy.technology" :key="t">
                        {{t}}
                    </li>
                </ul>
            </div>
            <div v-if="proy.colab != null">
                <br>
                <p class="myTitle"><b>Collaborators</b></p>
                <ul class="colab">
                    <li v-for="c in proy.colab" :key="c.nombre">
                        <b-icon
                            pack="ionicons"
                            class="ion-logo-github is-size-4"
                            size="is-medium" v-if="c.git_count != null">
                        </b-icon>
                        <a :href="c.git_count" v-if="c.git_count != null">{{c.nombre}}</a>
                        <p v-if="c.git_count == null">{{c.nombre}}</p>
                    </li>
                </ul>
            </div>
            <br>
            <p class="myTitle"><b>Repository: </b></p>
            <a :href="proy.link" style="margin-left:2em;">{{proy.link}}</a>
        </div>
    </b-modal>
</template>

<style>
    p, li{
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
    .myModal{
        z-index: 999999999999999999999999999999999999999999999 !important;
        display: block;
    }
    .colab{
        margin-left: 1em;
    }
    .tech{
        margin-left: 2em;
        list-style-type: square;
    }
    .myTitle{
        font-size: large !important;
    }
    #equis{
        color: white;
        background-color: #000;
        border: 0em;
        font-size: 1.5em;
    }
    #equis:hover{
        color: rgb(102,155,247) !important;
    }
</style>

<script>

import full_info from '../utils/full-info.js'

export default {
    name: 'ModalProject',
    data(){
        return{
            description: full_info,
            proy: null
        }
    },
    methods: {
        closeModal(){
            this.$store.dispatch("falseShowModalAction");
        },
        getDescription(key){
            this.proy = this.description[key];
        },
    },
}
</script>