<script>

  
  export default {
    props: {
      activate: Boolean,
      type: String
    },
    data () {
      return {
        stampSrc: "",
        stampStatus: "folded",
        TIME_TO_ACTIVATE: 100
      }
    },
    created () {
      this.show(this.activate, this)
    },
    watch: {
      activate: function(value, old){
        this.show(value, this)
      }
    },
    methods : {
      show: (value, self) => {
        if(value){

          var inclinationClass = [
            'incl-1',
            'incl-2',
            'incl-3',
            'incl-4',
            'incl-5'
          ];

          switch(self.type){
            case 'censurado':
              self.stampSrc = '../../censurador/censored_doc.png'; break;
            case 'comRestricao': 
              self.stampSrc = '../../censurador/restricted_doc.png'; break;
            case 'aprovado':
              self.stampSrc = '../../censurador/approved_doc.png'; break;
          }

          setTimeout(function() {
            self.stampStatus = `unfolded ${self.stampStatus}`
          }, self.TIME_TO_ACTIVATE);
        }
      }
    }
  }
</script>

<template lang="pug">
  img.stamp.folded(:src="stampSrc" :class="stampStatus")
</template>

<style lang="less">
   @import '../../assets/mixin.less';

  .stamp{
    max-width: 450px;
    width: 85%;
    position: absolute;
    top: 0;
    left:0 ;
  }

  .folded{
    transform: translateX(100vw);
  }

  .unfolded{
    transform: translateX(0);
    .transiction();
  }

  .incl-1{
    transform: rotate(-15deg) translate(15px, 45px);
  }

  .incl-2{
    transform: rotate(15deg) translate(25px, 55px);
  }

  .incl-3{
    transform: rotate(5deg) translate(30px, 45px);
  }

  .incl-4{
    transform: rotate(-5deg) translate(25px, 45px);
  }

  .incl-5{
    transform: rotate(25deg) translate(20px, 45px);
  }
</style>