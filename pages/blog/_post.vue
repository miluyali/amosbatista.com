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
                            : '',
                        content: content.content.rendered
                    }
                    post.meta = {
                        title: post.title,
                        description: post.description,
                        thumbnail: post.thumbnail,
                        url: "/blog/",
                        type: "post"
                    };

                    return {post}
                })
                .catch( function (err){
                    let post = {
                        title: "Erro na geração do post",
                        description: "O erro é " + err,
                        url: "/",
                        thumbnail: "/thumbnails/home.jpg"
                    }

                    post.meta = {
                        title: post.title,
                        description: post.description,
                        thumbnail: post.thumbnail,
                        url: "/blog/",
                        type: "post"
                    }
                    return { post }
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
        <layout :meta="post.meta" :title="post.title" :description="post.description" :thumbnail="post.thumbnail" :content="post.content" />
    </div>
</template>

<style lang="less">
    @import '../../assets/variables.less';
    @import '../../assets/mixin.less';
    @import '../../assets/generic.less';
    @import '../../assets/base.less';
    @import '../../assets/objects.less';
</style>
