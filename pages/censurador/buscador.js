import request from "../../requests/http"

export default function(param){

  return new Promise(function(resolver,rejeitar){
    var requestUrl = "";
    if(param.artist && param.artist.artistName != ""){
      requestUrl = `?artistName=${param.artist.artistName}&songName=${param.songName}`
    }
    else{
      requestUrl = `?searchValue=${param.searchValue}`
    }

    request.get(
      "https://methodman.com.br/searchSong" + requestUrl
    ).then(function(resposta){
      resolver(resposta.data.result);

    }).catch(function(erro){
      rejeitar(erro);
    });
  });
}