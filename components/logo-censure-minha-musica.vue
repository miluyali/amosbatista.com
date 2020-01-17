<template lang="pug">
  a(href="/censurador")
    h1.titulo-site
      | Censure minha música!
</template>

<style lang="less">
  @fonteDestaque: 'Fjalla One', sans-serif;
  @cor_titulo: hsla(222,77%,96%, 1);
  .sombra-texto(@altura: 1px, @sombra:hsla(20,2%,5%, 1)){
    text-shadow: 0px @altura @sombra;
  }

  .titulo-site{
    font-family: @fonteDestaque	;
    color: @cor_titulo;
    text-align: center;
    font-size: 10vmax;
    text-transform: uppercase;
    letter-spacing: -6px;
    line-height: 90%;
    .sombra-texto(2px);
    margin: 90px 0 0;
  }

  @media (min-width: 500px){
    .titulo-site{
      width: 500px;
      margin: 90px auto 0;
      font-size: 90px;
    }
  }

</style>

<script>

  export default {
  }

</script>