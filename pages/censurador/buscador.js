import request from "../../requests/http"

export default function(param){

  return new Promise(function(resolver,rejeitar){
    var requestUrl = "";

    if(param.artist && param.artist.artistName != ""){
      requestUrl = `?artistName=${param.artist.artistName}&songName=${param.searchValue}`
    }
    else{
      requestUrl = `?searchValue=${param.searchValue}`
    }

    request.get(
      process.env.CENSURADOR_SEARCH_API_URL + requestUrl
    ).then(function(resposta){
      resolver(resposta.data.result);

    }).catch(function(erro){
      rejeitar(erro);
    });
  });
}