import SessionStorage from "../../persistence/session"
import api from "../../ghost.io/inktoberListService"
import httpService from '../../requests/http'

const service = class {

  constructor () {
    this.session = new SessionStorage("inktober-current-page")

    this.INITIAL_PAGE = 0
    this.currentPage = this.INITIAL_PAGE
    this.postList = []
  }

  async loadList () {
    
    const listFromAPI = await api(httpService)
  
    const listWithNext = listFromAPI.map( (post, index) => {
      post.index = index

      return post
    })

    this.postList = listWithNext

    return listWithNext
  }

  getCurrentPage () {
    const page = this.session.load()
    
    if(page){
      return page
    }
    this.session.save(this.INITIAL_PAGE)
    return this.INITIAL_PAGE
  }

  navigateToNext () {

    ++this.currentPage
    this.session.save(this.currentPage)

    const list = this.loadList()

    return list.find( (post) => {
      return post.index == this.currentPage
    })
  }

  navigateToPrevius () {
    --this.currentPage
    this.session.save(this.currentPage)

    const list = this.loadList()

    return list.find( (post) => {
      return post.index == this.currentPage
    })
  }
}

export default service