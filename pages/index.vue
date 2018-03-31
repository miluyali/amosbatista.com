<template>
	
	<div class="container">
        
        <layout :links="links" title="Home" description="Site pessoal, de projetos e portfólios.">

            <h1 class="title" slot="home-header">
                <span class="comment-chars">
                    //
                </span>
                Amós Batista
            </h1>
        </layout>
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
                	title: "Portfolio",
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

    .title{
        font-family: @title-font;
        text-transform: uppercase;
        margin: 0;
        line-height: 1;
        color: @color-primary;
        font-size: 350%;
    }

    .comment-chars{
        color: @color-secundary;
    }

</style>
