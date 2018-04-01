<script>
	export default {
		props: [
			'meta'
		],
		head: function () {

			/* Types:
				home / list / post / 
			*/
			if(this.meta.type == "home"){

				this.meta.detailTypes = {
					og: "website",
					twitter: "summary_large_image"
				}
			}

			if(this.meta.type == "list"){

				this.meta.detailTypes = {
					og: "website",
					twitter: "summary"
				}
			}

			if(this.meta.type == "post"){

				this.meta.detailTypes = {
					og: "article",
					twitter: "summary_large_image"
				}
			}

			return {
				title: this.meta.title,
				titleTemplate: '%s | amosBatista.com',
				meta: [
	      			{ property: 'fb:app_id', content: "212560042661168"},
	      			{ property: 'og:title', content: this.meta.title + ' - Amós Batista'},
	      			{ property: 'og:description', content: this.meta.description},
	      			{ 
	      				property: 'og:url', 
	      				content: 'http://amosbatista.com/' + this.meta.url
	      			},
	      			{ 
	      				property: 'og:image', 
	      				content: 'http://amosbatista.com/static/' + this.meta.thumbnail
	      			},
	      			{ 
	      				property: 'og:type', content: this.meta.detailTypes.og
	      			},

	      			/* Twitter */
	      			{ property: 'twitter:title', content: this.meta.title + ' - Amós Batista'},
	      			{ property: 'twitter:description', content: this.meta.description},
	      			{ 
	      				property: 'twitter:url', 
	      				content: 'http://amosbatista.com/' + this.meta.url
	      			},
	      			{ 
	      				property: 'twitter:image', 
	      				content: '/static/' + this.meta.thumbnail
	      			},
	      			{ 
	      				property: 'twitter:type', content: this.meta.detailTypes.twitter
	      			}
				]
			}
		}
	}
	
</script>

<template>
	<div></div>
</template>

