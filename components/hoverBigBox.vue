<script>

  import titleParagraph from './title-paragraph.vue'

  export default {

    data: function () {
      return {
        classToAddToBox: ''
      }
    },
    props: ["boxUrl", "isBoxHoverable", "boxSimpleTitle", "isInsideFullSize"],
    components: { titleParagraph },
    created: function () {
      this.classToAddToBox = (!this.isInsideFullSize ? 'content-with-margin' : '' ) + ' ' + (this.isBoxHoverable ? 'hoverable-box' : '')
    }

  }

</script>


<template lang="pug">

  .hover-big-box(:class="classToAddToBox")
    a(:href="boxUrl" target="_blank")
      title-paragraph(:content="boxSimpleTitle")
    slot

</template>


<style lang="less">

  @import '../assets/variables.less';
  @import '../assets/mixin.less';

  @box-size: 225px;

  .hover-big-box{
    .shadow();

    width: @box-size;
    height: @box-size;

    margin: 10px 10px 0 0;
    float: left;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;

    .comment-chars{
        color: @color-secundary;
    }
    
  }

  .content-with-margin {
    padding-left: 20px;

    width: @box-size - 20px;
    height: @box-size;
  }

  .hoverable-box{
    .transiction();

    &:hover{
      .shadow(18px);
      background-color: #fcfcfc;
    }

  }

</style>