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

        props: ['title', 'description', 'meta', 'repoUrl'],

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
                    <div class="topic-content">
                        <slot name="whatsIsThis" />
                    </div>
                </topic>

                <topic title="A Necessidade">
                    <div class="topic-content">
                        <slot name="necessity" />
                    </div>
                </topic>

                <topic title="Concorrentes">
                    <div class="topic-content">
                        <slot name="competitor" />
                    </div>
                </topic>

                <topic title="O conceito">
                    <div class="topic-content">
                        <slot name="concept" />
                    </div>
                </topic>

                <topic title="O desenvolvimento">
                    <div class="topic-content">
                        <slot name="development" />
                    </div>
                </topic>

                <topic title="Retrô">
                    <div class="topic-content">
                        <slot name="retro" />
                    </div>
                </topic>

                <topic title="Fonte">
                    <div class="topic-content">
                        <slot name="source" />
                    </div>
                </topic>
            </div>
        </box>

        <pg-footer />
        
    </div>
</template>



<style lang="less">

    @import '../assets/fontawesome/fontawesome.less';
    @import '../assets/variables.less';
    @import '../assets/mixin.less';
    @import '../assets/generic.less';
    @import '../assets/base.less';
    @import '../assets/objects.less';

    .topic-content{
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
