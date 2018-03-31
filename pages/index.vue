<template>
	<div>
		<title-paragraph content="Hello World" />
	</div>
</template>

<script>
	import titleParagraph from '../components/title-paragraph.vue'

	export default {
	  data: () => {
	    return { name: 'world' }
	  },
	  components: {
		titleParagraph,
      },
	  head: {
		  meta: [
		    { charset: 'utf-8' },
		    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
		    { name: 'og:title', content: 'Teste de página home' },
		    { name: 'og:description', content: 'Primeira página como vue deploy' },
		  ],
		  link: [
		    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
		  ]
		}
	}
</script>


<style lang="less">

    @import '../assets/variables.less';
    @import '../assets/mixin.less';
    @import '../assets/generic.less';
    @import '../assets/base.less';
    @import '../assets/objects.less';

</style>