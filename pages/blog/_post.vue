<script>

    import post from '~/components/post-title.vue'
    import box from '~/components/box.vue'
    import layout from '~/layout_vue/blogPost.vue'
    import req from 'axios'

    export default {

        asyncData: function(params){
            return req.get(process.env.BLOG_URL + '/posts', {
                params: {
                    '_embed': 1,
                    'slug': 'ola-mundo'
                }
            })
                .then(function(res) {
                    let content = res.data[0];
                    let post = {
                        title: content.title.rendered,
                        description: content.excerpt.rendered.replace('<p>', '').replace('</p>', ''),
                        thumbnail: content._embedded["wp:featuredmedia"][0] != undefined 
                            ? content._embedded["wp:featuredmedia"][0].source_url
                            : ''
                    };
                        
                    return {post}
                })
                .catch( function (err){
                    return {
                        post: [
                        {
                            title: "Erro na geração do post",
                            description: "O erro é " + err,
                            url: "/",
                            thumbnail: "/thumbnails/home.jpg"
                        },]
                    }
                })
        },

        components: {
            post, box, layout
        },

        data: function () {
            return {
                meta: {
                    title: post.title,
                    description: post.description,
                    thumbnail: post.thumbnail,
                    url: "/blog/",
                    type: "post"
                },
                /*posts: [
                    {
                        title: "Meu Site 2.0",
                        resume: "Conheça todo o trampo que levei aqui",
                        url: "/blog/url1",
                        thumbnail: "/thumbnails/home.jpg"
                    },
                    {
                        title: "Será que devemos ser policamente corretos",
                        resume: "Qual a vantagem de sermos bons com os outros?",
                        url: "/portfolio/angularmasterrow",
                        thumbnail: "/thumbnails/portfolio.jpg"
                    },
                    {
                        title: "Não tenho idéia do que escrever, e agora?",
                        resume: "Como criar mesmo nas horas mais improváveis.",
                        url: "/portfolio/website",
                        thumbnail: "/thumbnails/home.jpg"
                    }
                ]*/
            }
        }
    }

</script>

<template>

    <div class="container">
        
        <layout :meta="meta" :title="post.title" :description="post.description" :thumbnail="post.thumbnail" />
        <!-- <layout :meta="meta" title="post.title" description="post.description" thumbnail="post.thumbnail" /> -->
    </div>
</template>

<style lang="less">
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';
</style>