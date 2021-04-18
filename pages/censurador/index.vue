<script>
  import linkStyle from '~/components/external-link-style.vue'
  import campoBusca from '~/components/campoBuscaMusica'
  import persistence from '~/components/campoBuscaMusica/simpleSessionStoragesService'
  import vueMeta from '~/components/meta.vue'
  import logo from '~/components/logo-censure-minha-musica'

  export default {
    data () {
      return {
        buscaGeral: "",
        resultadoBusca: null,
        goingNextPage: false,
        goingPrevPage: false,
        meta: {
          title: "Censure minha música!!",
          description: "Como seria se em pleno séc. 21, ainda estivéssemos sob Regime Militar? Confira agora antes que seja tarde!!",
          thumbnail: "https://amosbatista.com/censurador/print-tela-censurador.jpg",
          url: `/censurador`,
          type: "post"
        }
      }
    },
    methods: {
      fazerResultado: function(){
        this.goingNextPage = true;
        const resultadoBusca = persistence.song.get()
        this.$nuxt.$router.replace({
          path: `/censurador/${resultadoBusca.idAPI}`
        }) 
      },
      voltar: function () {
        this.goingPrevPage = true;
        this.$nuxt.$router.replace({
          path: `/`
        }) 
      }
    },
    components: {
      linkStyle,
      campoBusca,
      vueMeta,
      logo
    },
   created () {
      this.buscaGeral = "";
    }
  }
</script>
<template lang="pug">

  .conteudo-central
    link-style
    link(href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet")
    vue-meta(:metadata="meta")

    .bg
      .bg-degrade
  
    .titulo-site-logo
      logo

    p.descricao
      | Como seria se em pleno séc. 21, ainda estivéssemos sob Regime Militar? Será que todas as músicas que ouvimos hoje seriam permitidas em plena época de Ditadura? Descubra se seu artista favorito sofreria censura. 
    
    campo-busca(
      placeholder="Informe o nome da música ou artista"
      placeholder-with-artist="Informe o nome da música")

    .confirmacao-pesquisa

      //- Reservado para detector de robô

      button.btn.btn-pesquisa(v-on:click="fazerResultado()" tabindex="3")
        |Iniciar Censura

        span.icone
          i.fa.fa-gavel(v-if="!goingNextPage")
          i.fa.fa-spinner.fa-spin.fa-fw(v-if="goingNextPage")
      
      button.btn.btn-cancelar(v-on:click="voltar()" tabindex="3")
        |Voltar para o site

        span.icone
          i.fa.fa-times-circle(v-if="!goingPrevPage")
          i.fa.fa-spinner.fa-spin.fa-fw(v-if="goingPrevPage")
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

  .conteudo-central{
    /*display: flex;
    align-items: center;*/
    width: 75%;
    margin: 0 auto;
    padding-bottom: 125px;

    .titulo-site-logo {
      max-width: 600px;
      margin: 50px auto;
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

      .btn{
        padding: 10px;
        font-size: 100%;
        font-weight: @fontWeight_bold;
        color: @cor_titulo;
        float: right;
        border-radius: 10px;
        border: 0;
        margin: 0 0 10px 10px;

        .icone{
          margin-left: 5px;
        }
      }

      .btn-cancelar {
        background-color: @cor_botao_cancelar;

        &:hover{
          background-color: @cor_botao_cancelar_hover;
        }

        &[disabled]{
          background-color: @cor_botao_cancelar_desabilitado;
        }
      }
      .btn-pesquisa {
        background-color: @cor_botao_pesquisar;

        &:hover{
          background-color: @cor_botao_pesquisar_hover;
        }

        &[disabled]{
          background-color: @cor_botao_pesquisar_desabilitado;
        }
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