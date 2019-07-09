<script>
import metaTags from '../../components/meta'
import baseStyle from '../../components/external-link-style'
import box from '../../components/hoverBigBox'
import postBySlug from '../../ghost.io/getPostBySlug'
import httpService from '../../requests/http'

export default {
  components: {
    metaTags, baseStyle, box
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

  .bg

    meta-tags(:metadata="meta")
    base-style

    .container

      h1.title
        | {{post.title}}
      h2.short-description
        | {{post.description}}
      
      |{{post.content}}
</template>

<style lang="less">

  


</style>

