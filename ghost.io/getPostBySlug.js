const service = async (request, slug) => {

  const response = await request.get(
    `${process.env.BLOG_URL}/ghost/api/v2/content/posts/slug/${slug}?key=${process.env.BLOG_REQUEST_KEY}`
  )
  const posts = response.data.posts || []
  const firstPost = 0

  return {
    title: posts[firstPost].title,
    description: posts[firstPost].custom_excerpt,
    thumbnail: posts[firstPost].feature_image,
    url: `${process.env.SITE_DOMAIN}/artigo/${posts[firstPost].slug}`,
    content: posts[firstPost].html
  }
}

export default service