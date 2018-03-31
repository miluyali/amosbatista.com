<script>
	export default {
		props: [
			'title',
			'description'
		],
		metaInfo: function () {
			return {
				title: this.title,
				titleTemplate: '%s | amosBatista.com',
				meta: [
	      			{ property: 'og:title', content: this.title},
	      			{ property: 'og:description', content: this.description}
				]
			}
		}
	}
	
</script>

<template>
	<div></div>
</template>

