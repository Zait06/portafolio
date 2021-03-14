<template>
    <div>
        <div class="card">
            <div
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title is-centered">
                    {{ project.name }}
                </p>
            </div>
            <figure class="card-image">
                <b-image :src="require('@/assets/'+project.img)">
                </b-image>
            </figure>
            <div class="content has-text-centered">
                <p>{{ project.description}}</p>
            </div>
            <footer class="card-footer">
                <b-button type="is-black"
                    expanded
                    @click="cardModal">
                    Show more
                </b-button>
            </footer>
        </div>
    </div>
</template>

<style>
    div.card{
        background-color: #454545 !important;
        border-radius: 15px;
        border: 1px solid #ededed;
    }
    p{
        color: white !important;
    }
    .content{
        margin: 3%;
    }
    b-modal{
        z-index: 99999 !important;
    }
</style>

<script>

export default{
    name: 'Card',
    props:{
        project:{
            type:Object
        }
    },
    methods: {
        cardModal() {
            this.$store.dispatch("trueShowModalAction",this.$props.project);
        }
    },
}
</script>