const service = async (request, slug) => {
  
  const response = await request.get(
    `${process.env.BLOG_URL}/load-post/${slug}`
  )
  const post = response.data || {}

  return {
    title: post.title,
    description: post.custom_excerpt,
    thumbnail: post.thumbnail,
    thumbnailDescription: post.thumbnailLegend,
    url: `/artigo/${post.slug}`,
    content: post.content,
  }
}

export default service