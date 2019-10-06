const service = function(song){

  return new Promise(function(resolver, rejeitar){

    request.get(
      config.APIPrincipal.urlProcessa,
      song,
      null,
      false

    ).then(function(resposta){
      
      if(resposta.isSongCensored){
        resposta.tipoCarimbo = 'censurado';
        resposta.urlThumb = config.thumbnail.censurado;
        resposta.tituloResposta = resposta.theSong.artistName + ' [CENSURADO!!]';
        resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' foi recusada pelos orgãos de regulamentação de Diversões. Seu autor está sujeito às penalidades previstas por lei.';
      }
      else{
        if(resposta.isSongFreeOfObjections){
          resposta.tipoCarimbo = 'aprovado';
          resposta.urlThumb = config.thumbnail.aprovado;
          resposta.tituloResposta = resposta.theSong.songName + ' [Aprovado pela censura]';
          resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' foi aprovada pelas autoridades, sendo considerada segura para a sociedade brasileira.';
        }
        else{
          resposta.tipoCarimbo = 'comRestricao';
          resposta.urlThumb = config.thumbnail.comRestricao;
          resposta.tituloResposta = resposta.theSong.songName + ' [Ameaçado de Censura!]';
          resposta.descricaoResposta = 'A música ' + resposta.theSong.songName + ' teve partes de sua composição rejeitadas pelos orgãos do governo, e está sujeita à censura.';
        }
      }

      resposta.urlPagina = document.baseURI;

      resolver(resposta);

    }).catch(function(erro){
      rejeitar(erro);
    });
  });
}

export default service