import axios from 'axios'

const service = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url).then(resolve).catch(reject)
    })
  }
}

export default service