<script>

  import vueMeta from '../components/meta.vue'
  import linkStyle from '../components/external-link-style.vue'
  import facebookApp from '../components/facebook-app.vue'

  export default {

    data () { 
      return {
      }
    },
    components: { 
      vueMeta,
      facebookApp, 
      linkStyle,
    },

    async asyncData () {
      

      return {
        meta: {
          title: "Home",
          description: "Site pessoal.",
          thumbnail: "",
          url: ``,
          type: "home"
        },
      }
    }
  }

</script>

<template lang="pug">

  .home-page

    vue-meta(:metadata="meta")
    facebook-app
    link-style
    
    .full-page
      a.link-image.me(href="#")
      a.link-image.censurador(href="/censurador")
      a.link-image.git(href="https://github.com/amosbatista")
    //--.middle
      h1 Amós Batista
      a.link(href="/censurador") Censure minha música
      a.link(href="https://github.com/amosbatista") github
      a.link(href="mailto:amos.silva@gmail.com") amos.silva@gmail.com
    


</template>



<style lang="less">
  @import '../assets/generic.less';
  @import '../assets/variables.less';
  @import '../assets/mixin.less';
  @import '../assets/objects.less';
  @import '../assets/base.less';

  .home-page {
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100vh;
  }

  .full-page {
    width: 100vw;
    height: 100vh; 
    overflow: hidden;
    
    .link-image {
      display: inline-block;
      width: 33%;
      height: 100vh;
      background-position: center;
    }
    
    .me {
      background-image: url('../static/pessoal.JPG');
      background-size: cover;
      background-position: left;
    }
    
    .censurador {
      background-image: url('../pages/censurador/img/export-filtro.png');
    }
    
    .git {
      background-image: url('../static/Octocat.jpg');
    }
  }

  .link {
    font-family: @base-font;
    color: @color-secundary;
  }

</style>
