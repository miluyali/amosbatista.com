<script>

    import post from '~/components/post-title.vue'
    import box from '~/components/box.vue'
    import layout from '~/layout_vue/postList.vue'
    import req from 'axios'

    export default {

        asyncData: function(params){
            return req.get(process.env.BLOG_URL + '/posts', {
                params: {
                    '_embed': 1
                }
            })
                .then(function(res) {
                    let posts = res.data.map (function(item){
                        return {
                            title: item.title.rendered,
                            url: 'blog/' + item.slug,
                            resume: item.excerpt.rendered.replace('<p>', '').replace('</p>', ''),
                            thumbnail: item._embedded["wp:featuredmedia"][0] != undefined 
                                ? item._embedded["wp:featuredmedia"][0].source_url
                                : ''
                        };
                    });
                    return {posts}
                })
                .catch( function (err){
                    return {
                        posts: [
                        {
                            title: "Erro na geração da lista",
                            resume: "O erro é " + err,
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
                    title: "Blog",
                    description: "Acompanhe todas as minhas postagens aqui.",
                    thumbnail: "thumbnails/portfolio.jpg",
                    url: "/blog",
                    type: "list"
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
        
        <layout :meta="meta" :posts="posts" />
    </div>
</template>

<style lang="less">
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';
</style>