<template>
    <b-navbar class="is-black">
        <template slot="end">
            <b-navbar-item class="nvItem" tag="router-link" :to="{ path: '/' }">
                Home
            </b-navbar-item>
            <b-navbar-item class="nvItem" href="#aboutMe">
                About Me
            </b-navbar-item>
            <b-navbar-item class="nvItem" href="#projects">
                Projects
            </b-navbar-item>
            <b-navbar-item class="nvItem" href="#killing-time">
                Killing Time    
            </b-navbar-item>
            <b-navbar-item class="nvItem" href="#contact">
                Contact
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style>
    .nvItem:hover{
        color: rgb(102,155,247) !important;
    }

    @media screen and (max-width: 600px) {
        b-navbar{
            background: black !important;
            border: 0px;
        }
        .nvItem{
            color: white !important;
            background: black;
        }
        .nvItem:hover{
            color: rgb(102,155,247) !important;
        }
        .nvItem:active{
            background: black !important;
        }
    }
</style>

<script>
export default {
  name: 'Navbar',
}
</script>