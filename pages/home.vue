<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
export default {
  data: () => {
    return { name: 'world' }
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