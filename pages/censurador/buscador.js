/* TODO: Usar o auto complete do Busca-mE - aplicativo*/

export default function(param){

  return new Promise(function(resolver,rejeitar){

    var objRequest = null;

    if(param.artist){

      objRequest = {
        artistName: param.artist.artistName,
        songName: param.searchValue
      };
    }
    else{
      objRequest = {
        searchValue: param.searchValue
      };
    }
    request.get(
      process.env.CENSURADOR_SEARCH_API_URL,
      objRequest,
      null,
      false
    ).then(function(resposta){
      resolver(resposta.result);

    }).catch(function(erro){
      rejeitar(erro);
    });
  });
}