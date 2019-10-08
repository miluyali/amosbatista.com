<script>
  import linkStyle from '~/components/external-link-style.vue'
  import campoBusca from '~/components/campoBuscaMusica'
  import persistence from '~/components/campoBuscaMusica/simpleSessionStoragesService'

  export default {
    data () {
      return {
        buscaGeral: "",
        resultadoBusca: null
      }
    },
    methods: {
      fazerResultado: function(){
        const resultadoBusca = persistence.song.get()
        this.$nuxt.$router.replace({
          path: `/censurador/${resultadoBusca.idAPI}`
        }) 
      }	
    },
    components: {
      linkStyle,
      campoBusca
    },
   created () {
      this.buscaGeral = "";
    }
  }
</script>
<template lang="pug">

  .conteudo-central
    .bg
      .bg-degrade
  
    link-style

    h1.titulo-site
      | Censure minha música!
    p.descricao
      | Como seria se em pleno séc. 21, ainda estivéssemos sob Regime Militar? Será que todas as músicas que ouvimos hoje seriam permitidas em plena época de Ditadura? Descubra se seu artista favorito sofreria censura. 
    
    campo-busca(
      placeholder="Informe o nome da música ou artista"
      placeholder-with-artist="Informe o nome da música")

    .confirmacao-pesquisa

      //- Reservado para detector de robô

      button.btn-pesquisa(v-on:click="fazerResultado()" tabindex="3")
        |Iniciar Censura

        span.icone
          i.fa.fa-gavel
  //- .ocultar.container-loading-screen.transicao

  //-   .ocultar#loadScreen.loading-screen

  //-     h2.titulo.titulo-site#loadScreen_Titulo

  //-     .detalhes-descricao
  //-       .icone
  //-         i.fa.fa-refresh.fa-spin.fa-fw

  //-       p.descricao#loadScreen_Descricao
          

  //-   .ocultar#errorScreen.error-screen

  //-     h2.titulo.titulo-site#errScreen_Titulo

  //-     .detalhes-descricao
  //-       .icone
  //-         i.fa.fa-times

  //-       p.descricao#errScreen_Descricao
          
  //-       a.botao.link-retorno#errScreen_Link

</template>

<style lang="less">

  @import './estilo.less';


  .titulo-site{
    font-family: @fonteDestaque	;
    color: @cor_titulo;
    text-align: center;
    font-size: 500%;
    text-transform: uppercase;
    letter-spacing: -6px;
    line-height: 90%;
    .sombra-texto(2px);
  }

  .conteudo-central{
    /*display: flex;
    align-items: center;*/
    width: 75%;
    margin: 0 auto;

    .titulo-site{
      width: 575px;
        margin: 50px auto 0 auto;
        font-size: 500%;
    }

    .descricao{
      font-family: @fontMaquinaEscrever;
      text-align: justify;
      color: @cor_titulo;
      line-height: 90%;
    }

    .confirmacao-pesquisa{
      width: 100%;
      padding: 15px 0;

      .btn-pesquisa{
        padding: 10px;
        font-size: 100%;
        font-weight: @fontWeight_bold;
        color: @cor_titulo;
        float: right;
        background-color: @cor_botao_pesquisar;
        .borda-radius();

        &:hover{
          background-color: @cor_botao_pesquisar_hover;
        }

        &[disabled]{
          background-color: @cor_botao_pesquisar_desabilitado;
        }

        .icone{
          margin-left: 5px;
        }
      }
    }
  }

  @media(max-width: 700px){

    .conteudo-central{

      .titulo-site{
        width: auto;
        font-size: 400%;
      }	
    }
  }

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