const service = async (request, page = 1) => {
  
  console.log("lenv", JSON.stringify(process.env))
  const response = await request.get(
    `${process.env.BLOG_URL}/home?page=${page}`
  )
  const posts = response.data || []

  return posts.map((post)=>{
    return {
      title: post.title,
      description: post.custom_excerpt,
      thumbnail: post.feature_image,
      slug: post.slug,
      url: `/caderno1/${post.slug}`,
      id: post.id,
      content: post.content,
    }
  })

}

export default service