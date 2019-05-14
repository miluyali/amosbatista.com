<script>

    import titleParagraph from './title-paragraph.vue'
    import box from './box.vue'

    export default {

        components: {
            titleParagraph, box
        },

        props: ['title', 'resume', 'isColorReverted', 'subTitle'],

        data () {
            return {
                whiteColorClass: this.isColorReverted ? ' white-title' : ''
            }
        }
    }

</script>

<template>



        <div :class="'post-title' + whiteColorClass">
            <title-paragraph :content="title" :is-color-reverted="isColorReverted" />

            <p class="sub-title">
                <i>
                    {{ subTitle }}
                </i>
            </p>

            <p class="post-title-resume">
                {{ resume }}
            </p>

        </div>


</template>



<style lang="less">

    @import "../assets/variables.less";

    .post-title{
        padding: 10px;

        .post-title-resume{
            font-family: @base-font;
            padding-left: 20px;
            color: @color-secundary;
            margin: 10px 0 0 0;
        }

        .sub-title{
            font-family: @base-font;
            padding-left: 20px;
            color: @color-terciary;
            margin: 10px 0 0 0;
        }
    }

    .white-title{
        color: @color-base;

        .post-title-resume{
            color: @color-base;
        }
    }

</style>
