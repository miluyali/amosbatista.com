<script>

  import box from '../components/box.vue'
  import vueMeta from '../components/meta.vue'
  import linkStyle from '../components/external-link-style.vue'
  import facebookApp from '../components/facebook-app.vue'
  
  // import firstPostService from '../ghost.io/featuredPostService'
  import itPostsService from '../cms/itArticleListService'
  import cotidianoPostsService from '../cms/dailyListService'
  import caderno1PostsService from '../cms/caderno1ListService'
  import httpService from '../requests/http'

  export default {

    data: function () {
      return {}
    },
    components: { 
      vueMeta,
      facebookApp, 
      linkStyle,
    },

    async asyncData () {
      const itPosts = await itPostsService(httpService)
      const cotidianoPosts = await cotidianoPostsService(httpService)
      const caderno1Posts = await caderno1PostsService(httpService)

      return {
        meta: {
          title: "Home",
          description: "Site pessoal de projetos e portfólios.",
          thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
          url: ``,
          type: "home"
        },
        caderno1Posts,
        cotidianoPosts,
        itPosts,
      }
    }
  }

</script>

<template lang="pug">

  .home

    vue-meta(:metadata="meta")
    facebook-app
    link-style

    .links
      span.title.fluid-title.level-1
        |amosBatista.com
      span.title.fluid-title.level-2
        a(href="/portfolio")
          |portfólio
      span.title.fluid-title.level-3(v-for="post in itPosts" v-bind:key="post.id")
        a(:href="post.url")
          |{{post.title}}
      span.title.fluid-title.level-4(v-for="post in caderno1Posts" v-bind:key="post.id")
        a(:href="post.url")
          |{{post.title}}
      span.title.fluid-title.level-5(v-for="post in cotidianoPosts" v-bind:key="post.id")
        a(:href="post.url")
          |{{post.title}}

</template>



<style lang="less">
  @import '../assets/base.less';
  @import '../assets/generic.less';
  @import '../assets/variables.less';
  @import '../assets/mixin.less';
  @import '../assets/objects.less';

  .home {
    width: 90%;
    display: flex;
    align-content: center;

    .links {

    }
  }
  .fluid-title {
    font-size: 300%;
  }
  .fluid-title:after {
    content: "■";
    margin: 0 8px;
  }
  
  .fluid-title:last-child:after {
    content: "";
  }

  .level-1 {
    color: hsl(250, 65%, 45%);
  }

  .level-2 {
    color: hsl(220, 30%, 55%);
  }
  .level-3 {
    color: hsl(265, 30%, 60%);
  }
  .level-4 {
    color: hsl(195, 30%, 65%);
  }
  .level-5 {
    color: hsl(225, 30%, 70%);
  }
  .level-6 {
    color: hsl(230, 25%, 75%);
  }

  @media (min-width: 768px) {

    .home{
      
    }
    
    .fluid-title {
      font-size: 300%;
    }
  }

</style>
