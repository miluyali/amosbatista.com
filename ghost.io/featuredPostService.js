const service = async (request) => {

  const fields = "title,url,custom_excerpt,slug,feature_image"
  const filters = "featured:true"
  const response = await request.get(
    `${process.env.BLOG_URL}/ghost/api/v2/content/posts/?key=${process.env.BLOG_REQUEST_KEY}&fields=${fields}&filter=${filters}`
  )
  const posts = response.data.posts || []
  const firstPost = 0
    
  return {
    title: posts[firstPost].title,
    description: posts[firstPost].custom_excerpt,
    thumbnail: posts[firstPost].feature_image,
    slug: posts[firstPost].slug,
    url: `/artigo/${posts[firstPost].slug}`
  }
}

export default service