<template>
    <div class="column is-4" data-aos="fade-up">
        <div class="card tarjeta" aria-id="contentIdForA11y3">
            <div
                class="card-header"
                role="button"
                aria-controls="contentIdForA11y3">
                <p class="card-header-title has-text-center">
                    Title
                </p>
            </div>
            <div class="card-content">
                <div class="content has-text-centered">
                    <img src="../assets/logo.png"/>
                </div>
                <div class="content has-text-justify">
                    Description
                </div>
            </div>
            <footer class="card-footer">
                <a class="card-footer-item">
                    Show more
                </a>
            </footer>
        </div>
    </div>
</template>

<style>
    .tarjeta{
        background-color: red;
    }
</style>

<script>
export default {
    name: 'Card'
}
</script>