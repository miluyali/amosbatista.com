<script>

    import postTitle from '../components/post-title.vue'
    import box from '../components/box.vue'
    import pgHeader from '../components/pageHeader.vue'
    import vueMeta from '../components/meta.vue'

    export default {

        components: {
            postTitle, box, pgHeader, vueMeta
        },

        props: ['title', 'description', 'thumbnail', 'meta'],

        data: function () {
            return {}
        }
    }

</script>

<template>

    <div class="blog-post-layout">

        <vue-meta :meta="meta" />
        
        <pg-header />

        <div class="post-top box">

            <img class="thumbnail" :src="thumbnail" />

            <div class="content">

                <post-title :title="title" :resume="description" />
            </div>
            
        </div>
    </div>
</template>



<style lang="less">

    .blog-post-layout{

        .post-top{
            height: 500px;
            position: relative;

            .thumbnail{
                z-index: -1;
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }

            .content{
                z-index: 2;
                position: absolute;
                bottom: 0;
                width: 100%;
            }
        }
    }

</style>