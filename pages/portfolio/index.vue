<script>

    import post from '~/components/post-title.vue'
    import box from '~/components/box.vue'
    import layout from '~/layout_vue/twoColLayout.vue'

    export default {

        components: {
            post, box, layout
        },

        data: function () {
            return {
                meta: {
                    title: "Portfolio",
                    description: "Veja em detalhes os maiores projetos que participei",
                    thumbnail: "thumbnails/portfolio.jpg",
                    url: "/portfolio",
                    type: "list"
                },
                portfolios: [
                    {
                        title: "MasterRow",
                        resume: "Ferramenta escrita em puro JavaScript para criação de tabelas dinâmicas",
                        url: "/portfolio/masterrow"
                    }/*,
                    {
                        title: "Angular MasterRow",
                        resume: "Todos os recursos do Masterrow, disponível para projetos Angular 1.X",
                        url: "/portfolio/angularmasterrow"
                    },
                    {
                        title: "Meu Website",
                        resume: "Conheça a história e todos os recursos por trás deste site.",
                        url: "/portfolio/website"
                    }*/
                ]
            }
        }
    }

</script>

<template>

    <div class="container">
        
        <layout :meta="meta" :posts="portfolios" />
    </div>
</template>

<style lang="less">
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';
</style>