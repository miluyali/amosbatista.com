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

        props: ['title', 'description', 'outro', 'imageUrl', 'metadata'],

        data: function () {
            return {}
        }
    }

</script>

<template>

    <div class="gallery-post-layout">

        <vue-meta :metadata="metadata" />
        
        <facebook-app />

        <link-style />

        <pg-header />

        <article class="post">

            <div class="post-top box">

                <a :href="imageUrl">
                    <img class="image" :src="imageUrl" target="_blank" />
                </a>

            </div>

            <div class="post-content box">

                <post-title :title="title" :resume="description" />

                <div class="content" v-html="outro">
                    Aqui deveria vir o conteúdo do post, se desse tudo certo :(
                </div>
            </div>

        </article>

        <pg-footer />

    </div>
</template>



<style lang="less">

    @import "../assets/mixin.less";

    .gallery-post-layout{

        .post{
            float: left;
            position: relative;
            width: 100%;
            
            .post-top{
                position: relative;
                width: 100%;

                .image{
                    max-width: 100%;
                    max-height: 500px;
                    margin: 10px auto;
                    display: block;
                }
            }

            .post-content{
                font-size: 75%;
                width: 100%;

                .content{
                    width: 95%;
                    margin: auto;
                    text-indent: 20px;

                    a{
                        text-decoration: underline;
                    }
                }
            }
        }

    }

</style>
