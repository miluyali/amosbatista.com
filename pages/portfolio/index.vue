<script>

  import post from '~/components/post-title.vue'
  import box from '~/components/box.vue'

  import postTitle from '~/components/post-title.vue'
  import myLink from '~/components/myLink.vue'
  import pgHeader from '~/components/pageSimpleHeader-portfolio.vue'
  import vueMeta from '~/components/meta.vue'
  import linkStyle from '~/components/external-link-style.vue'
  import facebookApp from '~/components/facebook-app.vue'
  import pgFooter from '~/components/pageFooter.vue'

  export default {

    components: { postTitle, box, myLink, pgHeader, vueMeta, linkStyle, facebookApp, pgFooter },

    data: function () {
      return {
        meta: {
          title: "Portfolio",
          description: "Veja em detalhes os maiores projetos que participei",
          thumbnail: "https://amosbatista.com/thumbnails/portfolio.jpg",
          url: "/portfolio",
          type: "list"
        },
        portfolios: [
          {
            title: "Migração Kofax Capture",
            type: 'Refatoração', 
            resume: "Remodelação dos processos de digitalização na Iron Mountain do Brasil",
            url: "/portfolio/kofaxCapture"
          },

          {
            title: "MasterRow",
            type: 'Framework', 
            resume: "Ferramenta escrita em puro JavaScript para criação de tabelas dinâmicas",
            url: "/portfolio/masterrow"
          },

          {
            title: "AmosBatista.com",
            type: 'Website', 
            resume: "Criação do meu site para divulgação profissional.",
            url: "/portfolio/amosBatista"
          },

          {
            title: "E-htl Executivo",
            type: 'Aplicativo', 
            resume: "Desenvolvimento de aplicativo de gestão de carteira de clientes na área de turismo. ",
            url: "/portfolio/ehtlexecutivo"
          },

          {
            title: "E-htl Dashboard",
            type: 'Website interno', 
            resume: "Criação de dashboard para acompanhamento de métricas importantes, desde vendas até funcionamento de instâncias AWS. ",
            url: "/portfolio/ehtldashboard"
          },

          {
            title: "Catho 2.0",
            type: 'Aplicativo', 
            resume: "Criação da nova versão do aplicativo. Comunicação entre o candidato e o recrutador, e recebimento de convites de entrevistas.",
            url: "/portfolio/cathoApp"
          }
        ]
      }
    }
  }

</script>

<template>

  <div class="container">
    <vue-meta :metadata="meta" />
    <facebook-app />
    <link-style />
    <pg-header />

    <ul class="list">
      <li class="item" v-for="post in portfolios" :key="post.title">
        <my-link :url="post.url">
          <p class="title">
            {{post.title}}
          </p>
          <p>
            {{post.resume}}
          </p>
        </my-link>
      </li>
    </ul>
    
    <pg-footer />
  </div>
</template>

<style lang="less" >
  @import '../../assets/base.less';
  @import '../../assets/generic.less';
  @import '../../assets/variables.less';
  @import '../../assets/mixin.less';
  @import '../../assets/objects.less';

  .item {
    margin-bottom: 32px;
  }

  .title {
    font-size: 120%;
  }
  p {
   font-size: 75%;
   margin: 0; 
  }

</style>