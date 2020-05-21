<script>

  export default {

    data: function () {
      return {
          links: [
              {
                  text: "amosbatista.com",
                  url: "/"
              },
              {
                  text: "portfolio",
                  url: "/portfolio"
              },
              {
                  text: "topo",
                  url: "#"
              }
          ]
      }
    }
  }

</script>


<template lang="pug">

  .fluid-footer
    a.link.title(v-for="link in links" :href="link.url")
      |{{link.text}} / 
    span.link
      | obrigado pela visita

        
</template>


<style lang="less">

  @import '../assets/variables.less';
  @import '../assets/mixin.less';

  .fluid-footer{
      padding: 25px;
      background-color: @color-primary;
      float: left;
      width: 100%;
      box-sizing: border-box;

      .link{
          color: @color-base;
          font-family: @title-font;
      }
  }
    
</style>