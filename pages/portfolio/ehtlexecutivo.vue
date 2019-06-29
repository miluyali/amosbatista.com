<script>

  import post from '~/components/post-title.vue'
  import box from '~/components/box.vue'
  import topic from '~/components/topic.vue'
  import pgHeader from '~/components/pageHeader.vue'
  import myLink from '~/components/myLink.vue'
  import portfolioPost from '~/layout_vue/portfolio.vue'
  import bigLink from '~/components/bigLink.vue'

    export default {

      components: {
          post, box, pgHeader, topic, myLink, portfolioPost, bigLink
      },

      data: function () {
        return {
          meta: {
            title: "E-htl Executivo - Aplicativo",
            description: "Desenvolvimento de aplicativo de gestão de carteira de clientes na área de turismo.",
            thumbnail: "https://amosbatista.com/thumbnails/masterrow-logo.jpg",
            url: "/portfolio/ehtlexecutivo",
            type: "post"
          },
        }
      }
    }

</script>

<template lang="pug">
  .container
    portfolio-post(title="E-htl Executivo - Aplicativo" :meta="meta")
      paragraph(slot="whatsIsThis")
        p
          | O aplicativo é uma ferramenta para executivos da E-HTL gerirem seus clientes. Estes eram agências de turismo que forneciam hoteis para a empresa poder fazer reserva pelo seu sistema.
      paragraph(slot="necessity")
        p
          | O consultor precisava ter facilmente informaççoes de seus clientes, como localidade e receitas. Além disto, dada a quantidade de clientes que um executivo poderia ter, era impossível saber até mesmo se uma agência estava atva ou não. O executivo precisa desta agilidade de obter informações.
      
      paragraph(slot="concept")
        p
          | O aplicativo precisava trazer todas as informações em apenas uma tela; foi decidido que ele se basearia num mapa, onde informaria onde estavam todos os clientes, e a situação dele.
      paragraph(slot="development")
        p
          | Como já havia um layout pronto, eu optei por criar o aplicativo via Cordova, já que é fácil migrar um site pronto para esta tecnologia. Para agilizar a navegação, tornei o projeto em Single Page Application (SPA) para evitar recarregamento das páginas. O framework utilizado foi o Angular 1. 
        p
          | Foi usado o Google Maps para visualização de mapas. Uma grande vantagem de se usar o Angular eram as bibliotecas que já traziam soluções que precisavamos usar, como uso de marcadores e legendas no mapa.
      paragraph(slot="retro")
        p
          | O projeto levou cerca de 5 meses para ficar pronto. Foi minha primeira experiência com Cordova, e fiquei satisfeito com o resultado, apesar da dificuldade em configurar o projeto para começar a desenvolver. 
      
      paragraph(slot="source")
        big-link(url="https://play.google.com/store/apps/details?id=br.com.ehtl.executivo")
        
      
</template>



<style lang="less">
    
    

</style>