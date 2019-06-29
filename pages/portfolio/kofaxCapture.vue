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
            title: "Kofax Capture - Refatoração",
            description: "Remodelação dos processos de digitalização na Iron Mountain do Brasil.",
            thumbnail: "https://amosbatista.com/thumbnails/masterrow-logo.jpg",
            url: "/portfolio/kofaxCapture",
            type: "post"
          },
        }
      }
    }

</script>

<template lang="pug">
  .container
    portfolio-post(title="Kofax Capture - Refatoração" :meta="meta")
      paragraph(slot="whatsIsThis")
        p
          | Foi a remodelação do processo de digitalização de documentos na Iron Mountain do Brasil. Ela foi feita em 2015 e levou cerca de 9 meses para ser concluída.
      paragraph(slot="necessity")
        p
          | Os processos estavam espalhados em todas as unidades Iron Mountain que trabalhavam com Kofax Capture na época (São Paulo, Rio de Janeiro, Curitiba e Brasília). Eram cerca de 150 processo no total, atendendo a grandes clientes, como Dasa, Unibanco e Mapfre. A publicação destes projetos eram manuais quando feitas em outros estados, tendo que recorrer a acesso remoto ou até mesmo presencial.
        p
          | Além disto, os sistemas Kofax eram separados entre si, e as versões não eram unificadas, causando diversas falhas de sistema. E as licenças de uso do Kofax eram separadas, havendo filiais com um número de licenças sobrando e outras em falta.
        p
          | E por último, a Iron Mountain passava por um processo de modernização de processos, utilizando sites para centralizar a visualização e enviando os documentos digitalizados para APIs de outros clientes. E os processos de recebimentos de outros estados era manual.
        p
          | Centralizar todo este processo era essencial.
      paragraph(slot="competitor")
        p
          | A Iron Mountain sempre teve concorrentes aqui no Brasil, e era arriscado manter todo um sistema falho com novas tecnologias chegando de fora do Brasil e clientes com necessidades especiais de digitalização (envio dos documentos para API, processos de BPM, etc.).
      paragraph(slot="concept")
        p
          | O maior desafio da migração não era o tamanho (mais de 150 projetos), ou a distância das unidades, ou a complexidade do sistema Kofax Capture. O maior desafio era encarar estas dificuldades e manter a Iron Mountain funcionando, pois sempre havia novos clientes para atender, e a digitalização tinha uma grande importância para a empresa.
      paragraph(slot="development")
        p
          | Com mais de 5 anos de carreira na Iron, fui encarregado de comandar esta migração. Junto com outros 2 desenvolvedores em São Paulo, mais o apoio de Infra e das equipes de todos os estados, listamos todos os processos que estavam em funcionamento. Definimos o que seria prioridade e o tempo que cada processo deveria levar. Contamos o tempo de migração do sistema e esforços necessários para isto, sem que precisassemos parar a empresa. Com tudo isto, montammos um plano de migração.
        p
          | Após apresentarmos o plano para todos os gestores da empresa, começamos a migração. Ela se iniciou com a criação do servidor central Kofax, onde colocamos todos os projetos. E então, para cada cliente, fizemos a migração de seus respectivos projetos. Depois de cada migração, faziamos o treinamento de todos os funcionários da área.
        p
          | Nossa prioridade foi em projetos menores, mas que tinham maior importância para a Iron Mountai. Por ser um processo que iria demorar, precisavamos mostrar o valor da migração com urgência; e trabalhar com projetos que não eram muito complexos facilitava a correção de algum problema.
        p
          | Após migrarmos as unidades de São Paulo, combinamos a equipe para decidirmos quais unidades tinham que ser migradas. Lembrando que, como as unidades não estava integradas, era obrigatório ir para os outros estados fazer a migração manualmente. Seguimos a mesma lógica que usamos em São Paullo para migrarmos as unidades.
      paragraph(slot="retro")
        p
          | A migração acabou sendo um sucesso, hoje em dia a Iron Mountain pode ficar tranquiloa caso ocorra uma grande atualização, pois não haverá mais riscos de falhas. Além disto, a Iron Mountain ganhou agilidade na digitalização dos seus processos.
      
</template>



<style lang="less">
    
    

</style>