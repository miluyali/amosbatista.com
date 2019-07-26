<script>

  import box from '../components/box.vue'
  import myLink from '../components/myLink.vue'
  import vueMeta from '../components/meta.vue'
  import linkStyle from '../components/external-link-style.vue'
  import facebookApp from '../components/facebook-app.vue'
  import animation from '../components/animatedBg_linesToCenter.vue'
  import pageTitle from '../components/home-header.vue'
  import hoverBigBox from '../components/hoverBigBox.vue'
  import postTitle from '../components/postWithImage'
  import sunsetClock from '../components/sunsetClock'

  import firstPostService from '../ghost.io/featuredPostService'
  import postListService from '../ghost.io/postListService'
  import httpService from '../requests/http'

  export default {

    data: function () {
      return {}
    },
    components: { hoverBigBox, vueMeta, facebookApp, linkStyle, pageTitle, animation, postTitle, sunsetClock },
    async asyncData () {
      const post = await firstPostService(httpService)

      return {
        meta: {
          title: "Home",
          description: "Site pessoal de projetos e portfólios.",
          thumbnail: post.thumbnail,
          url: `${post.url}`,
          type: "home"
        },
        firstPost: {
          title: post.title,
          description: post.description,
          url: post.url,
          thumbnail: post.thumbnail
        },
        postList: []     
      }
    }
  }

</script>

<template lang="pug">

  .container.home

    vue-meta(:metadata="meta")

    facebook-app

    link-style

    hover-big-box(small is-box-hoverable)
      page-title

    hover-big-box(is-inside-full-size small)
      sunset-clock

    hover-big-box(box-url="/portfolio" box-simple-title="Portfolio" is-box-hoverable)

    hover-big-box.first-post(:box-url="firstPost.url" is-box-hoverable)
      post-title(
        :title="firstPost.title"
        :resume="firstPost.description"
        :thumbnail="firstPost.thumbnail")
    
    hover-big-box.post(v-for="post in postList" v-bind:key="post.id" :box-url="post.url" is-box-hoverable small)
      post-title(
        :title="post.title"
        :resume="post.description"
        :thumbnail="post.thumbnail")

    //hover-big-box(box-url="/about" box-simple-title="Sobre" is-box-hoverable small)

    //hover-big-box(box-url="/web-development" box-simple-title="Desenvolvimento Web" is-box-hoverable small)

    //hover-big-box(box-url="/refactoring" box-simple-title="Refatoração" is-box-hoverable small)

    //hover-big-box(box-url="/classes" box-simple-title="Web Aulas" is-box-hoverable small)

    //hover-big-box(box-url="/translations" box-simple-title="Traduções" is-box-hoverable small)

    //hover-big-box(box-url="/gitHub" box-simple-title="Meu Git Hub" is-box-hoverable small)

    //hover-big-box(box-url="/services" box-simple-title="Outros serviços" is-box-hoverable small)

    //hover-big-box(box-url="/contact" box-simple-title="Contato" is-box-hoverable small)

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

    .first-post, post{
      display: flexbox;
      align-items: center;
      justify-content: center;
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
        font-weight: bold;
    }

    .comment-chars{
        color: @color-secundary;
    }

    .animation{
        width: 100%;
        height: 100%;
    }
    
    .home{
      padding-bottom: 100px;
    }

</style>
