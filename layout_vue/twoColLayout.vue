<script>

    import box from '../components/box.vue'
    import postTitle from '../components/post-title.vue'
    import myLink from '../components/myLink.vue'
    import pgHeader from '../components/pageHeader.vue'
    import vueMeta from '../components/meta.vue'
    import linkStyle from '../components/external-link-style.vue'

    export default {

        data: function () {
            return {}
        },

        props: ['posts', 'meta'],

        components: { postTitle, box, myLink, pgHeader, vueMeta, linkStyle }
    }

</script>

<template>

    <div class="two-col-layout">

        <vue-meta :metadata="meta" />

        <link-style />

        <pg-header />

        <box>

            <ul class="list">

               <li class="item" v-for="post in posts">
                    <my-link :url="post.url">
                        <post-title :title="post.title" :resume="post.resume" />
                    </my-link>
               </li>
            </ul>
        </box>
    </div>

</template>



<style lang="less">

    .two-col-layout{

        float: left;
        width: 100%;
        margin: 0 0 10px 0;

        .list{

            width: 100%;

            .item{
                width: 100%;
                margin: 0 0 10px 0;
                padding: 0;
            }

            @media (min-width: 500px){

                .item{
                    width: 45%;
                    float: left;
                }
            }
        }
    }

</style>
