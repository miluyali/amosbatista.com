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
      a.link-image(href="#")
        .bg.me
        p.text-inside amosBatista.com
      a.link-image(href="/dumbingofage_graph")
        .bg.doa
        p.text-inside dumbing of age - graph
      a.link-image(href="/censurador")
        .bg.censurador
        p.text-inside censure minha música
      a.link-image(href="https://github.com/amosbatista")
        .bg.git
        p.text-inside github
        
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
  
  @imagePercentage: 25%;

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
    display: flex;
    flex-direction: row;
    
    @media (orientation: portrait) {
      flex-direction: column;
    }
    
    .link-image {
      width: @imagePercentage;
      height: 100vh;
      background-position: center;
      position: relative;
      
      display: flex;
      align-content: center;
      align-items: center;
      flex-direction: row;
      
      &:hover .bg {
        filter: blur(5px) grayscale(0.5) brightness(0.4);  
      }
      
      &:hover .text-inside {
        filter: blur(0px);
      }
      
      @media (orientation: portrait) {
        width: 100%;
      }
    }
    .text-inside, .bg {
      transition: filter 0.4s ease;
    }
    .text-inside {
      font-family: @base-font;
      color: @color-terciary;
      filter: blur(5px);
      font-size: 110%;
      text-decoration: none;
      margin: 0;
      display: inline-block;
      
      &:visited {
        text-decoration: none;
      }
    }
    
    .bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -5;
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
      background-position: center;
    }
    
    .doa {
      background-image: url('../static/doa_graph.png');
      background-size: cover;
      background-position: center;
    }
  }

  .link {
    font-family: @base-font;
    color: @color-secundary;
  }

</style>
