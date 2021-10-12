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
    display: flex;
    align-content: center;
    justify-content: center;
    height: 100vh;
  }

  .middle {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  h1 {
    font-family: @title-font;
    color: @color-primary;
    line-height: 72px;
    font-size: 300%;
  }

  .link {
    font-family: @base-font;
    color: @color-secundary;
  }

</style>
