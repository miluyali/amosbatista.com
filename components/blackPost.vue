<script>

    import titleParagraph from './title-paragraph.vue'

    export default {

        components: {
            titleParagraph
        },

        props: ['title'],

        data () {
            return {}
        }
    }

</script>

<template lang="pug">

    .black-post
        .background
        title-paragraph(:content="title" :is-color-reverted="true")

    </div>

</template>



<style lang="less">

    @import "../assets/variables.less";
    @import "../assets/mixin.less";

    .black-post{
        height: 100%;
        position: relative;
        
        .background{
            background-color: @color-primary;
            width: 100%;
            height: 128%;
            position: absolute;
            top: -53px;
            left: 0;
        }

        .title-paragraph{
            position: absolute;
            top: 35px;
            font-size: 55%;
        }

    }

    .white-title{
        color: @color-base;

        .post-title-resume{
            color: @color-base;
        }
    }

    @media (max-width: 800px) {
        .post-with-image{
            .title-paragraph {
                .title-paragraph-h{
                    font-size: 130%;
                }
            }
            .thumbnail{
                top: -25px;
            }
        }
    }

</style>
