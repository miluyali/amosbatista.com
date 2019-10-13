<template lang="pug">
  .page

    vue-meta(:metadata="meta")
    link-style

    .content(v-html="post.content")
    
    page-footer

</template>
<style lang="less" scoped>
    @import '../../../assets/variables.less';

    .content{
      text-indent: 25px;
      line-height: 1.7;
      font-size: 117%;
      font-family: @base-font;
      width: 80%;
      margin: 0 auto 40px;
    }

    img{
      margin: 20px auto;
    }

</style>
<script>
  import titleParagraph from '~/components/title-paragraph'
  import PostServiceClass from "../postsService"
  import vueMeta from '~/components/meta.vue'
  import linkStyle from '~/components/external-link-style.vue'
  import pageFooter from '~/components/fluidFooter'
  import postBySlug from '~/ghost.io/getPostBySlug'
  import httpService from '~/requests/http'

  export default {
    components: {
      titleParagraph, vueMeta, linkStyle, pageFooter
    },
    async asyncData ({ params }) {
      const postService = new PostServiceClass()
      const postList = await postService.loadList()

      const post = await postBySlug(httpService, params.image)

      return {
        meta: {
          title: post.title,
          description: post.description,
          thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
          url: `https://amosbatista.com/inktober2019/${params.image}`,
          type: "home"
        },
        post,
        postList
      }
    }
  }
</script>