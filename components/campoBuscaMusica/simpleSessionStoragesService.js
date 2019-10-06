const storageIndex = 'censurador_search'

const saveToStorage = (purchaseData) => {
  sessionStorage.setItem(storageIndex, JSON.stringify(purchaseData))
}

const loadFromStorage = () => {
  return JSON.parse(sessionStorage.getItem(storageIndex)) || {} 
}

const set = (dataToSave, index) => {
  const purchaseData = loadFromStorage()
  
  purchaseData[index] = dataToSave
  saveToStorage(purchaseData)

  return purchaseData
}

const get = (index) => {
  return loadFromStorage()[index]
}

const model = {

  song: {
    set: (selectedSong) => {
      return set(selectedSong, 'selectedSong')
    },
    get: () => {
      return get('selectedSong')
    }
  },
  clear: () => {
    sessionStorage.clear(storageIndex)
  }
}

export default model