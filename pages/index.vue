<script>

  import vueMeta from '../components/meta.vue'
  import linkStyle from '../components/external-link-style.vue'
  import facebookApp from '../components/facebook-app.vue'
  
  import homeService from '../cms/homeService'
  import httpService from '../requests/http'

  export default {

    data () { 
      return {
        data: [],
        busy: false 
      }
    },
    methods: {
      loadMore: function() {
        this.busy = true;
        console.log("tesste");

        setTimeout(() => {
          for (var i = 0, j = 10; i < j; i++) {
            this.data.push({ name: count++ });
          }
          this.busy = false;
        }, 1000);
      }
    },
    components: { 
      vueMeta,
      facebookApp, 
      linkStyle,
    },

    async asyncData () {
      const posts = await homeService(httpService)

      return {
        meta: {
          title: "Home",
          description: "Site pessoal.",
          thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
          url: ``,
          type: "home"
        },
        posts,
      }
    }
  }

</script>

<template lang="pug">

  .home

    vue-meta(:metadata="meta")
    facebook-app
    link-style

    .header
      a.home-link.fluid-title(href="https://amosbatista.com")
        |amosbatista.com
    
    .main

      .post(v-for="post in posts" v-bind:key="post.id")
        a.title(:href="post.url")
          |{{post.title}}
        .content(v-html="post.content")
    
    .scroller(v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10")
    

</template>



<style lang="less">
  @import '../assets/generic.less';
  @import '../assets/variables.less';
  @import '../assets/mixin.less';
  @import '../assets/objects.less';
  @import '../assets/base.less';

  .home {
    width: 70%;
    margin: auto;
  }

  .header {
    background-color: @color-base-clear;
    padding: 30px 10px 5px;
    font-family: @title-font;
  }

  .fluid-title {
    font-size: 150%;
  }
  @media (min-width: 768px) {
    .fluid-title {
      font-size: 300%;
    }
  }
  .fluid-title:after {
    content: "■";
    margin: 0 8px;
  }
  .fluid-title:last-child:after {
    content: "";
  }

  .home-link {
    color: @color-primary;
  }

  .scroller {
    min-height: 100px;
  }

  .main {
    display: flex;
    flex-direction: column;
    background-color: @color-base-clear;

    .post {
      margin: 40px 0 0;
      font-family: @base-font;
      padding: 10px;
      background-color: @color-base-dark;
      
      .title {
        font-size: 350%;
        color: @color-secundary;
        font-family: @base-font;
        font-weight: @base-font-weigh-base;
      }

      .content {
        color: @color-terciary;

        p {
          margin: 0;
        }
      }
    }
  }


</style>
