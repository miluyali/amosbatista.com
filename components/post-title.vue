<script>

    import titleParagraph from './title-paragraph.vue'
    import box from './box.vue'

    export default {

        components: {
            titleParagraph, box
        },

        props: ['title', 'resume'],

        data () {
            return {

            }
        }
    }

</script>

<template>
    
    
    
        <div class="post-title">
            <title-paragraph :content="title" />

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
    }

</style>