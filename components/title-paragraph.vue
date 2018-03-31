<script>

    export default {

        data: function () {
            return {}
        },

        props: ['content']
    }

</script>


<template>
    
    <div class="title-paragraph">
        <h2 class="title-paragraph-h">{{content}}</h2>
    </div>

</template>


<style lang="less">

    @import "../assets/variables.less";

    .title-paragraph{

        display: flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding-left: 20px;

        .title-paragraph-h{
            font-family: @title-font;
            text-transform: uppercase;
            margin: 0;
            line-height: 1;
            color: @color-primary;
        }
    }

</style>