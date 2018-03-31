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
                portfolios: [
                    {
                        title: "Masterrow",
                        resume: "Ferramenta escrita em puro JavaScript para criação de tabelas dinâmicas",
                        url: "/portfolio/masterrow"
                    }
                ]
            }
        }
    }

</script>

<template>

    <div class="container">
        
        <layout title="Portfolios" :posts="portfolios" description="Veja em detalhes os maiores projetos que participei" />
    </div>
</template>

<style lang="less">
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';
</style>