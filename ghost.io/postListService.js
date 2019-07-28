const service = async (request) => {

  const fields = "title,url,custom_excerpt,slug"
  const filters = "featured:false"
  const response = await request.get(
    `${process.env.BLOG_URL}/ghost/api/v2/content/posts/?key=${process.env.BLOG_REQUEST_KEY}&fields=${fields}&filter=${filters}`
  )
  
  const posts = response.data.posts || []

  return posts.map((post)=>{
    return {
      title: post.title,
      description: post.custom_excerpt,
      thumbnail: post.feature_image,
      slug: post.slug,
      url: `/artigo/${post.slug}`,
      id: post.id
    }
  })

}

export default service