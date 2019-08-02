<script>
import metaTags from '~/components/meta'
import box from '~/components/hoverBigBox'
import postBySlug from '~/ghost.io/getPostBySlug'
import httpService from '~/requests/http'
import postTitle from '~/components/post-title'
import vueMeta from '~/components/meta.vue'
import linkStyle from '~/components/external-link-style.vue'
import facebookApp from '~/components/facebook-app.vue'
import pgFooter from '~/components/pageFooter.vue'
import titleParagraph from '~/components/title-paragraph'

export default {
  components: {
    metaTags, box, vueMeta, facebookApp, postTitle, linkStyle, pgFooter, titleParagraph
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
  .caderno1
    .container
      vue-meta(:metadata="meta")
      facebook-app
      link-style

      .content(v-html="post.content")

      a.go-home(href="/")
        title-paragraph(:is-color-reverted="true" content="Ir para home")

    pg-footer

</template>

<style lang="less">

  @import '../../assets/fontawesome/fontawesome.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/generic.less';
  @import '../../assets/base.less';
  @import '../../assets/objects.less';

  body{
    background-color: @color-primary;
  }
  .container{
    height: inherit;
    padding: 0 0 100px 0;
  }
  .content{
    padding: 10px 30px;
    line-height: 1.7;
    font-size: 117%;
    font-family: @base-font;
    color: @color-base-clear;
  }
  .go-home{
    text-align: right;
    font-size: 65%;
  }

</style>

