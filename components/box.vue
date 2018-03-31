<script>

    export default {

        data: function () {
            return {}
        }
    }

</script>


<template>
    
    <div class="box">
        <slot>
        </slot>
    </div>

</template>


<style lang="less">

    @import "../assets/variables.less";
    @import "../assets/mixin.less";

    .box{
        .shadow();
        width: 100%;
        height: 100%;
        display: inline-block;
    }

</style>