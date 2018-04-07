<script>
	export default {
		props: [
			'metadata'
		],
		head: function () {
			/* Types:
				home / list / post /
			*/
			if(this.metadata.type == "home"){

				this.metadata.detailTypes = {
					og: "website",
					twitter: "summary_large_image"
				}
			}

			if(this.metadata.type == "list"){

				this.metadata.detailTypes = {
					og: "website",
					twitter: "summary"
				}
			}

			if(this.metadata.type == "post"){

				this.metadata.detailTypes = {
					og: "article",
					twitter: "summary_large_image"
				}
			}

			return {
				title: this.metadata.title,
				titleTemplate: '%s | amosBatista.com',
				meta: [
	      			{ property: 'fb:app_id', content: "212560042661168"},
	      			{ property: 'og:title', content: this.metadata.title},
	      			{ property: 'og:description', content: this.metadata.description},
	      			{
	      				property: 'og:url',
	      				content: 'http://amosbatista.com' + this.metadata.url
	      			},
	      			{
	      				property: 'og:image',
	      				content: this.metadata.thumbnail
	      			},
	      			{
	      				property: 'og:type', content: this.metadata.detailTypes.og
	      			},

	      			/* Twitter */
	      			{ property: 'twitter:title', content: this.metadata.title},
	      			{ property: 'twitter:description', content: this.metadata.description},
	      			{
	      				property: 'twitter:url',
	      				content: 'http://amosbatista.com' + this.metadata.url
	      			},
	      			{
	      				property: 'twitter:image',
	      				content: this.metadata.thumbnail
	      			},
	      			{
	      				property: 'twitter:type', content: this.metadata.detailTypes.twitter
	      			}
				]
			}
		}
	}

</script>

<template>
	<div></div>
</template>

