<script>

    export default {

        data: function () {
            return {}
        },

        props: ['url']
    }

</script>


<template>
    
    <a class="my-link" :href="url">
        <slot></slot>
    </a>
</template>


<style lang="less">
    
    @import "../assets/variables.less";

    .my-link{
        width: 100%;

        /*a{
            text-decoration: underline;
            text-decoration-style: dashed;
            text-decoration-color: @color-secundary;


            &:hover{
                text-decoration-style: dotted;
            }
        }*/
    }

</style>