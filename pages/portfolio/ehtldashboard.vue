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
            title: "E-htl Dashboard - Website interno",
            description: "Criação de dashboard para acompanhamento de métricas importantes, desde vendas até funcionamento de instâncias AWS.",
            thumbnail: "https://amosbatista.com/thumbnails/masterrow-logo.jpg",
            url: "/portfolio/ehtldashboard",
            type: "post"
          },
        }
      }
    }

</script>

<template lang="pug">
  .container
    portfolio-post(title="E-htl Dashboard - Website interno" :meta="meta")
      paragraph(slot="whatsIsThis")
        p
          |O dashboard E-HTL foi criado para exibir informações importantes para a companhia, para monitoramento de produção e ajuda na tomada de decisões. 
      paragraph(slot="necessity")
        p
          | O sistema tem a capacidade de informar métricas de perfomance de equipe operacional, situação de servidores e instâncias Amazon, e alertas de erros, como falhas de conexão ou instâncias fora do ar.
      
      paragraph(slot="concept")
        p
          | O site precisava trazer as informações essencias para cada setor. Precisava ser claro, simples e adaptavel para qualquer tela (computador ou tela). 
        p
          | Para facilitar todo este processo, precisava contar com uma aplicação BFF, que conseguisse ler os dados de vários fontes e gerir todo este conteudo, para poder trazer conteudo de fácil manuseio pelo site e na hora certa.
      paragraph(slot="development")
        p
          | Este projeto foi feito em duas partes: um servidor, que recebe uma lista de endpoints de diversas API's, como listas de notícias RSS, previsão do tempo e cotações. 
        p
          | O servidor faz a leitura, processamento e envio destas informações para a outra parte do sistema, a página do Dashboard, que exibe os dados em painéis informativos ou em gráficos.
        p
          |A transmissão dos dados é feita via socket, um meio de transmissão assíncronas de dados. Isto foi feito com auxílio da ferramenta Socket.IO.

      paragraph(slot="retro")
        p
          | O projeto levou cerca de 3 meses para ficar pronto. Foi um desafio trazer as informações essencias para esta ferramenta, pois alguma fonte de dados poderia quebrar, como um RSS de um site de notícias. E tambem o dashboard precisava ser redundante, pois os sinais do Wifi poderiam cair a qualquer hora. Mas no geral, o resultado foi positivo.        
      
</template>



<style lang="less">
    
    

</style>