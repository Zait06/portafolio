<template>
    <b-navbar class="is-black">
        <template slot="end">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item href="#aboutMe">
                About Me
            </b-navbar-item>
            <b-navbar-item href="#projects">
                Projects
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