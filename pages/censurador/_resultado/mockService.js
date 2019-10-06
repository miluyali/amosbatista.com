const service = function(song){

  return new Promise(function(resolver, rejeitar){

    var resposta = {}
    resposta.tipoCarimbo = 'censurado';
    resposta.urlThumb = "";
    resposta.tituloResposta = 'Foo Bar - Song of punk [CENSURADO!!]';
    resposta.descricaoResposta = 'A música XPTO foi recusada pelos orgãos de regulamentação de Diversões. Seu autor está sujeito às penalidades previstas por lei.';

    resolver(resposta);
  });
}

export default service