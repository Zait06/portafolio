<template>
    <b-button
        rounded
        size="is-small"
        class="toTop is-mobile"
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
        bottom: 4% !important; /* Place the button at the bottom of the page */
        right: 0.5% !important; /* Place the button 30px from the right */
        z-index: 1000 !important; /* Make sure it does not overlap */
    }
    @media screen and (max-width: 700px) {
        .toTop{
            background-color: none !important;
            position: fixed !important; /* Fixed/sticky position */
            bottom: 4% !important; /* Place the button at the bottom of the page */
            right: 5% !important; /* Place the button 30px from the right */
            z-index: 1000 !important; /* Make sure it does not overlap */
        }
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