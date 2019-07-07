<script>

  import firstPostService from '../ghost.io/firstPostService'
  import httpService from '../requests/http'
  import titleParagraph from './title-paragraph.vue'

  export default {

    data () {
      return {
        title: "",
        description: ""
      } 
    },
    components: { titleParagraph },

    async asyncData () {
      console.log("teste")

      const post = await firstPostService(httpService)

      return {
        title: "post.title",
        description: post.description
      }
    }
  }

</script>


<template lang="pug">
  a.link(href="#")
    |{{title}}
    title-paragraph(:content="title")
</template>


<style lang="less">
   

</style>