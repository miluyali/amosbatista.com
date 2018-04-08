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
                    description: "Framework feito em JavaScript para a criação de tabelas dinâmicas.",
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
                <p>
                    Masterrow é um framework para criação de tabelas dinâmicas, feito em puro JavaScript. Não só automatiza a criação de tabelas, como já possui embutido várias funções comuns a relatórios, como filtros, paginação e exportação.
                </p>
            </div>

            <div class="paragraph" slot="necessity">
                <p>
                    O desenvolvimento da ferramenta começou em Setembro de 2016; a <a href="https://www.e-htl.com.br/" target="_blank">E-HTL Hotelaria</a> estava criando uma nova Intranet.
                    O time de desenvolvimento precisava de uma ferramenta que permitisse agilizar a criação de tabelas e suas operações mais básicas (ordenação, filtagem, etc.), para a extração de relatórios e geração de listas.
                </p>
            </div>

            <div class="paragraph" slot="competitor">
                <p>
                    Existem outras ferramentas de tabelas dinâmicas mais conhecidas, sendo a mais famosa delas, <a href="https://datatables.net/"  target="_blank">DataTables</a>. Só que, mesmo já consagradas, elas têm algumas limitações. Tomando DataTables como exemplo, ela não permite o controle total do funcionamento da tabela. Em operações assíncronas (REST), ela obriga a usar o seu "cliente" para fazer as requisições. 
                </p>
                <p>
                    Na Paginação, há um problema parecido: não é possível paginar a tabela sem que TODOS os dados já estejam carregados. 
                </p>
                <p>
                    Por causa destes problemas, teríamos que fazer grandes adaptações ao nosso projeto, mas, incentivado pela própria E-HTL em buscar uma solução melhor, comecei a criar o MasterRow.
                </p>

            </div>

            <div class="paragraph" slot="concept">
                <p>
                    Ao invés de trabalhar diretamente com um vetor de dados, MasterRow trabalha em cima de uma função criada pelo desenvolvedor. Não importa onde, como e quando os dados virão, se por requisição de API, Socket, ou se serão apenas dados fixos. Tudo que o servidor precisa fazer é fazer com que a sua função retorne os dados necessário para o MasterRow funcionar.
                </p>
                <p>
                    Seguindo as tendências dos frameworks concorrentes, MasteRow também oferece recursos de filtros, paginação, ordenação, customização de célula de acordo com o seu valor, expansão para detalhes e exportação de dados. Todas estas funções sempre devem convergir para esta função principal.
                </p>
                 
            </div>

            <div class="paragraph" slot="development">
                <p>
                    Masterrow foi construída em paralelo com o desenvolvimento da Intranet na E-HTL. A parte mais complicada foi o começo do processo, pois nunca tinha trabalhado num sistema completo, desde o seu conceito. Na época, também estava aprendendo a codificar em JavaScript, e fui aprendendo os conceitos da linguagem.
                </p>
                <p>
                    O desafio foi descobrir o processo de funcionamento básico do sistema. Após vários desenhos, cheguei no processo de funcionamento básico: Masterrow gera uma instância de tabela, recebendo as configurações da tabela num objeto, e fornecendo uma função que receberia uma outra função, criada pelo usuário, que retornaria os dados que preencheriam as tabelas.
                </p>
                <p>
                    Com o funcionamento em mente, tudo que precisava ser feito era montando as funcionalidades aos poucos. Para acompanhar o funcionamento, e para demonstrar a criação da ferramenta para meus chefes, quebrei cada etapa do desenvolvimento pelas funcionalidades (filtros e paginação, em primeiro lugar, depois exportação, detalhe, ação de linha e o resto).
                </p>
                <p>
                    Além da dificuldade de descobrir o conceito do sistema, uma outra grande dificuldade foi tornar o sistema resiliente ao desenvolvimento do restante da página. Masterrow precisava funcionar com o código escrito em qualquer parte do sistema, os dados preenchidos em qualquer momento da visualização, e precisava funcionar com quaisquer outros elementos, frameworks que estivem na tela. São detalhes que muitas vezes não eram ensinados nos cursos; para buscar uma solução, tive que levar um bom tempo para resolvê-las.
                </p>
                <p>
                    Um facilitador deste projeto foi a própria E-HTL, que me deu os recursos e tempo para terminar o projeto. Masterrow já tinha começado com um cliente.
                </p>
                <p>
                    Masterrow foi desenvolvido em JavaScript, sem a necessidade de outro framework, como o <a href="https://jquery.com/" target="_blank">jQuery</a>. O estilo da tabela foi feito em <a href="http://lesscss.org/" target="_blank">LESS</a>, e todo o processo de compactação foi feito com automatizador <a href="https://gulpjs.com/" target="_blank">GULP</a>.
                </p>

            </div>

            <div class="paragraph" slot="retro">

                <p>
                    Masterrow é um dos que tenho mais orgulho de ter desenvolvido. Aprendi a programar em JavaScript por causa dele. Foi ambicioso e difícil, se não tivesse contado com a ajuda da E-HTL, não teria conseguido terminar. 
                </p>

                <p>
                    Há coisas que faltaram ser feitas no projeto, como criar um teste unitário (o que facilitaria muito), quebrar o código-fonte em módulos e usar recursos como Promise. Como o projeto já foi desenvolvido, eu pretendo esperar um momento mais apropriado para continuar o seu desenvolvimento.
                </p>

            </div>
        </portfolio-post>
    </div>
</template>



<style lang="less">
    
    @import '../../assets/fontawesome/fontawesome.less';
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';

    .paragraph{
        font-family: @base-font;
        color: @color-primary;
        margin: 0;

        p{
            margin: 0 0 10px 0;
            text-indent: 20px;
        }

        a{
            text-decoration: underline;
        }
    }

</style>