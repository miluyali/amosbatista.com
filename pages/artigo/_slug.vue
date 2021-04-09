<script>
import metaTags from '~/components/meta'
import box from '~/components/hoverBigBox'
import postBySlug from '~/cms/loadPostService'
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

    vue-meta(:metadata="meta")
    facebook-app
    link-style

    .container

      .top
        .title
          |{{post.title}}
      .content.text-from-blog(v-html="post.content")

    pg-footer

</template>

<style lang="less">

  @import '../../assets/fontawesome/fontawesome.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/generic.less';
  @import '../../assets/base.less';
  @import '../../assets/objects.less';

  .top {
    margin: 17vh 0 10vh;
  }
  .content{
    padding: 10px 0 20vh;
    line-height: 1.7;
    font-family: @base-font;
    color: @color-terciary;
    display: flex;
    flex-direction: column;
    font-size: 110%;
  }
  
  .go-home{
    text-align: right;
    font-size: 65%;
  }

</style>

