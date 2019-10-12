<template lang="pug">
  .cta
    .text
      span
        |Apoie!!
    .bg
      .icon
        i.fa.fa-handshake

</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
  @bg: hsla(224, 44%, 33%, 1);
  @letter: hsla(0, 59%, 52%, 1);

  div{
    width: 100%;
    height: 100%;
    position: relative;
    
    .bg, .text{
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-content: center;
      background-color: @bg;
    }
    .bg{
      animation: flash 3.5s ease 0.1s infinite;
      

      .icon{
        width: 50px;
        height: 50px;
        font-size: 50px;
        margin: auto;
        color: @letter;
      }
    }

    .text{
      span{
        color: @letter;
        margin: auto;
        font-family: 'Fjalla One', sans-serif;
        font-size: 50px;
      }
    }
  }

  @keyframes flash {
    0% {opacity: 1;}
    50% {opacity: 0.1;}
    100% {opacity: 1;}
  }
</style>