<script>

    import box from '../components/box.vue'
    import titleParagraph from '../components/title-paragraph.vue'
    import myLink from '../components/myLink.vue'
    import vueMeta from '../components/meta.vue'
    import linkStyle from '../components/external-link-style.vue'
    import facebookApp from '../components/facebook-app.vue'

    export default {

        data: function () {
            return {
            }
        },

        props: ['links', 'meta'],

        components: { titleParagraph, box, myLink, vueMeta, linkStyle, facebookApp }
    }

</script>

<template>

    <div class="six-col-layout">

        <vue-meta :metadata="meta" />

        <facebook-app />

        <link-style />

        <div class="big-link box">

            <slot name="home-header">
            </slot>
        </div>

        <div class="big-link box outro">

            <slot name="home-outro">
            </slot>
        </div>

        <a class="big-link box hover-box" v-for="post in links"  :key="post.url" :href="post.url">

            <title-paragraph :content="post.title" />
        </a>
    </div>

</template>



<style lang="less">

    @import '../assets/variables.less';
    @import '../assets/mixin.less';
    @box-size: 225px;

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

        .outro{
            padding: 0;
            width: calc(@box-size+20px);
        }

        .hover-box{
            .transiction();

            &:hover{
                .shadow(9px);
                background-color: @color-base-clear;
            }
        }
    }

</style>
