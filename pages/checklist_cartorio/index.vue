<script>
    import vueMeta from '../../components/meta.vue'
    import linkStyle from '../../components/external-link-style.vue'
    import checklistLoader from './checklist-retrieve.js'
    import checklistProcessor from './process-flow/process-simple.js'

    export default {
        components: {vueMeta, linkStyle},
        data: function(){
            var checklist = checklistLoader();
            var checklistProcess = checklistProcessor(checklist);
            var checkListProcessed = checklistProcess.getProcessed();
            return {
                meta: {
                    title: "Checklist",
                    description: "Checklist",
                    thumbnail: "https://amosbatista.com/thumbnails/portfolio.jpg",
                    url: "/checklist",
                    type: "post"
                },
                checklistTask: checklist[0],
                checklistProcess: checklistProcess,
                checkListProcessed: checkListProcessed
            }
        },
        methods: {
            resolve (stepIndex){
                this.checklistTask = this.checklistProcess.resolve(stepIndex);
            },
            reset (){
                var checklist = checklistLoader();
                var checklistProcess = checklistProcessor(checklist);
                var checkListProcessed = checklistProcess.getProcessed();
                this.checklistTask = checklist[0];
                this.checklistProcess = checklistProcess;
                this.checkListProcessed = checkListProcessed;
            }
        }
    }
</script>

<template>
    <div class="content">
        <vue-meta :metadata="meta" />
        <link-style />

        <div class="divisor lateral">
            <h2 class="answer-title">Checklist:</h2>
            <ul class="answers-list">
               <li class="answer" v-if="checkListProcessed.length <= 0">
                   Nenhuma etapa iniciada
               </li>
               <li class="answer" v-for="check in checkListProcessed">
                    <span class="answer-icon">
                       <i class="fa fa-check" />
                    </span>
                    {{check.text}}
                    <p class="answer-content" v-if="check.isQuestion==true">
                        R: 
                        <span>
                            {{check.answer}}
                        </span>
                    </p>
               </li> 
               
            </ul>
        </div>

        <div class="divisor main">
            <p class="document-name">
                Documento: Análise de Procuração
            </p>
            <h1 class="question">
                {{checklistTask.text}}
            </h1>

            <div class="option-line">
                <div class="decoration" v-if="checklistTask.type == 'task'">
                    <button type="button" class="option-button next" v-on:click="resolve()">
                        Próximo
                    </button>
                </div>
                <div class="decoration" v-if="checklistTask.type == 'question'">
                    <button type="button" class="option-button next" v-for="(answer, index) in checklistTask.answers" v-on:click="resolve(index)">
                        {{answer}}
                    </button>
                </div>
                <div class="decoration" v-if="checklistTask.type == 'end'">
                    <button type="button" class="option-button no">
                        Checklist encerrado
                    </button>
                    <button type="button" class="option-button next" v-on:click="reset()">
                        <span>
                            <i class="fa fa-sync-alt" />
                        </span>
                        Reiniciar checklist
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
            overflow-y: scroll;
            .answer-title{
                margin: 17px 0 0 0;
                padding: 0 10px;
            }
            .answers-list{
                margin: 40px 0;
                .answer{
                    padding: 10px 10px 0 10px;
                    font-size: 75%;
                    .answer-content{
                        margin: 0;
                        text-indent: 20px;
                        span{
                            font-weight: @font-heavy;
                        }
                    }
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
                margin: 30px 0 0 0;
            }
            .question{
                text-indent: 20px;
                text-align: left;
                color: @document-name-color;
                font-weight: @font-heavy;
                font-size: 200%;
                min-height: 200px;
                width: 75%;
                float: right;
                padding: 0 20px;
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
                    .next{                        
                        .borda(@lateral-color);
                        background-color: @lateral-color;
                    }
                }
            }
        }
    }
</style>
