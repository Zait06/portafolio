<template>
    <b-navbar class="is-dark is-bold">
        <template slot="end">
            <b-navbar-item tag="router-link" :to="'/'">
                Home
            </b-navbar-item>
            <b-navbar-item tag="router-link" :to="'/about'">
                About Me
            </b-navbar-item>
            <b-navbar-item href="#contact">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>