<script>
import metaTags from '~/components/meta'
import box from '~/components/hoverBigBox'
import postBySlug from '~/ghost.io/getPostBySlug'
import httpService from '~/requests/http'
import postTitle from '~/components/post-title'
import vueMeta from '~/components/meta.vue'
import linkStyle from '~/components/external-link-style.vue'
import facebookApp from '~/components/facebook-app.vue'
import pgHeader from '~/components/pageHeader.vue'
import pgFooter from '~/components/pageFooter.vue'

export default {
  components: {
    metaTags, box, vueMeta, facebookApp, pgHeader, postTitle, linkStyle, pgFooter
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
  .container
  
    vue-meta(:metadata="meta")
    facebook-app
    link-style

    pg-header
    
    box(large)
      img.thumbnail(:src="post.thumbnail")

    box(large)
      post-title(
        :title="post.title"
        :resume="post.description")

    box(large invisible)
      .content(v-html="post.content")
    
    pg-footer

</template>

<style lang="less">

  @import '../../assets/fontawesome/fontawesome.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/generic.less';
  @import '../../assets/base.less';
  @import '../../assets/objects.less';

  .thumbnail{
    width: 35%;
    margin: 0 auto;
    display: block;
  }
  .content{
    text-indent: 25px;
    padding: 10px 30px;
    line-height: 1.7;
    font-size: 117%;
    font-family: @base-font;
  }

</style>

