<script>
import metaTags from '~/components/meta'
import postBySlug from '~/cms/loadPostService'
import httpService from '~/requests/http'
import postTitle from '~/components/post-title'
import vueMeta from '~/components/meta.vue'
import linkStyle from '~/components/external-link-style.vue'
import facebookApp from '~/components/facebook-app.vue'
import pgHeader from '~/components/pageSimpleHeader.vue'
import pgFooter from '~/components/pageFooter.vue'

export default {
  components: {
    metaTags, vueMeta, facebookApp, pgHeader, postTitle, linkStyle, pgFooter
  },
  data: function () {
    return {}
  },
  async asyncData ({ params }) {
    const post = await postBySlug(httpService, params.slug)

    return {
      meta: {
        title: post.title,
        description: post.description,
        thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
        url: post.url,
        type: "post"
      },
      post
    }
  }
}
</script>

<template lang="pug">

  .article

    .container
      vue-meta(:metadata="meta")
      facebook-app
      link-style
      pg-header(:currentPage="'blog'")
      
      .content

        header
          p.title
            |{{post.title}}

          .description(v-html="post.description")

        img.thumbnail(:src="post.thumbnail")
        .thumbnail-description(v-html="post.thumbnailDescription")

        .post-content(v-html="post.content")
      
        pg-footer

</template>

<style lang="less">

  @import '../../assets/fontawesome/fontawesome.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/generic.less';
  @import '../../assets/base.less';
  @import '../../assets/objects.less';

  header {
    margin-bottom: 60px;

    .title {
      font-size: 200%;
    }
    .description {
      font-family: @title-font;
      font-size: 80%;
    }
    p {
      margin: 0;
    }
  }
  .thumbnail{
    width: 100%;
    max-width: 300px;
    max-height: 300px;
    margin: 20px auto 0;
    display: block;
  }
  .thumbnail-description {
    font-size: 50%;
    margin: 0;
    text-align: center;
  }
  .content{
    flex-direction: column;
    padding: 30% 30px 10px;
    font-family: @base-font;
    display: flex;
  }

</style>

