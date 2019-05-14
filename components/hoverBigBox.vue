<script>

  import titleParagraph from './title-paragraph.vue'

  export default {

    data: function () {
      return {
        classToAddToBox: '',
        boxWidth: ''
      }
    },
    props: {
      boxUrl: String,
      isBoxHoverable: Boolean, 
      boxSimpleTitle: String, 
      isInsideFullSize: Boolean, 
      small: Boolean,
      medium: Boolean, 
      large: Boolean
    },
    components: { titleParagraph },
    created: function () {

      let boxWidth = "medium-size"

      if(this.small){
        boxWidth = "small-size"
      }

      if(this.large){
        boxWidth = "large-size"
      }

      if(this.medium){
        boxWidth = "medium-size"
      }

      this.classToAddToBox = 
        // (!this.isInsideFullSize ? 'content-with-margin' : '' ) + 
        // ' ' + 
        (this.isBoxHoverable ? 'hoverable-box' : '') +
        ' ' +
        boxWidth
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

  .hover-big-box{
    .shadow();

    box-sizing: content-box;

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
  }

  .hoverable-box{
    .transiction();

    &:hover{
      .shadow(18px);
      background-color: #fcfcfc;
    }

  }

  .small-size {
    width: 25%;
    height: 25%;
  }

  .medium-size {
    width: 50%;
    height: 25%;
  }

  .large-size {
    width: 100%;
    height: auto;
  }

</style>