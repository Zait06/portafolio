<template>
    <footer class="footer is-mobile has-text-white" id="contact">
        <div class="container">
            <p class="title has-text-white">Contact</p>
        </div>
        <div class="container">
            <div class="columns is-mobile">
                <div class="column">
                    <b-icon
                        pack="ionicons"
                        icon="mail"
                        size="is-small">
                    </b-icon>
                    zait.hdez.lpz@gmail.com
                </div>
                <div class="column has-text-centered">
                    <!-- <p class="title has-text-white"></p> -->
                    <b-icon
                        pack="ionicons"
                        class="ion-logo-github is-size-4"
                        size="is-medium">
                    </b-icon>
                    <a href="https://github.com/Zait06">Zait06</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style>
    @import "https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css";
    @import "https://unicons.iconscout.com/release/v2.1.11/css/unicons.css";
    #contact{
        background: linear-gradient(to bottom,rgb(70, 70, 70), #0a0a0a);
        color: white;
    }
    a{
        color: white !important;
    }
    a:hover{
        color: rgb(148, 43, 180) !important;
    }
</style>

<script>
    const customIconConfig = {
        customIconPacks: {
            'fas': {
                sizes: {
                    'default': '',
                    'is-small': 'fa-xs',
                    'is-medium': 'fa-lg',
                    'is-large': 'fa-2x'
                }
            },
            'ionicons': {
                sizes: {
                    'default': 'is-size-5',
                    'is-small': '',
                    'is-medium': 'is-size-3',
                    'is-large': 'is-size-1'
                },
                iconPrefix: 'ion-md-',
                internalIcons: {
                    'check': 'checkmark',
                    'information': 'information',
                    'check-circle': 'checkmark-circle-outline',
                    'alert': 'alert',
                    'alert-circle': 'alert',
                    'arrow-up': 'arrow-up',
                    'chevron-right': 'arrow-forward',
                    'chevron-left': 'arrow-back',
                    'chevron-down': 'arrow-down',
                    'eye': 'eye',
                    'eye-off': 'eye-off',
                    'menu-down': 'arrow-dropdown',
                    'menu-up': 'arrow-dropup',
                    'close-circle': 'close-circle-outline',
                    'mail':"mail-outline",
                    'github':'logo-github',
                    'linked':'cut-outline',
                }
            },
            'uil': {
                sizes: {
                    'default': 'is-size-5',
                    'is-small': '',
                    'is-medium': 'is-size-3',
                    'is-large': 'is-size-1'
                },
                iconPrefix: 'uil-',
                internalIcons: {
                    'check': 'check',
                    'information': 'information',
                    'check-circle': 'checkmark-circle',
                    'alert': 'exclamation',
                    'alert-circle': 'exclamation-circle',
                    'arrow-up': 'arrow-up',
                    'chevron-right': 'angle-right',
                    'chevron-left': 'angle-left',
                    'chevron-down': 'arrow-down',
                    'eye': 'eye',
                    'eye-off': 'eye-slash',
                    'menu-down': 'angle-down',
                    'menu-up': 'angle-up',
                    'close-circle': 'times-circle'
                }
            }
        }
    }
    export default {
        created() {
            this.$buefy.config.setOptions(customIconConfig)
        }
    }
</script>