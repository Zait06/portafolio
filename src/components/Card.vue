<template>
    <div class="card has-background-yellow">
        <div
            class="card-header"
            role="button"
            aria-controls="contentIdForA11y3">
            <p class="card-header-title has-text-center">
                {{ project.name }}
            </p>
        </div>
        <figure class="card-image">
            <b-image :src="require('@/assets/'+project.img)">
            </b-image>
        </figure>
        <div class="content has-text-justify">
            {{ project.description}}
        </div>
        <footer class="card-footer">
            <a class="card-footer-item">
                Show more
            </a>
        </footer>
    </div>
</template>

<style>
    .card {
    background-color: green;
}
</style>

<script>
export default {
    name: 'Card',
    props:{
        project:{
            type:Object
        }
    },
}
</script>