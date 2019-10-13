const service = class {

  constructor(variableName){
    this.variableName  = variableName
  }

  load(){
    const value = localStorage.getItem(this.variableName )

    if(!value)
      return null

    return typeof value == "object" ? JSON.parse(value) : value
  }

  save(value){

    if(!value){
      localStorage.setItem(this.variableName, null)
    }
    else{
      localStorage.setItem(this.variableName, typeof value == "object" ? JSON.stringify(value):value)
    }

  }
}

export default service