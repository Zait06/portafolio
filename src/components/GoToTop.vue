<template>
    <b-button
        rounded
        size="is-small"
        class="toTop"
        type="is-black"
        data-aos="fade-left"
        @click.native="scrollToTop">
        Go to top
    </b-button>
</template>

<style>
    .toTop{
        background-color: none !important;
        position: fixed !important; /* Fixed/sticky position */
        bottom: 20px !important; /* Place the button at the bottom of the page */
        right: 0.3% !important; /* Place the button 30px from the right */
        z-index: 1000 !important; /* Make sure it does not overlap */
    }
</style>

<script>
export default {
    methods: {
        scrollToTop(){
            window.scrollTo(0,0);
        }
    },
}
</script>