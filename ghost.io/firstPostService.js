const service = async (request) => {

  const fields = "title,url,custom_excerpt,slug"
  const response = await request.get(
    `${process.env.BLOG_URL}/ghost/api/v2/content/posts/?key=${process.env.BLOG_REQUEST_KEY}&fields=${fields}`
  )
  const posts = response.data.posts || []
  const firstPost = 0

  return {
    title: posts[firstPost].title,
    description: posts[firstPost].custom_excerpt,
    thumbnail: "",
    slug: posts[firstPost].slug 
  }
}

export default service