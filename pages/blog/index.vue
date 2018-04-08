<script>

    import post from '~/components/post-title.vue'
    import box from '~/components/box.vue'
    import layout from '~/layout_vue/postList.vue'
    import req from 'axios'

    export default {

        asyncData: function({params}){
            return req.get(process.env.BLOG_URL + '/posts', {
                params: {
                    '_embed': 1,
                    'categories': 4
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
                            resume: err,
                            url: "/blog",
                            thumbnail: "https://amosbatista.com/thumbnails/home.jpg"
                        },]
                    }
                })
        },

        components: {
            post, box, layout
        },

        data: function () {
            return {
                metadata: {
                    title: "Gallery",
                    description: "Toda minha arte aqui. Desenhos, fotos, comics, cartuns.",
                    thumbnail: "thumbnails/portfolio.jpg",
                    url: "/gallery",
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

        <layout :metadata="metadata" :posts="posts" />
    </div>
</template>

<style lang="less">
    @import '../../assets/fontawesome/fontawesome.less';
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';
</style>
