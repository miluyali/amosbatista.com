,<template>
	
	<div class="container">
        
        <layout 
            :links="links" 
            :meta="meta"
        >

            <h1 class="title" slot="home-header">
                <span class="comment-chars">
                    //
                </span>
                Amós Batista
            </h1>

            <div class="animation" slot="home-outro">
                <animation />
            </div>
        </layout>
    </div>
</template>

<script>
	import post from '../components/post-title.vue'
    import box from '../components/box.vue'
    import layout from '../layout_vue/6colLayout.vue'
    import animation from '../components/animatedBg_linesToCenter.vue'

	export default {
	  data: () => {
	  	return {
            meta: {
                title: "Home",
                description: "Site pessoal, de projetos e portfólios.",
                thumbnail: "thumbnails/home.jpg",
                url: "",
                type: "home"
            },
	  		links: [
                {
                    title: "Sobre",
                    description: "",
                    url: "/about"
                },
                {
                    title: "Blog",
                    description: "",
                    url: "/blog"
                },
               	{
                	title: "Portfolio",
                    description: "",
                    url: "/portfolio"
               	},
                {
                    title: "Galeria",
                    description: "",
                    url: "/gallery"
                }
            ]
        }
	  },
	  components: {
		post, box, layout, animation
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
        font-size: 200%;
    }

    .comment-chars{
        color: @color-secundary;
    }

    .animation{
        width: 100%;
        height: 100%;
    }

</style>
