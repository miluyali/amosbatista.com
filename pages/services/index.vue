<script>
import metaTags from '../../components/meta'
import baseStyle from '../../components/external-link-style'
import box from '../../components/hoverBigBox'

export default {
  components: {
    metaTags, baseStyle, box
  },
  data: function () {
    return {
      meta: {
        title: "Serviços",
        description: "Confira todos os serviços que presto.",
        thumbnail: "https://amosbatista.com/thumbnails/masterrow-logo.jpg",
        url: "/services",
        type: "post"
      }
    }
  }
}
</script>

<template lang="pug">

  .bg

    meta-tags(:metadata="meta")
    base-style

    .container

      h1.title
        | Serviços
      h2.short-description
        | Atualmente estou prestando serviços como consultor. Com 10 anos no mercado de desenvolvimento, vocẽ pode contar comigo para serviços de gestão e desenvolvimento web, além de refatoração de sistemas e automatização.
      
      .services-list
        box(box-url="/services/webDevelopment" box-simple-title="Desenvolvimento web" small)
        box(box-url="/services/refatoring" box-simple-title="Refatoração" small)
        box(box-url="/services/integrationAutmatization" box-simple-title="Automatização e Integração" small)
        box(box-url="/services/teaching" box-simple-title="Aulas de reforço" small)


</template>

<style lang="less">
  @import '../../assets/variables.less';
  @import '../../assets/objects.less';
  @import '../../assets/generic.less';
  @import 'theme.less';
  
  body{
    background-color: @color-base;

    .title{
      font-family: @title-font;
      color: @color-primary-light;
      text-align: center;
    }

    .short-description{
      font-family: @base-font;
    }

    .services-list{
      
      width: 100%;
      height: 450px;
      
    }
  }


</style>

