<script>

    import post from '~/components/post-title.vue'
    import box from '~/components/box.vue'
    import layout from '~/layout_vue/blogPost.vue'
    import req from 'axios'

    export default {

        asyncData: function(params){
            console.log ("teste requisição");
            return req.get(process.env.BLOG_URL + '/posts', {
                params: {
                    '_embed': 1,
                    'slug': params.post
                }
            })
                .then(function(res) {
                    let content = res.data[0];
                    let postData = {
                        title: content.title.rendered,
                        description: content.excerpt.rendered.replace('<p>', '').replace('</p>', ''),
                        thumbnail: content._embedded["wp:featuredmedia"][0] != undefined
                            ? content._embedded["wp:featuredmedia"][0].source_url
                            : '',
                        content: '<p>Durante a criação, <a href=\"https://medium.com/amsbatista\">criei uma conta na Medium</a>, onde comecei a contar o passo a passo de todo o processo de criação. Como hostear a página, como controlar o código-fonte usando <a href=\"https://git-scm.com/\">GIT</a>, prototipando o projeto, etc...</p>'
                    }
                    let metadata = {
                        title: postData.title,
                        description: postData.description,
                        thumbnail: postData.thumbnail,
                        url: "/blog/",
                        type: "post"
                    };

                    return {postData, metadata}
                })
                .catch( function (err){
                    let postData = {
                        title: "Erro na geração do post",
                        description: "O erro é " + err,
                        url: "/",
                        thumbnail: "/thumbnails/home.jpg",
                    }

                    let metadata = {
                        title: postData.title,
                        description: postData.description,
                        thumbnail: postData.thumbnail,
                        url: "/blog/",
                        type: "post"
                    }
                    return { postData, metadata }
                })
        },

        components: {
            post, box, layout
        },

        data: function () {
            return {}
        }
    }

</script>

<template>

    <div class="container">
        <layout :metadata="metadata" :title="postData.title" :description="postData.description" :thumbnail="postData.thumbnail" :content="postData.content" />
    </div>
</template>

<style lang="less">
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';
</style>
