<script>
    import vueMeta from '../../components/meta.vue'
    import linkStyle from '../../components/external-link-style.vue'
    import checklistLoader from './checklist-retrieve.js'
    import checklistProcessor from './process-flow/process-simple.js'
    import checklistView from './checklist.vue'

    export default {
        components: {vueMeta, linkStyle, checklistView},
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
                checkListProcessed: [],
                backgroundType: "normal-background",
                titleColorType: "normal-title"
            }
        },
        methods: {
            resolve (stepIndex){
                this.checklistTask = this.checklistProcess.resolve(stepIndex);
                this.checkListProcessed = this.checklistProcess.getProcessed();
                this.backgroundType = this.checklistTask.type == "task" ? "task-alert-background" : "normal-background"
                this.titleColorType = this.checklistTask.type == "task" ? "task-title" : "normal-title"
            },
            reset (){
                var checklist = checklistLoader();
                var checklistProcess = checklistProcessor(checklist);
                var checkListProcessed = checklistProcess.getProcessed();
                this.checklistTask = checklist[0];
                this.checklistProcess = checklistProcess;
                this.checkListProcessed = checkListProcessed;
                this.backgroundType = "normal-background";
                this.titleColorType = "normal-title";
            }
        }
    }
</script>

<template>
    <div class="content">
        <vue-meta :metadata="meta" />
        <link-style />

        <div class="divisor lateral">
            <checklist-view :check-list-processed="checkListProcessed"></checklist-view>
        </div>

        <div class="divisor main" :class="backgroundType">
            <p class="document-name">
                Documento: Análise de Procuração
            </p>
            <h1 class="question" :class="titleColorType">
                <span class="icon" v-if="checklistTask.type == 'task'">
                    <i class="fa fa-exclamation-triangle"></i>
                </span>
                {{checklistTask.text}}
            </h1>

            <div class="option-line">
                <div class="decoration" v-if="checklistTask.type == 'task' || checklistTask.type == 'init'">
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

    @normal-bg-color: hsla(0,0%,0%,0);
    @alert-bg-color: hsla(42,100%,44%, 1);
    @alert-icon-color: hsla(42,100%,100%, 0.3);

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
        }
        .normal-background{
            background-color: @normal-bg-color;
        }
        .task-alert-background{
            background-color: @alert-bg-color;
        }
        .main{
            width: 75%;
            float: left;
            .normal-title{
                color: @document-name-color;
            }
            .task-title{
                color: @lateral-text-color;
            }
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
                font-weight: @font-heavy;
                font-size: 200%;
                min-height: 200px;
                width: 75%;
                float: right;
                padding: 0 20px;
                .icon{
                    color: @alert-icon-color;
                }
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
                        color: @lateral-text-color;
                        .borda-radius();
                        padding: 15px;
                        margin: 0 15px 0 0;
                        font-size: 150%;
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
