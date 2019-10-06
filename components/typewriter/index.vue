<script>

  export default {
    props: {
      content: String
    }
  }
</script>

<template lang="pug">

  span.typewriter
    |{{content}}
</template>

<style lang="less">
  @font-face { 
    font-family: 'Kingthings Trypewriter'; 
    src: url('../../static/fonts/Kingthings_Trypewriter_2.ttf'); 
  } 

  @font: 'Kingthings Trypewriter', monospace;

  .typewriter{
    font-family: @font;
  }

</style>