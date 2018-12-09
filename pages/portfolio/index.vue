<script>

    import post from '~/components/post-title.vue'
    import box from '~/components/box.vue'

    import postTitle from '~/components/post-title.vue'
    import myLink from '~/components/myLink.vue'
    import pgHeader from '~/components/pageHeader.vue'
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
                        title: "MasterRow",
                        resume: "Ferramenta escrita em puro JavaScript para criação de tabelas dinâmicas",
                        url: "/portfolio/masterrow"
                    }
                ]
            }
        }
    }

</script>

<template>

    <div class="two-col-layout">

        <div class="container">
            <vue-meta :metadata="meta" />
            <facebook-app />
            <link-style />
            <pg-header />
        
            <box>
                <ul class="list">
                   <li class="item" v-for="post in portfolios">
                        <my-link :url="post.url">
                            <post-title :title="post.title" :resume="post.resume" />
                        </my-link>
                   </li>
                </ul>
            </box>
            <pg-footer />
        </div>
    </div>
</template>

<style lang="less">
    @import '../../assets/fontawesome/fontawesome.less';
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';

    .two-col-layout{

        float: left;
        width: 100%;
        margin: 0 0 10px 0;

        .list{

            width: 100%;

            .item{
                width: 100%;
                margin: 0 0 10px 0;
                padding: 0;
            }

            @media (min-width: 500px){

                .item{
                    width: 45%;
                    float: left;
                }
            }
        }
    }
</style>