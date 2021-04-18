<template lang="pug">
  a(href="/censurador")
    .titulo-site
      | Censure minha música!
</template>

<style lang="less">
  @fonteDestaque: 'Fjalla One', sans-serif;
  @cor_titulo: hsla(222,77%,96%, 1);

  .sombra-texto(@altura: 1px, @sombra:hsla(20,2%,5%, 1)){
    text-shadow: 0px @altura @sombra;
  }

  .titulo-site{
    max-width: 500px;
    font-family: @fonteDestaque	;
    font-weight: 700;
    color: @cor_titulo;
    text-align: center;
    font-size: 400%;
    text-transform: uppercase;
    letter-spacing: -6px;
    line-height: 90%;
    .sombra-texto(2px);
  }

</style>

<script>

  export default {
  }

</script>