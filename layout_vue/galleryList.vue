<script>

    import box from '../components/box.vue'
    import postTitle from '../components/post-title.vue'
    import myLink from '../components/myLink.vue'
    import pgHeader from '../components/pageHeader.vue'
    import vueMeta from '../components/meta.vue'
    import linkStyle from '../components/external-link-style.vue'
    import facebookApp from '../components/facebook-app.vue'
    import pgFooter from '../components/pageFooter.vue'

    export default {

        data: function () {
            return {}
        },

        props: ['posts', 'metadata'],

        components: { postTitle, box, myLink, pgHeader, vueMeta, linkStyle, facebookApp, pgFooter }
    }

</script>

<template>

    <div class="gallery-list-layout">

        <vue-meta :metadata="metadata" />

        <facebook-app />

        <link-style />

        <pg-header />

        <ul class="list">

            <li class="item" v-for="post in posts">

                <a :href="post.url" class="link box">

                    <div class="thumbnail">
                        <img class="image" :src="post.thumbnail" />
                    </div>

                    <div class="resume">
                        <p class="resume-content">
                            {{post.title}}
                        </p>
                    </div>
                </a>
            </li>
        </ul>

        <pg-footer />
        
    </div>

</template>



<style lang="less">
    
    @import "../assets/variables.less";

    .gallery-list-layout{

        float: left;
        width: 100%;
        margin: 0 0 10px 0;

        .list{

            width: 100%;

            .item{
                width: 15%;
                margin: 0 0 10px 0;
                padding: 0;

                .link{

                    .thumbnail{
                        width: 100%;
                        float: left;

                        .image{
                            width: 100%;
                            height: 100%;
                        }
                    }

                    .resume{
                        width: 100%;
                        float: left;

                        .resume-content{
                            font-size: 65%;
                            color: @color-secundary;
                        }
                    }
                }
            }
        }
    }

</style>
