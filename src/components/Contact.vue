<template>
    <div>
        <div class="contact-links">
            <div class="contact-icons">
                <a href="https://www.linkedin.com/in/naomi-mine/" target="_blank"><svgicon icon="linkedin" width="26px" height="30" :color="getIconColor"></svgicon></a>
                <a href="#" target="_blank"><svgicon icon="instagram" height="32" :color="getIconColor"></svgicon></a>
                <a href="#" target="_blank"><svgicon icon="gmail" height="32" :color="getIconColor"></svgicon></a>
            </div>
            <div class="contact-email-address">naomi.mine@gmail.com</div>
        </div>
    </div>
</template>

<script>
import '../compiled-icons/index'
export default {
    name: 'Contact',
    methods: {
        // getImage () {
        //     let path = require('../assets/images/art/fabric_collage_cropped.jpeg')
        //     return path
        // },
        // getAltImage () {
        //     let path = require('../assets/banner.png')
        //     return path
        // }
    }
}
</script>

<style lang="sass-loader">
    @import '../assets/styles/main.scss';
    .contact {
        &-email-address {
            text-align: center;
        }
        &-icons {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    a {
        margin: 0 8px;
    }

</style>