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
                    title: "Catho 2.0 - Aplicativo",
                    description: "Criação de novo aplicativo. Comunicação entre o candidato e o recrutador, e recebimento de convites de entrevistas.",
                    thumbnail: "https://amosbatista.com/thumbnails/masterrow-logo.jpg",
                    url: "/portfolio/cathoApp",
                    type: "post"
                },
            }
        }
    }

</script>

<template>
    <div class="container">
        <portfolio-post title="Catho 2.0 - Aplicativo" :meta="meta">

            <div class="paragraph" slot="whatsIsThis">
                <p>
                    O novo aplicativo da catho é a nova versão do programa para busca de vagas de emprego cadastradas no site. Desenvolvido em parceria com a Dextra.
                </p>
            </div>

            <div class="paragraph" slot="necessity">
                <p>
                    O aplicativo anterior estava muito defasado, sendo que foi decidida a criação de uma nova versão, pois continuar com a manutenção da versão anterior seria trabalhosa demais.
                </p>
            </div>

            <div class="paragraph" slot="competitor">
                <p>
                    O mercado de recrutamentro e seleção está acirrado, há vários sites e aplicativos novos de busca de vagas disponpiveis. Não é possível perder tempo com um sistema  lento e antigo.
                </p>

            </div>

            <div class="paragraph" slot="concept">
                <p>
                    Eu, junto com meu time, ficamos responspaveis pelo processo de comunicação. Teriamos que criar uma aplicação BFF (back-end for front-end) para permitir que outros times ficassem resposnpaveis pelo desenho do site.
                </p>
                <p>
                    Foi escolhido Ruby para criar este aplicativo, pois é uma tecnologia com um bom tempo no mercado, e já abarcaria muitas soluções que já estariam prontas.
                </p>
                 
            </div>

            <div class="paragraph" slot="development">
                <p>
                    COmo o aplicativo foi dividido em varios times, a comunicação e documentação eram essenciais. Como faziamos ma API, criamos um mock, uma APi de teste, para disponibilizar a outros times. 
                </p>
                <p>
                    para garantirmos a entrega das mensagens para seus destinatários, usamos o RabbitMQ para gerir as filas de mensagens, sem nos preocuparmos com quedas de serviços e atrasos, o que garantiu uma segurança extra ao aplicativo.
                </p>
                

            </div>

            <div class="paragraph" slot="retro">

                <p>
                    O aplicativo foi um grande sucesso, e está com grande aceitação pelo publico. A comunicação franca nas equipes foi um grande diferencial para que o projeto fosse concluido com louvor. 
                </p>

            </div>

            <div class="paragraph" slot="source">
                <big-link url="https://play.google.com/store/apps/details?id=br.com.catho.app.vagas.empregos" />
                
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