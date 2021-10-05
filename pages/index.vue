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
    
    .middle
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
<<<<<<< HEAD
    font-family: @base-font;
  }
  .header {
    background-color: @color-base-clear;
    padding: 15px 0 10px;
    font-family: @title-font;
    position: fixed;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .fluid-title:after {
    content: "■";
    margin: 0 8px;
  }
  .fluid-title:last-child:after {
    content: "";
  }
  .censurador-link {
    font-size: 100%;
    color: @color-primary;
  }

  .home-link {
    font-size: 150%;
    color: @color-primary;
  }

  .scroller {
    min-height: 100px;

    .loading-icon {
      text-align: center;
      font-size: 300%;
      color: @color-secundary;
    }

    .stream-end-message {
      text-align: center;
      font-size: 150%;
      color: @color-secundary;
      font-family: @base-font;
      font-weight: @base-font-weigh-base;
    }
=======
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100vh;
>>>>>>> c481aeca (feat(home): redefinido layout simples da home)
  }

  .middle {
    width: 75%;
    display: flex;
    flex-direction: column;
<<<<<<< HEAD
    background-color: @color-base-clear;
    padding-top: 15px;

    .post {
      margin: 65px 0 0;
      padding: 10px;
      background-color: @color-base-dark;
      overflow-x: scroll;
      
      .title {
        font-size: 375%;
        color: @color-secundary;
        font-family: @base-font;
        font-weight: @base-font-weigh-bold;
        line-height: 50px;
        margin: 40px 0 50px;
        display: inline-block;
      }

      .content {
        color: @color-terciary;
      }
    }
  }

  @media (min-width: 390px) {
    .main {
      padding-top: 5px;
    }
  }
  @media (min-width: 768px) {
    .censurador-link {
      font-size: 150%;
    }

    .home-link {
      font-size: 250%;
    }

    .main {
      padding-top: 40px;
    }
=======
    align-content: center;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  h1 {
    font-family: @title-font;
    color: @color-primary;
    line-height: 72px;
    font-size: 300%;
>>>>>>> c481aeca (feat(home): redefinido layout simples da home)
  }

  .link {
    font-family: @base-font;
    color: @color-secundary;
  }

</style>
