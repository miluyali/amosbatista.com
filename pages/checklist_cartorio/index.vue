<script>
    import vueMeta from '../../components/meta.vue'
    import linkStyle from '../../components/external-link-style.vue'

    export default {
        components: {vueMeta, linkStyle},
        data: function(){
            return {
                meta: {
                    title: "Checklist",
                    description: "Checklist",
                    thumbnail: "https://amosbatista.com/thumbnails/portfolio.jpg",
                    url: "/checklist",
                    type: "post"
                }
            }
        }
    }
</script>

<template>
    <div class="content">
        <vue-meta :metadata="meta" />
        <link-style />

        <div class="divisor lateral">
            <ul class="answers-list">
               <li class="answer">
                   <span class="answer-icon yes">
                       <i class="fa fa-check" />
                   </span>
                   É ato ético
               </li> 
               <li class="answer">
                   <span class="answer-icon no">
                       <i class="fa fa-times" />
                   </span>
                   Não é pessoa física
               </li>
            </ul>
        </div>

        <div class="divisor main">
            <p class="document-name">
                Análise de Conteúdo
            </p>
            <h1 class="question">
                Ato é ético?
            </h1>
            <div class="option-line">
                <div class="decoration">
                    <button type="button" class="option-button yes">
                        Sim
                    </button>
                    <button type="button" class="option-button no">
                        Não
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    @import '../../assets/fontawesome/fontawesome.less';
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';

    @lateral-color: #3B56A8;
    @lateral-text-color: white;
    @document-name-color: #17285B;
    @decoration-color: hsla(43, 55%, 70%, 1);

    @yes-color: hsla(120, 45%, 25%, 1);
    @yes-border-color: hsla(120, 45%, 25%, 1);
    @no-color: hsla(5, 75%, 45%, 1);
    @no-border-color: hsla(5, 75%, 25%, 1);
    @yes-clear-color: hsla(120, 45%, 65%, 1);
    @no-clear-color: hsla(5, 75%, 65%, 1);

    @base-font: 'Open Sans', sans-serif;
    @font-light: 300;
    @font-heavy: 700;

    .content{
        margin: 0;
        font-family: @base-font;
        .divisor{
            height: 100vh;
        }
        .lateral{
            width: 25%;
            float: right;
            background-color: @lateral-color;
            color: @lateral-text-color;
            .answers-list{
                margin: 40px 0 0 0;
                .answer{
                    padding: 0 10px;
                    font-size: 75%;
                    .yes{
                        color: @yes-clear-color;
                    }
                    .no{
                        color: @no-clear-color;
                    }
                }
            }
        }
        .main{
            width: 75%;
            float: left;
            .document-name{
                text-align: right;
                padding-right: 20px;
                color: @document-name-color;
                font-weight: @font-light;
                font-size: 80%;
            }
            .question{
                text-align: center;
                color: @document-name-color;
                font-weight: @font-heavy;
                font-size: 250%;
                height: 200px;
            }
            .option-line{
                width: 100%;
                float: left;
                .decoration{
                    background-color: @decoration-color;
                    padding: 20px;
                    width: 75%;
                    float: right;
                    .option-button{
                        .borda-radius();
                        padding: 15px;
                        margin: 0 15px 0 0;
                        font-size: 150%;
                        color: @lateral-text-color;
                        font-weight: @font-heavy;
                    }
                    .yes{
                        .borda(@yes-border-color);
                        background-color: @yes-color;
                    }
                    .no{
                        .borda(@no-border-color);
                        background-color: @no-color;
                    }
                }
            }
        }
    }
</style>
