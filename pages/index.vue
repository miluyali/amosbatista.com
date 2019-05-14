<script>

  import box from '../components/box.vue'
  import titleParagraph from '../components/title-paragraph.vue'
  import myLink from '../components/myLink.vue'
  import vueMeta from '../components/meta.vue'
  import linkStyle from '../components/external-link-style.vue'
  import facebookApp from '../components/facebook-app.vue'
  import animation from '../components/animatedBg_linesToCenter.vue'
  import pageTitle from '../components/home-header.vue'
  import hoverBigBox from '../components/hoverBigBox.vue'

  export default {

    data: function () {
      return {
        meta: {
          title: "Home",
          description: "Site pessoal de projetos e portfólios.",
          thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
          url: "",
          type: "home"
        }
      }
    },
    components: { hoverBigBox, titleParagraph, vueMeta, facebookApp, linkStyle, pageTitle, animation }
  }

</script>

<template lang="pug">

  .container

    vue-meta(:metadata="meta")

    facebook-app

    link-style

    hover-big-box
      page-title

    hover-big-box(is-inside-full-size="true")
      animation

    hover-big-box(box-url="/portfolio" box-simple-title="Portfolio" is-box-hoverable="true")

</template>



<style lang="less">

    @import '../assets/variables.less';
    @import '../assets/mixin.less';
    @import '../assets/fontawesome/fontawesome.less';
    @import '../assets/generic.less';
    @import '../assets/base.less';
    @import '../assets/objects.less';

    @box-size: 225px;

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

    .title{
        font-family: @title-font;
        text-transform: uppercase;
        margin: 0;
        line-height: 1;
        color: @color-primary;
        font-size: 200%;
    }

    .comment-chars{
        color: @color-secundary;
    }

    .animation{
        width: 100%;
        height: 100%;
    }

</style>
