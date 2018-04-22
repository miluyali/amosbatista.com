<script>

    import postTitle from '../components/post-title.vue'
    import box from '../components/box.vue'
    import pgHeader from '../components/pageHeader.vue'
    import vueMeta from '../components/meta.vue'
    import linkStyle from '../components/external-link-style.vue'
    import facebookApp from '../components/facebook-app.vue'
    import pgFooter from '../components/pageFooter.vue'

    export default {

        components: {
            postTitle, box, pgHeader, vueMeta, linkStyle, facebookApp, pgFooter
        },

        props: ['title', 'description', 'thumbnail', 'metadata', "content"],

        data: function () {
            return {}
        }
    }

</script>

<template>

    <div class="blog-post-layout">

        <vue-meta :metadata="metadata" />
        
        <facebook-app />

        <link-style />

        <pg-header />

        <article class="post">

            <div class="post-top box">

                <div class="thumbnail-cover" />

                <img class="thumbnail-image" :src="thumbnail" />

                <div class="content">

                    <post-title :title="title" :resume="description" is-color-reverted="true" />
                </div>

            </div>

            <div class="post-content box">

                <div class="content" v-html="content">
                    Aqui deveria vir o conteúdo do post, se desse tudo certo :(
                </div>
            </div>

        </article>

        <pg-footer />

    </div>
</template>



<style lang="less">

    @import "../assets/mixin.less";

    .blog-post-layout{

        .post{
            float: left;
            position: relative;
            width: 100%;
            
            .post-top{
                height: 500px;
                position: relative;
                padding: 10px;
                .boxSizingSetToBorder();
                margin: 0 0  10px 0;
                overflow-x: hidden; 

                .thumbnail-cover{
                    .gradient();
                    z-index: -1;
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                .thumbnail-image{
                    z-index: -2;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                .content{
                    z-index: 2;
                    position: absolute;
                    bottom: 10px;
                    width: 80%;
                }
            }

            .post-content{

                .content{
                    width: 95%;
                    margin: auto;
                    text-indent: 20px;

                    a{
                        text-decoration: underline;
                        text-decoration-style: dotted;
                        word-wrap: break-word;
                    }
                }
            }
        }

    }

</style>
