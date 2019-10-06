import request from "../../../requests/http"

const service = function(song){

  return new Promise(function(resolver, rejeitar){

    request.get(
      `${process.env.CENSURADOR_CENSOR_API_URL}?songId=${song}`
    ).then(function(respServer){

      const resposta = respServer.data

      if(resposta.isSongCensored){
        resposta.tipoCarimbo = 'censurado';
        resposta.urlThumb = "censored.png";
        resposta.tituloResposta = `CENSURA!! Artista ${resposta.theSong.artistName} sofre censura do governo!! `;
        resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' foi recusada pelos orgãos de regulamentação de Diversões. Seu autor está sujeito às penalidades previstas por lei.';
      }
      else{
        if(resposta.isSongFreeOfObjections){
          resposta.tipoCarimbo = 'aprovado';
          resposta.urlThumb = "approved.png";
          resposta.tituloResposta = resposta.theSong.songName + ' [Aprovado pelo governo]';
          resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' foi aprovada pelas autoridades, sendo considerada segura para a sociedade brasileira.';
        }
        else{
          resposta.tipoCarimbo = 'comRestricao';
          resposta.urlThumb = "restricted.png";
          resposta.tituloResposta = resposta.theSong.songName + ': Ameaça de Censura!';
          resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' teve partes de sua composição rejeitadas pelos orgãos do governo, e está sujeita à censura.';
        }
      }

      resposta.urlPagina = "";

      resolver(resposta);

    }).catch(function(erro){
      rejeitar(erro);
    });
  });
}

export default service