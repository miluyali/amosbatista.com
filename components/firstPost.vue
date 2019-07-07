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
    created: function () {

      firstPostService(httpService).then((post)=>{
        this.title = post.title
        this.description = post.description
      })
    }
  }

</script>


<template lang="pug">
  a.link(href="#")
    title-paragraph(:content="title")
</template>


<style lang="less">
   

</style>