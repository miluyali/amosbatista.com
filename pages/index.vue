<script>

  import box from '../components/box.vue'
  import vueMeta from '../components/meta.vue'
  import linkStyle from '../components/external-link-style.vue'
  import facebookApp from '../components/facebook-app.vue'
  
  // import firstPostService from '../ghost.io/featuredPostService'
  // import articlesService from '../ghost.io/articleListService'
  // import caderno1PostsService from '../ghost.io/caderno1ListService'
  // import httpService from '../requests/http'

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
      // const featured = await firstPostService(httpService)
      // const articles = await articlesService(httpService)
      // const caderno1Posts = await caderno1PostsService(httpService)

      const featured = {
        title: "Home",
        description: "Site pessoal de projetos e portfólios.",
        thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
        url: ``,
        type: "home"
      };

      return {
        meta: {
          title: "Home",
          description: "Site pessoal de projetos e portfólios.",
          thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
          url: ``,
          type: "home"
        },
        firstPost: {
          title: featured.title,
          description: featured.description,
          url: featured.url,
          thumbnail: featured.thumbnail
        },
        // articles,
        // caderno1Posts
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

    // hover-big-box(small is-box-hoverable)
    //   page-title

    // hover-big-box(is-inside-full-size small)
    //   sunset-clock

    // hover-big-box(box-url="/portfolio" box-simple-title="Portfolio" is-box-hoverable)

    // hover-big-box.post(
    //   is-box-hoverable large)
    //   post-title(
    //     title="Página em manutenção")

    // hover-big-box.first-post(:box-url="firstPost.url" is-box-hoverable)
    //   post-title(
    //     :title="firstPost.title"
    //     :resume="firstPost.description"
    //     :thumbnail="firstPost.thumbnail")
    
    // hover-big-box.post(v-for="post in articles" v-bind:key="post.id" :box-url="post.url" is-box-hoverable small)
    //   post-title(
    //     :title="post.title"
    //     :thumbnail="post.thumbnail")
    
    // hover-big-box.post(v-for="post in caderno1Posts" v-bind:key="post.id" :box-url="post.url" is-box-hoverable small)
    //   caderno1-post(
    //     :title="post.title")

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
