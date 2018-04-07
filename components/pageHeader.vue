<script>

    import titleParagraph from './title-paragraph.vue'
    import box from './box.vue'

    export default {
        components: {
            titleParagraph, box
        },

        data: function () {
            return {}
        }
    }

</script>


<template>
    
    <header class="page-header">
        <box>
            <h1 class="header">
                <a class="link" href="/">
                    <span class="comment-chars">
                        //
                    </span>
                    <span class="header-content">
                        Amós Batista
                    </span>
                </a>
            </h1>
        </box>
    </header>

</template>


<style lang="less">
    
    @import "../assets/variables.less";

    .page-header{
        margin: 0 0 10px 0;
        float: left;
        display: block;
        width: 100%;

        .header{
            padding: 10px;
            font-size: 100%;
            padding-left: 20px;
            font-family: @title-font;
            text-transform: uppercase;
            margin: 0;

            .comment-chars{
                color: @color-secundary;
            }

            .header-content{
                color: @color-primary;
                size: 110%;
            }
        }
    }
    

</style>