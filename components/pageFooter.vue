<script>
  
  import creativeCommons from "./creative-commons"
  import deFacto from "./fluidFooter"

  export default {

    data: function () {
      return {
      }
    },
    created: function () {
    },
    components: {creativeCommons,deFacto}
  }

</script>


<template lang="pug">

    footer
        creative-commons
        de-facto

</template>


<style lang="less">
    footer{
        float: left;
        width: 100%;
    }
</style>