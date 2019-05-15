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
            title: "AmosBatista.com - Website",
            description: "Criação do meu site para divulgação profissional.",
            thumbnail: "https://amosbatista.com/thumbnails/masterrow-logo.jpg",
            url: "/portfolio/amosBatista",
            type: "post"
          },
        }
      }
    }

</script>

<template lang="pug">
  .container
    portfolio-post(title="Amos Batista - Website" :meta="meta")
      paragraph(slot="whatsIsThis")
        p
          | O amosBatista.com é o meu site pessoal, e profissional. Foi criado em 2018.
      paragraph(slot="necessity")
        p
          | Ao começar a minha carreira profissional em front-end, precisava aprender a criar um site do zero. Desde a concepção do layout, o seu conteúdo, até a gestão dele, com a compra do domíniop, hospedagem, etc. 
      paragraph(slot="competitor")
        p
          | Existem varios frameworks no mercado que criam um site pronto para você. Além disto, as redes sociais para trabalho, como o Linkedin, permitem que você crie e compartilhe o seu perfil profissional. Mas, tenho algumas criticas ao terceirizar o meu perfil em redes sociais, como ser obrigado a aceitar as limitações da ferramenta.
        p
          | Como desenolvedor web, acredito que ele precisa saber criar um site de ponta a ponta.
      paragraph(slot="concept")
        p
          | Eu queria sair do roteiro Wordpress e usar uma nova tecnologia da área. Com vários frameworks no mercado, decidi pelo VUE, por causa do seu tamanho e pela facilidade de organizar o seu código. 
        p
          | Com experiẽncia na criação de dashboards, pensei no conceito de cardds, um layout sério e simples. Mesmo sem imagens, apenas usando links, precisaria me valer de conceitos como valores e peso de cores para melhorar a experiẽncia de navegação 
      paragraph(slot="development")
        p
          | Desenlvolvi o site usando o Nuxt.js, que permite criar uma página em VUE e disponibiliza ela via servidor. O que permite processamento de dados server-side e o SEO para sites de busca. Com o projeto pronto, hospedei o site na Umbler , que tem uma grande vantagem de ter um preço barato e é muito fácil de usar.
      paragraph(slot="retro")
        p
          | o site vai estar em constante crescimento, pretendo criar um blog para esta página e utiliza-la como laboratório. Ao mesmo tempo, estou refketindo se pretendo continuar a diexar a págiina facada em desenvolvimeto web ou se pretendo expandi-la para outros assuntos, pois tambpemm sou artista plástico  e escritor.
      
      paragraph(slot="source")
        big-link(url="https://github.com/amosbatista/amosbatista.com")
        
      
</template>



<style lang="less">
    
    

</style>