<script>

  export default {

    data () {
      return {
        title: "",
        description: ""
      } 
    },

    created () {
      
      const firstPost = await requestService.get(
        `${process.env.BLOG_URL}/ghost/api/v2/content/posts/?key=${process.env.BLOG_REQUEST_KEY}&fields=title,url,custom_excerpt`
      )
    }
  }

</script>


<template>
    
    <div class="box">
        <slot>
        </slot>
    </div>

</template>


<style lang="less">
   

</style>