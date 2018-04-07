<script>

    import post from '~/components/post-title.vue'
    import box from '~/components/box.vue'
    import topic from '~/components/topic.vue'
    import pgHeader from '~/components/pageHeader.vue'
    import myLink from '~/components/myLink.vue'
    import portfolioPost from '~/layout_vue/portfolio.vue'

    export default {

        components: {
            post, box, pgHeader, topic, myLink, portfolioPost
        },

        data: function () {
            return {
                meta: {
                    title: "Masterrow - Tabelas dinâmicas em puro JavaScript",
                    description: "MasterRow é um plug-in feito em JavaScript para a criação de tabelas dinâmicas.",
                    thumbnail: "http://amosbatista.com/thumbnails/masterrow-logo.jpg",
                    url: "/portfolio/masterrow",
                    type: "post"
                },
            }
        }
    }

</script>

<template>
    <div class="container">
        <portfolio-post title="Masterrow" :meta="meta">

            <div class="paragraph" slot="whatsIsThis">
                MasterRow é um plug-in feito em JavaScript para a criação de tabelas dinâmicas. O desenvolvimento da ferramenta começou em Setembro de 2016, inicialmente para atender necessidade da E-HTL Hotelaria.
            </div>

            <div class="paragraph" slot="necessity">
                Trabalhando com diversos sistemas de gerenciamento de dados (relatórios, gráficos), o time de desenvolvimento precisava de uma ferramenta que permitisse agilizar a criação de tabelas e suas operações mais básicas (ordenação, filtagem, etc.).
            </div>

            <div class="paragraph" slot="competitor">
                Existem outras ferramentas de tabelas dinâmicas mais conhecidas, como o DataTables, mas, mesmo já consagradas, há algumas limitações. Tomando DataTables como exemplo, apesar dela criar tabelas dinâmicas, ela não permite o controle total de seu comportamento. Como exemplo, para operações assíncronas (REST), ela não permite o uso de outro objeto para realizar a operação, que não fosse o seu Filtro interno. Com a Paginação, há um problema parecido: não é possível paginar a tabela sem que TODOS os dados já estivessem carregados. Por causa destes problemas, e graças ao incentivo da E-HTL, resolvi criar o MasterRow.
            </div>

            <div class="paragraph" slot="concept">
                Ao invés de trabalhar diretamente com um vetor de dados, MasterRow trabalha em cima de uma função criada pelo desenvolvedor. Não importa onde, como e quando os dados virão, se por requisição de API, Socket, ou se são apenas dados fixos. Tudo que o servidor precisa fazer é fazer com que a sua função retorne os dados necessário para o MasterRow funcionar. Acompanhando as ferramentas concorrentes, MasteRow também oferece recursos de filtros, paginação, ordenação, customização de célula de acordo com o seu valor, expansão para detalhes e exportação de dados. Todas estas funções sempre devem convergir para a função principal.
            </div>

            <div class="paragraph" slot="development">
                Masterrow foi construída em paralelo com o desenvolvimento de outras soluções na E-HTL. A parte mais complicada foi o começo do processo, onde tive que pensar como a ferramenta funcionaria. O MasterRow precisava funcionar com uma função definida pelo usuário desenvolvedor, ao mesmo tempo que ela precisava ser aberta à customização. Foi pensando neste conceito: {Fluxograma}. A vantagem de ter trabalhado o projeto com a E-HTL foi que, invariávelmente, a ferramenta já começou com um cliente. Isto permitiu que MasteRow fosse testado em várias situações e com diversos usuários. Mais detalhes sobre a construção: Masterrow foi construído com a ajuda do automatizador de tarefas GULP , a estilização da tabela foi feita em LESS.
            </div>
        </portfolio-post>
    </div>
</template>



<style lang="less">

    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';

    .paragraph{
        font-family: @base-font;
        color: @color-primary;
        margin: 0;
        text-indent: 10px;
    }

</style>