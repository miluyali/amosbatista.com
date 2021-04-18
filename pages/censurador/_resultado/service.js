import request from "../../../requests/http"

const service = function(song){

  return new Promise(function(resolver, rejeitar){

    request.get(
      `https://methodman.com.br/censurador/processSong?songId=${song}`
    ).then(function(respServer){
      
      const resposta = respServer.data

      if(resposta.isSongCensored){
        resposta.tipoCarimbo = 'censurado';
        resposta.urlThumb = "censurador/censored.png";
        resposta.tituloResposta = `CENSURA!! Artista ${resposta.theSong.artistName} sofre censura!! `;
        resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' foi recusada pelos orgãos de regulamentação de Diversões.';
      }
      else{
        if(resposta.isSongFreeOfObjections){
          resposta.tipoCarimbo = 'aprovado';
          resposta.urlThumb = "censurador/approved.png";
          resposta.tituloResposta = resposta.theSong.songName + ' [Aprovado pelo governo]';
          resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' foi considerada segura para a sociedade brasileira.';
        }
        else{
          resposta.tipoCarimbo = 'comRestricao';
          resposta.urlThumb = "censurador/restricted.png";
          resposta.tituloResposta = resposta.theSong.songName + ': Ameaça de Censura!';
          resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' teve partes de sua composição rejeitadas, e está sujeita à censura.';
        }
      }

      resposta.urlPagina = "";
      resposta.songArtistName = resposta.theSong.songName + " - " + resposta.theSong.artistName

      resolver(resposta);

    }).catch(function(erro){
      rejeitar(erro);
    });
  });
}

export default service