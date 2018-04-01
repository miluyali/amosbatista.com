<script>

    export default {

        data: function () {
            return {}
        },

        props: ['title']
    }

</script>


<template>
    
    <div class="topic">
        <h3 class="title">{{title}}</h3>
        <div class="content">
            <slot>
            </slot>
        </div>
    </div>

</template>


<style lang="less">

    @import "../assets/variables.less";

    .topic{
        /*width: 100%;*/
        margin: 0 0 10px 0;
        padding: 10px;
        display: inline-block;

        .title{
            font-family: @title-font;
            text-transform: uppercase;
            color: @color-primary-light;
            padding-left: 20px;
        }
        .content{
            padding-left: 10px;
            margin: 0;
        }

        @media (min-width: 500px){

            .title{
                float: left;
                width: 25%;
                margin: 0;
                text-align: right;
                padding-left: 20px;
            }

            .content{
                float: right;
                width: 64%;
            }
        }
    }

</style>