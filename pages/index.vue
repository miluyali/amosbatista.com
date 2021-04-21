<script>

  import vueMeta from '../components/meta.vue'
  import linkStyle from '../components/external-link-style.vue'
  import facebookApp from '../components/facebook-app.vue'
  
  import homeService from '../cms/homeService'
  import httpService from '../requests/http'

  export default {

    data () { 
      return {
        page: 1,
        isLoadingContent: false,
        isOnEndOfStream: false,
      }
    },
    methods: {
      loadMore: async function() {
        if(this.isOnEndOfStream) {
          return;
        }

        this.isLoadingContent = true;
        this.page++;
        
        const newContent = await homeService(httpService, this.page);

        if(newContent.length <= 0){
          this.isOnEndOfStream = true;
          this.page--;
        }
        else{
          this.posts = this.posts.concat( newContent);
        }

        this.isLoadingContent = false;
      }
    },
    components: { 
      vueMeta,
      facebookApp, 
      linkStyle,
    },

    async asyncData () {
      const posts = await homeService(httpService, 1)

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

  .home-page

    vue-meta(:metadata="meta")
    facebook-app
    link-style

    .header
      a.home-link.fluid-title(href="https://amosbatista.com")
        |amosbatista.com
      a.censurador-link.fluid-title(href="https://amosbatista.com/censurador")
        |Censure minha música

    .container

      .main
        .post(v-for="post in posts" v-bind:key="post.id")
          a.title(:href="post.url")
            |{{post.title}}
          .content(v-html="post.content")
      
      .scroller(v-infinite-scroll="loadMore" infinite-scroll-disabled="isLoadingContent" infinite-scroll-distance="500")
        p.loading-icon.small-blink(v-if="isLoadingContent")
          i.fa.fa-terminal
        p.stream-end-message(v-if="isOnEndOfStream")
          | Você leu todo o conteúdo disponível nesta página. Muito obrigado pelo seu interesse, isto significa muito para mim. 
          br
          |Confira outras páginas para mais conteúdo.


</template>



<style lang="less">
  @import '../assets/generic.less';
  @import '../assets/variables.less';
  @import '../assets/mixin.less';
  @import '../assets/objects.less';
  @import '../assets/base.less';

  .home-page {
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
  }

  .main {
    display: flex;
    flex-direction: column;
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
  }


</style>
