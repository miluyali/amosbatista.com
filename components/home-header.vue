<script>
	
</script>

<template>
  <div class="title-component">
    <h1 class="title">
      <span class="comment-chars">
        //
      </span>
      Amós Batista
      <span class="sub-title">.com</span>
    </h1>	
  </div>
</template>

<style lang="less">
	@import '../assets/variables.less';
  @import '../assets/mixin.less';

  .title-component{

    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 75%;
    
    .title{

      padding-left: 20px;
      font-family: @title-font;
      text-transform: uppercase;
      margin: 0;
      line-height: 1;
      color: @color-primary;
      font-size: 200%;

      .comment-chars{
        color: @color-secundary;
      }
    }	
  }
</style>