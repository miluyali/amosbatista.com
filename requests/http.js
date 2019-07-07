import axios from 'axios'

const service = {
  get: (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url).then((response)=>{
        resolve(response)
      }).catch((error)=>{
        reject(error)
      })
    })
  }
}

export default service