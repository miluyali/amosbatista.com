<template>
	
	<div class="container">
        
        <layout :links="links" title="Home" description="Site pessoal, de projetos e portfólios." />
    </div>
</template>

<script>
	import post from '../components/post-title.vue'
    import box from '../components/box.vue'
    import layout from '../layout_vue/6colLayout.vue'

	export default {
	  data: () => {
	  	return {
	  		links: [
                {
                	title: "Amós Batista",
                    description: "",
                    url: "/"
               	},
               	{
                	title: "Portfolios",
                    description: "",
                    url: "/portfolio"
               	}
            ]
        }
	  },
	  components: {
		post, box, layout
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
