<script>

  export default {

    data: function () {
      return {
        whiteColorClass: this.isColorReverted ? ' white-title' : '',
        fontSizeClass: '' 
      }
    },

    props: {
      content: String,
      isColorReverted: Boolean
    },

    created: function () {
    }
  }

</script>


<template lang="pug">

  .title-paragraph
    h2(:class="'title-paragraph-h' + whiteColorClass")
      |{{content}}

</template>


<style lang="less">

    @import "../assets/variables.less";

    .title-paragraph{

        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 80%;
        padding-left: 20px;

        .title-paragraph-h{
            font-family: @title-font;
            text-transform: uppercase;
            margin: 0;
            line-height: 1;
            color: @color-primary;
            font-size: 200%;
            overflow-wrap: break-word;
        }

        .white-title{
            color: @color-base;
        }
    }

</style>
