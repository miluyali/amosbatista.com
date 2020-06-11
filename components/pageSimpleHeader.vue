<script>
  export default {
    data: function () {
      return {}
    },
    props: ['currentPage']
  }
</script>


<template lang="pug">

  .header.title

    span.home
      a(href="/")
        |home 
    span.separator
      |\
    span.portfolio
      | {{currentPage}}
</template>


<style lang="less" scoped>
    
  @import "../assets/variables.less";
  @import '../assets/objects.less';
   
  .header {
    font-size: 75%;
  }

  .home {
    color: hsl(250, 85%, 45%);
  }

  .separator {
    color: hsl(249, 45%, 65%);
    margin: 0 8px 0 4px;
  }

  .portfolio {
    color: hsl(250, 25%, 75%);
  }

</style>