<template lang="pug">
  .page

    vue-meta(:metadata="meta")
    link-style

    .title-area
      title-paragraph(content="Inktober 2019")

    .description
      h2
        | Estou participando do evento este ano. Seguindo os temas propostos pela página oficial
        a(href="https://inktober.com/rules") (https://inktober.com/rules) 
        | segue a lista dos desenhos feitos:

      p(v-for="post in list")
        a(:href="meta.url + '/' + post.slug")
          title-paragraph(:content="post.title")
    page-footer

</template>
<style lang="less" scoped>
    @import '../../assets/variables.less';

    p, h2{
      text-indent: 25px;
      line-height: 1.7;
      font-size: 117%;
      font-family: @base-font;
      width: 80%;
      margin: 0 auto 40px;
    }

    .title-area{
      display: flex;
      justify-content: center;
      align-content: center;

      width: 100%;
      height: 440px;
      font-size: 500%;
    }

    div{
      position: relative;
    }

    .description{
      margin-bottom: 80px;
    }

</style>
<script>
  import titleParagraph from '../../components/title-paragraph'
  import PostServiceClass from "./postsService"
  import vueMeta from '../../components/meta.vue'
  import linkStyle from '../../components/external-link-style.vue'
  import pageFooter from '../../components/fluidFooter'

  export default {
    components: {
      titleParagraph, vueMeta, linkStyle, pageFooter
    },
    async asyncData () {
      const postService = new PostServiceClass()

      const list = await postService.loadList()

      return {
        meta: {
          title: "Inktober 2019",
          description: "Lista das postagens deste ano.",
          thumbnail: "https://amosbatista.com/thumbnails/home.jpg",
          url: `https://amosbatista.com/inktober2019`,
          type: "home"
        },
        list
      }
    }
  }
</script>