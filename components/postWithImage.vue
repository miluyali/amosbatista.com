<script>

    import titleParagraph from './title-paragraph.vue'
    import box from './box.vue'

    export default {

        components: {
            titleParagraph, box
        },

        props: ['title', 'resume', 'subTitle', 'thumbnail'],

        data () {
            return {}
        }
    }

</script>

<template>

    <div :class="'post-title'">

        <img class="thumbnail" :src="thumbnail" />

        <div class="background" />
        
        <title-paragraph :content="title" :is-color-reverted="true" />

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
    @import "../assets/mixin.less";

    .post-title{
        height: 100%;
        position: relative;
        
        .thumbnail{
            width: 100%;
            position: absolute;
            top: -200px;
            left: 0;
        }
        .background{
            .gradient();
            width: 100%;
            height: 128%;
            position: absolute;
            top: -53px;
            left: 0;
        }

        .title-paragraph{
            position: absolute;
            top: -66px;
        }

        .post-title-resume{
            color: @color-base;
            position: absolute;
            top: 110px;
            font-family: @base-font;
            padding-left: 20px;
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
