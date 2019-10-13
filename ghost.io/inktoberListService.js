const service = async (request) => {

  const fields = "title,slug"
  const filters = "tag:inktober"
  const order = "published_at ASC"
  const limit = "31"
  const encodedFilters = encodeURIComponent(filters)
  const response = await request.get(
    `${process.env.BLOG_URL}/ghost/api/v2/content/posts/?key=${process.env.BLOG_REQUEST_KEY}&fields=${fields}&filter=${encodedFilters}&limit=${limit}&order=${order}`
  )
  
  const posts = response.data.posts || []

  return posts.map((post)=>{
    return {
      title: post.title,
      slug: post.slug,
      url: `/inktober2019/${post.slug}`,
    }
  })

}

export default service