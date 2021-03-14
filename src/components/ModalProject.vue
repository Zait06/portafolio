<template>
    <b-modal class="myModal" v-model="$store.getters.show" 
        :width="640"
        :can-cancel="[]">
        <header class="modal-card-head">
            <p class="modal-card-title is-white has-text-centered">{{$store.getters.getInfo.name}}</p>
            <button
                type="button"
                class="delete modal-default-button"
                @click="closeModal"/>
        </header>
        <div class="modal-card-body">
            {{getDescription($store.getters.getInfo.key)}}
            <div class="myInfo">
                <p v-for="txt in proy.info" :key="txt">
                    {{txt}}
                </p>
                <p class="myTitle"><b>Technologies</b></p>
                <ul class="myList">
                    <li v-for="t in proy.technology" :key="t">
                        {{t}}
                    </li>
                </ul>
            </div>
            <div v-if="proy.colab != null">
                <br>
                <p class="myTitle"><b>Collaborators</b></p>
                <ul class="myList">
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
            <!-- <figure class="modal-card-image">
                <b-image :src="require('@/assets/'+imgPro)">
                </b-image>
            </figure> -->
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
        z-index: 1000000000000000000000 !important;
    }
    .myList{
        margin-left: 2em;
    }
    .myTitle{
        font-size: large !important;
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