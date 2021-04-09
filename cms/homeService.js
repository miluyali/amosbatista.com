const DEFAULT_PAGE = 'artigo';

const service = async (request, page = 1) => {
  
  const response = await request.get(
    `https://methodman.com.br/home?page=${page}`
  )
  const posts = response.data || []

  return posts.map((post)=>{
    return {
      title: post.title,
      description: post.custom_excerpt,
      thumbnail: post.feature_image,
      slug: post.slug,
      url: `https://amosbatista.com.br/${definePageByTag(post.tags)}/${post.slug}`,
      id: post.id,
      content: post.content,
    }
  })

}

function definePageByTag (tags) {

  if(!tags) {
    return DEFAULT_PAGE;
  }
  if(tags.length <= 0) {
    return DEFAULT_PAGE;
  }
  
  if(tags.find((tag) => tag == 'artigo')){
    return 'artigo'
  }

  if(tags.find((tag) => tag == 'cotidiano')) {
    return 'artigo'
  }

  if(tags.find((tag) => tag == 'caderno1')) {
    return 'caderno1'
  }
}

export default service