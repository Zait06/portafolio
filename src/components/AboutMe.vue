<template>
    <div class="container is-mobile" id="aboutMe">
        <div class="columns">
            <div class="column is-three-fifths">
                <p class="title has-text-white" data-aos="fade-right">About me</p>
                <p class="has-text-justified my-text" data-aos="fade-right">
                    I'm a computer-systems engineer who likes to learn new things and face new challenges.
                    I have knowledge about some programing language, frameworks frontend and database manager.
                    <br>
                    Talking about something more personal... I love dancing, doing workout, and going out with friends.
                    <br>
                    If you want see more about me, please click <router-link :to="{ path: '/about' }">here</router-link>.
                </p>
            </div>
            <div class="column has-text-centered">
                <figure data-aos="fade-left">
                    <b-image
                        :src="require('@/assets/myPhoto.jpg')"
                        alt="My photo"
                        ratio="1by1"
                        :rounded="true"
                    ></b-image>
                </figure>
            </div>
        </div>
    </div>
</template>