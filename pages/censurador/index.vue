<template lang="pug">
  .ocultar.container-loading-screen.transicao

    .ocultar#loadScreen.loading-screen

      h2.titulo.titulo-site#loadScreen_Titulo

      .detalhes-descricao
        .icone
          i.fa.fa-refresh.fa-spin.fa-fw

        p.descricao#loadScreen_Descricao
          

    .ocultar#errorScreen.error-screen

      h2.titulo.titulo-site#errScreen_Titulo

      .detalhes-descricao
        .icone
          i.fa.fa-times

        p.descricao#errScreen_Descricao
          
        a.botao.link-retorno#errScreen_Link(data-ui-sref="home")

</template>

<style lang="less">

  @import './estilo.less';

  .container-loading-screen{

    .transicao();

    z-index: 2;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: @cor_loadingScreen_bg;

    .loading-screen,
    .error-screen{
      position: absolute;
      width: 100%;
      height: 190px;
      background-color: @cor_loadingScreen_bg;		
      top: 25%;
      left: 0px;
      .transicao();
      color: @cor_texto;

      .titulo{
        width: 75%;
        margin: auto;
      }

      .detalhes-descricao{
        width: 75%;
        margin: auto;
        font-family: @fontePadrao;

        .icone{
          font-size: 300%;
          width: 15%;
          float: left;
        }

        .descricao{
          margin: 0;
          width: 85%;
          float: left;
        }

        .link-retorno{
          color: @cor_texto;
          background-color: @cor_Erro;
          margin-top: 10px;
        }
      }
    }
  }

  @media (max-width: 600px){

    .container-loading-screen{

      .loading-screen,
      .error-screen{
        
        .detalhes-descricao{

          .icone,
          .descricao{
            width: 100%;
          }

        }
        .titulo{
          font-size: 320%;
        }
      }
    }
  }
</style>