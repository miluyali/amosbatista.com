<script>

    export default {
        
        data: function () {
            return {}
        }
    }

</script>


<template>
    
    <footer class="page-footer">

        <p class="content">
            Obrigado pela visita.
        </p>
    </footer>

</template>


<style lang="less">
    
    @import "../assets/variables.less";

    .page-footer{
        margin: 10px 0 10px 0;
        float: left;
        display: block;
        width: 100%;
        background-color: @color-primary;

        .content{
            padding-left: 20px;
            color: @color-base;
            font-size: 75%;
        }
    }
    

</style>