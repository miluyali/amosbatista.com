<script>

    import post from '../components/post-title.vue'
    import box from '../components/box.vue'
    import topic from '../components/topic.vue'
    import pgHeader from '../components/pageHeader.vue'
    import myLink from '../components/myLink.vue'
    import vueMeta from '../components/meta.vue'
    import linkStyle from '../components/external-link-style.vue'
    import facebookApp from '../components/facebook-app.vue'
    import pgFooter from '../components/pageFooter.vue'

    export default {

        components: {
            post, box, pgHeader, topic, myLink, vueMeta, linkStyle, facebookApp, pgFooter
        },

        props: ['title', 'description', 'meta'],

        data: function () {
            return {}
        }
    }

</script>

<template>

    <div class="portfolio-layout">

        <vue-meta :metadata="meta" />

        <facebook-app />

        <link-style />

        <pg-header />

        <box>
            <div class="title">
                <post :title="title" resume="" />
            </div>

            <div class="topics">

                <topic title="O que é?">
                    <slot name="whatsIsThis" />
                </topic>

                <topic title="A Necessidade">
                    <slot name="necessity" />
                </topic>

                <topic title="Concorrentes">
                    <slot name="competitor" />
                </topic>

                <topic title="O conceito">
                    <slot name="concept" />
                </topic>

                <topic title="O desenvolvimento">
                    <slot name="development" />
                </topic>

                <topic title="Retrô">
                    <slot name="retro" />
                </topic>

                <topic title="Fonte">
                    
                </topic>
            </div>
        </box>

        <pg-footer />
        
    </div>
</template>



<style lang="less">


</style>
