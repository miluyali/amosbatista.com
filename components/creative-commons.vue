<script>

  export default {

    data: function () {
      return {
      }
    },
    created: function () {
    }
  }

</script>


<template lang="pug">

    .creative-commons
        .icons
            img.icon(src="@/static/creativeCommons/cc.svg")
            img.icon(src="@/static/creativeCommons/by.svg")
            img.icon(src="@/static/creativeCommons/nc.svg")
        .description
            | A menos que eu deixe explícito no conteúdo, esta página está debaixo da licença 
            a.cc-link(href="https://creativecommons.org/licenses/by-nc/4.0/deed.pt_BR")
                |CC BY-NC 4.0 
            |emitida pela Creative Commons, que autoriza o uso não-comercial deste conteúdo. 
            a.cc-link(href="https://creativecommons.org/licenses/by-nc/4.0/deed.pt_BR")
                |Veja mais detalhes neste link.

</template>


<style lang="less">

  @import '../assets/variables.less';
  @import '../assets/mixin.less';

  @cc-color: #bbac81;
  @cc-text-color: rgb(90, 73, 116);


    .creative-commons{
        background-color: @cc-color;
        float: left;
        width: 100%;
        padding: 20px 0;

        .icons{
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 75px;

            .icon{
                margin-right: 10px;
                width: 40px;

                &:last-child{
                    margin-right: 0px;
                }
            }
        }

        .description{
            color: @cc-text-color;
            font-family: @base-font;
            text-indent: 25px;
            margin: 0 20px;

            .cc-link{
                font-weight: bold;
            }
        }
    }
  
</style>