<template>
    <b-navbar class="navBar">
        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item href="#aboutMe">
                About
            </b-navbar-item>
            <b-navbar-item href="#contact">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style>
    .navBar{
        background-color: black;
        color: white;
    }
</style>

<script>
export default {
  name: 'Navbar',
}
</script>