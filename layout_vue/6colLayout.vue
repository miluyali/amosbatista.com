<script>

    import box from '../components/box.vue'
    import titleParagraph from '../components/title-paragraph.vue'
    import myLink from '../components/myLink.vue'
    import vueMeta from '../components/meta.vue'

    export default {
        
        data: function () {
            return {}
        },

        props: ['links', 'title', 'description'],

        components: { titleParagraph, box, myLink, vueMeta }
    }

</script>

<template>

    <div class="six-col-layout">
        
        <vue-meta :title="title" :description="description" />

        <div class="big-link box">

            <slot name="home-header">
            </slot>
        </div>

        <a class="big-link box" v-for="post in links"  :key="post.url" :href="post.url">
                
            <title-paragraph :content="post.title" />
        </a>
    </div>

</template>



<style lang="less">
    
    @import '../assets/variables.less';
    @box-size: 250px;

    .six-col-layout{

        .big-link{
            display: flex;
            justify-content: center;
            flex-direction: column;

            width: @box-size;
            height: @box-size;
            float: left;
            padding-left: 20px;
            
            margin: 10px 10px 0 0;

            .comment-chars{
                color: @color-secundary;
            }
        }
    }

</style>