<template>
        <div class="modal-card is-mobile" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title is-white has-text-centered">namePro</p>
            <button
                type="button"
                class="delete modal-default-button"
                @click="close"/>
        </header>
        <div class="modal-card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, consequuntur! Praesentium porro labore dolores ipsum debitis veritatis, numquam adipisci tempore quibusdam. Voluptates adipisci veniam dicta non! Nesciunt iure facilis odit.
            </p>
            <br>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, consequuntur! Praesentium porro labore dolores ipsum debitis veritatis, numquam adipisci tempore quibusdam. Voluptates adipisci veniam dicta non! Nesciunt iure facilis odit.</p>
            <br>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ipsam praesentium in inventore, nihil facere at quo tempora illo harum officia voluptates, esse quod reprehenderit quis eum beatae accusamus. Libero.</p>
            <!-- <figure class="modal-card-image">
                <b-image :src="require('@/assets/'+imgPro)">
                </b-image>
            </figure> -->
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
export default {
    name: 'ModalProject',
    methods: {
        close(){
            console.log("Cerrar");
            this.$emit('close');
        }
    },
    // props:{
    //     namePro:{
    //         type: String
    //     },
    //     imgPro: String
    // }
}
</script>