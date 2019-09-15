<script>
  export default {
    props: [
      'generationPromise',
      'searchvalue',
      'placeholder',
      'selectedObject',
      'clickEvent',
      'selectedArtist',
      'placeholderWithArtist'
    ],
    created: function(){
      this.searchvalue = '';

      this.initialPlaceholder = this.placeholder;

      this.results = [];
      this.clickEvent = this.clickEvent || function(value){return;};
      this.selectedArtist = undefined;

      this.loadingResult = false;

      // Localizando o elemento Input
      var inputField = document.getElementById("theInput")
      var clearFieldCheck = 1;

      // Função de validação de entrada de dados
      var processDataEntry = function(){

        if(inputField.value == ''){
          this.results = [];
          this.selectedObject = undefined;
        }
          
        else{

          // Validação de tempo. Apenas fazer a pesquisa quando houver 1 sec de diferença
          var dateObj = new Date();
          
          if(clearFieldCheck < 1){
              clearFieldCheck++;
              return;
          }
          else{

            // Recebe o Promise fornecido pelo controller
            this.generationPromise(inputField.value)

              // Quando a Promise for concluída, a função then irá preencher os dados da lista
              .then( function (resultsByUser){

                // A lista pode estar exibindo resultado, ocultar se não houver mais nada escrito na tela
                if(inputField.value == '' || !resultsByUser){
                  this.results = [];
                  this.selectedObject = undefined;
                }
                else{

                  /* Exibir os resultados, com o limite de 10 registros*/
                  this.results = resultsByUser.slice(0, 9);		                               	
                }
                
                this.loadingResult = false;
                
              },
              function(error){

                console.log(error);
                this.loadingResult = false;

              });

              // Enquanto a lista não é carregada, exibir apenas uma mensagem
              this.loadingResult = true;
            }
          }
      };

      this.$watch('searchvalue', function(value, lastValue){

        if(value == ''){
          this.results = [];
        }

        if(value != lastValue)
          processDataEntry();

      });

      // Ao selecionar o resultado, retornar o objeto selecionado para o controller
      this.resultSelect = function(value){

        if(value.songName){

          if(this.selectedArtist)
            this.searchvalue = value.songName;
          else
              this.searchvalue = value.songName + ', ' + value.artistName;
        }
        else{
          this.searchvalue = "";
          this.selectedArtist = value;
          this.initialPlaceholder = this.placeholderWithArtist;
        }
        
        this.selectedObject = value;
        this.results = [];
        clearFieldCheck = 0;

        // Evento de click fornecido pelo controller
        this.clickEvent(value);
      };

      this.closeArtist = function(){
        this.searchvalue = "";
        this.selectedArtist = null;
        this.initialPlaceholder = this.placeholder;
      }

      this.closeField = function(){
        this.searchvalue = "";
        this.selectedArtist = null;
        this.initialPlaceholder = this.placeholder;
      }

    }
  }
</script>

<template lang="pug">
  .campo-busca

    .campo-borda
      
      //- INPUT
      .artista-selecionado(v-if="!selectedArtist")
        span.icone
          i.fa.fa-user
        span.nome
          |{{selectedArtist.artistName}}
        //- a.link-apagar(v-on:click="closeArtist()" href="")
        //- 	i.fa.fa-times

      input.campo(type="text", :placeholder="initialPlaceholder" v-model="searchvalue" tabindex="1" id="theInput")
    
    
    ul.resultados-lista(role="menu" v-if="results.length > 0")
      //-li.resultado(v-for="result in results" :class="result[itemStyle]")
      li.resultado(v-for="result in results")

        a.resultado-link(href="" v-on:click="resultSelect( result )" tabindex="2")

          span.icone.musica(v-if="result['type'] == 'song'")
            i.fa.fa-music
          span.icone.artista(v-if="result['type'] == 'artist'")
            i.fa.fa-user

          span.nome-musica {{result['songName']}}
          |  - 
          span.nome-artista {{result['artistName']}}

    a.icone-status.link-apagar-resultado(v-on:click="closeField()" href="" v-if="searchvalue == '' && !selectedArtist || loadingResult")
      i.fa.fa-times

    span.icone-status.carregando-resultado(v-if="loadingResult")
      i.fa.fa-refresh.fa-spin.fa-fw
