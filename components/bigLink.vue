<script>

    import titleParagraph from '../components/title-paragraph.vue'

    export default {

        data: function () {
            return {}
        },
        props: ["url"],
        components: { titleParagraph }
    }

</script>


<template>

    <a class="big-link git-hub-color" :href="url" target="_blank">

        <div class="icon">

            <i class="fab fa-github" />
        </div>

        <div class="url">

            <title-paragraph :content="url" />
        </div>
    </a>

</template>


<style lang="less">

    @import "../assets/variables.less";

    .git-hub-color{

        .icon{
            background-color: @color-github;
            color: @color-base;
        }
        .url{
            color: @color-github;
        }
    }

    .big-link{
        max-width: 500px;

        .icon{
            padding: 20px 10px;
            display: inline-block;
        }
        .url{
            padding: 20px 10px;
            font-size: 50%;
            display: inline-block;
            width: 60%;
        }
    }

    

</style>
