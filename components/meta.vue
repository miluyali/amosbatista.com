<script>
	export default {
		props: [
			'title',
			'description',
			'thumbnail',
			'type',
			'url'
		],
		head: function () {
			return {
				title: this.title,
				titleTemplate: '%s | amosBatista.com',
				meta: [
	      			{ property: 'og:title', content: this.title},
	      			{ property: 'og:description', content: this.description},
	      			{ 
	      				property: 'og:url', 
	      				content: 'http://amosbatista.com/' + this.url
	      			},
	      			{ 
	      				property: 'og:image', 
	      				content: '/static/' + this.thumbnail
	      			},
	      			{ 
	      				property: 'og:type', content: this.type
	      			},

	      			/* Twitter */
	      			{ property: 'twitter:title', content: this.title},
	      			{ property: 'twitter:description', content: this.description},
	      			{ 
	      				property: 'twitter:url', 
	      				content: 'http://amosbatista.com/' + this.url
	      			},
	      			{ 
	      				property: 'twitter:image', 
	      				content: '/static/' + this.thumbnail
	      			},
	      			{ 
	      				property: 'twitter:type', content: this.type
	      			}
				]
			}
		}
	}
	
</script>

<template>
	<div></div>
</template>