</template>

<style lang="less">
  
  @altura_campo_busca: 55px;
  @cor_Borda_Geral: hsla(20,2%,58%, 1);
  @cor_Sombra: hsla(20,2%,5%, 1);
  @cor_titulo: hsla(222,77%,96%, 1);
  @cor_campoBusca_icone: hsla(180,0%,75%, 1);
  @cor_campoBusca_fundo: hsla(180,0%,98%, 1);
  @cor_icone_campobusca: hsla(180,5%,45%, 1);
  @cor_padrao_Consumir: hsla(219,61%,40%, 1);
  @cor_padrao_Consumir_transparencia: hsla(219,61%,40%, 0.1);

  @cor_campoTexto: @cor_Sombra;
  @cor_campoTexto_sub: hsl(120, 15%, 20%);

  @font-face { 
    font-family: 'Kingthings Trypewriter'; 
    src: url('../../static/fonts/Kingthings_Trypewriter_2.ttf'); 
  } 

  @fontePadrao: 'Open Sans', sans-serif;

  .borda(@CorBorda: @cor_Borda_Geral, @borda: 1px){
    border: @borda solid @CorBorda;
    border-radius: 3px;
  }

  .cor-link(@cor: @cor_campoTexto){
    color: @cor;

    &:hover{
      color: @cor;
    }
  }

  .transicao(@tempo: 0.5s){
    transition: all ease @tempo;
  }

  .borda-radius(@radius: 3px){
    border-radius: @radius;
  }

  .sombra(@altura: 1px){
    box-shadow: 0px @altura 3px 1px @cor_Sombra;
  }

  .campo-busca{
    position: relative;
    margin-top: 20px;

    .campo-borda{

      .borda();
      width: 100%;
      padding: 7px 3px 3px 3px;
      display: inline-block;
      overflow-x: hidden;

      &:focus{
        .sombra(3px);
      }

      .artista-selecionado,
      .campo{
        font-family: @fontePadrao;
        background-color: hsla(10, 0%, 0%, 0);
      }

      .artista-selecionado{
        float: left;
        margin: 1px 0 4px 15px;
        padding: 2px 5px;
        font-size: 90%;
        background-color: @cor_titulo;
        color: @cor_Sombra;
        .borda-radius();

        .icone,
        .nome{
          margin-right: 10px;
        }
      }

      .campo{
        color: @cor_titulo;
        float: left;
        width: 100%;
        margin-left: 10px;
        font-size: 75%;
        border:none;
        &:focus{
          outline: none;
        }
      }

      
    }

    .resultados-lista{
      opacity: 1;
      .transicao();
      position: absolute;
      list-style: none;
      background-color: @cor_campoBusca_fundo;
      .borda();
      top: 45px;
      width: 100%;
      padding: 10px 0  0 0;

      .resultado{
        margin: 0 0 5px 10px;

        .resultado-link{
          color: @cor_campoTexto;

          .cor-link();

          .icone{
            margin-right: 10px;
            color: @cor_icone_campobusca;
          }

          .nome-musica{

          }

          .nome-artista{
          }
        }
      }
    }

    .resultados-lista.ng-hide{
      opacity: 0;
    }


    .localidade{
      position: absolute;
      max-width: 85%;
      left: 10px;
      bottom: -25px;
      padding: 5px 20px;
      font-size: 60%;
      background-color: @cor_padrao_Consumir;
      color: @cor_campoTexto;
    }


    .icone-status{
      position: absolute;
      top: 4px;
      right: 10px;
      font-size: 100%;
      color: @cor_titulo;
    }
    .link-apagar-resultado{
    }
    
  }

  @media(min-width: 620px){

    .campo-busca{
    
      .campo-borda{
        
        .campo{
          font-size: 100%;
        }
      }
      
      .icone-status{
        font-size: 150%;	
        top: 0px;
      }
    }


  }
</style>