const service = async (request) => {

  const fields = "title,url,custom_excerpt,slug"
  const response = await request.get(
    `${process.env.BLOG_URL}/ghost/api/v2/content/posts/?key=${process.env.BLOG_REQUEST_KEY}&fields=${fields}`
  )
  
  const posts = response.posts || []

  return posts.map((post)=>{
    return {
      title: post.title,
      description: post.custom_excerpt,
      thumbnail: "",
      slug: post.slug
    }
  })

}

export default service