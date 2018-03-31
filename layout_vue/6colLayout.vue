<script>

    import box from '../components/box.vue'
    import postTitle from '../components/post-title.vue'
    import myLink from '../components/myLink.vue'
    import vueMeta from '../components/meta.vue'

    export default {
        
        data: function () {
            return {}
        },

        props: ['links', 'title', 'description'],

        components: { postTitle, box, myLink, vueMeta }
    }

</script>

<template>

    <div class="six-col-layout">
        
        <vue-meta :title="title" :description="description" />

        <div class="big-link" v-for="post in links"  :key="post.url">
            <box>
                <my-link :url="post.url">
                    
                    <post-title :title="post.title" :resume="post.resume" />
                </my-link>
            </box>
        </div>
    </div>

</template>



<style lang="less">
    
    @import '../assets/variables.less';

    .six-col-layout{

        .big-link{
            max-width: 150px;
            height: 150px;
            float: left;
            padding: 15px;
            margin: 0 10px 0 0;

            .comment-chars{
                color: @color-secundary;
            }
        }
    }

</style>