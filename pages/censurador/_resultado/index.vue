<script>
  import linkStyle from '~/components/external-link-style.vue'
  import stamp from '~/components/stamp'
  import typewriter from '~/components/typewriter'
  import service from './service'
  import metaVue from '~/components/meta.vue'
  import logo from '~/components/logo-censure-minha-musica'

  export default {
    async asyncData ({ params }) {

      const result = await service(params.resultado)

      return {
        songArtistName: result.songArtistName,
        tipoCarimbo: result.tipoCarimbo,
        detalhes: result.theSong.censorResultList,
        songId: params.resultado,
        urlPagina: result.urlPagina,
        textoResultado: result.tituloResposta,
        descricaoResultado: result.descricaoResposta,
        urlLetra: result.theSong.url,
        meta: {
          title: result.tituloResposta,
          description: result.descricaoResposta,
          thumbnail: `${process.env.SITE_DOMAIN}/${result.urlThumb}`,
          url: "/censurador/" + params.resultado,
          type: "post"
        }
      }
    },
    data: function () {
      return {
        isStampCalled: false
      }
    },
    components: {
      stamp, typewriter, metaVue, logo, linkStyle
    },
    created () {

      var self = this
      
      setTimeout( () => {
        self.isStampCalled = true
      }, 2000)
    }
  }
</script>
<style lang="less">
  @import '../estilo.less';
  @import '../config.less';

  @margem-topo: 50px;

  .titulo-site{
    margin-bottom: 100px;
  }
  .cabecalho{
    width: 100%;
    margin-top: 50px;
    float: left;
  }

  .resultado{
    width: 100%;

    .folha{
      width: 80%;
      background-image: url('../img/template-documento-antigo.jpg');
      background-size: cover;
      background-position: top left;
      margin: @margem-topo auto;
      padding: 15px;
      .sombra(5px);

      .margem{
        overflow: hidden;
        .borda(@cor_Borda_Resultado, 2px);
        padding: 15px;			

        .topo{
          width: 100%;
          float: left;

          .topo-cent{
            margin: auto;
            width: 75%;

            .info{
              font-family: @fontePadrao;
              font-size: 80%;
              text-transform: uppercase;
              text-align: center;
              font-weight: @fontWeight_bold;
              margin: 0;
            }

            .nro-parecer{
              text-orientation: right;
              font-family: @fontMaquinaEscrever;
            }
          }
        }

        .detalhes{
          margin-top: 20px;
          width: 100%;
          float: left;
          
          .info{
            text-transform: uppercase;
            font-weight: @fontWeight_bold;
          }

          .musica-autor{
            min-height: 60px; 
          }

          .resultado-censura{
            height: 100px;
            position: relative;
          }

          .lista-detalhes{

            .item-detalhe{
              margin: 11px 0;
                line-height: 17px;
            }
          }
        }
      }
    }

    .compartilhar{
      width: 15%;
      float: right;
      margin-top: @margem-topo;
      color: @cor_icone_compartilhar;

      .linha{
        float: left;
        padding: 0 10px;
        width: 80%;

        .titulo{
          font-size: 100%;
          text-align: center;
          font-family: @fontMaquinaEscrever;
          width: 90%;
        }
        .link{
          width: 58px;
          font-size: 150%;
          font-weight: @fontWeight_bold;
          padding: 3px 5px;
          .borda-radius();
          margin: 0 0 5px 5px;
          color: @cor_titulo;
          display: inline-block;
          
          text-align: center;

          .conteudo{
            margin: 0;
          }
        }

        .facebook{
          background-color: @cor_link_facebook_bold;
        }

        .twitter{
          background-color: @cor_link_twitter_bold;
        }

        .voltar{
          font-size: 80%;
          background-color: @cor_voltar;
          font-family: @fontePadrao;
        }

        .ver-letra{
          font-size: 80%;
          background-color: @cor_verLetra;
          font-family: @fontePadrao;
        }
      }

      
    }
  }

  @media (max-width: 1000px){

    .resultado{

      .folha{
        width: 90%;
      }

      .compartilhar{
        width: 100%;

        .link{
          margin: 0px 0 0 10px;
        }
      }
    }
  }


  .maquina-escrever{
    font-family: @fontMaquinaEscrever;
  }

</style>
<template lang="pug">
  .resultado
    link-style
    meta-vue(:metadata="meta")
    
    .folha
      .margem
        .topo
          .topo-cent
            p.info Ministério da Justiça
            p.info Departamento de Polícia Federal
            p.info Divisão de Censura de Diversões Públicas
            p.info Nº do Parecer: 
              span.nro-parecer
                |{{songId}}

        .detalhes
          p.info.musica-autor Música e Autor: 
            a(:href="urlLetra" target="_blank")
              typewriter(:content="songArtistName")

          p.info.resultado-censura Parecer:
            stamp(:type="tipoCarimbo" :activate="true")

          p.info Detalhes:
          ul.lista-detalhes
            li.item-detalhe.maquina-escrever(v-for="detalhe in detalhes")
              |- {{detalhe.feedBack}} 
              i
                |("...{{detalhe.censorExcerpt}}...")
    logo
</template>