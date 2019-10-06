<script>
  import buscarCancaoSrv from '../../pages/censurador/buscador'
  import sessionPersistence from './simpleSessionStoragesService'

  export default {
    data () {
      return {
        results: [],
        selectedArtist: null,
        selectedObject: null,
        searchvalue: ""
      }
    },
    props: {
      placeholder: String,
      clickEvent: Function,
      placeholderWithArtist: String
    },
    watch: {
      searchvalue: function(value, lastValue){
        var self = this

        if(value == ''){
          self.results = [];
        }

        // Recebe o Promise fornecido pelo controller
        return buscarCancaoSrv({
          searchValue: value,
          artistName: self.selectedArtist ? 
            self.selectedArtist.artistName :
            null,
          songName: self.selectedArtist ? 
            value :
            null
        })

          // Quando a Promise for concluída, a função then irá preencher os dados da lista
          .then( function (resultsByUser){

            // A lista pode estar exibindo resultado, ocultar se não houver mais nada escrito na tela
            if(value == '' || !resultsByUser){
              self.results = [];
              self.selectedObject = undefined;
            }
            else{

              /* Exibir os resultados, com o limite de 10 registros*/
              self.results = resultsByUser.slice(0, 9);		                               	
            }
            
            self.loadingResult = false;
            
          },
          function(error){

            console.log(error);
            self.loadingResult = false;

          });

            // Enquanto a lista não é carregada, exibir apenas uma mensagem
            self.loadingResult = true;
          }
      },
      // Ao selecionar o resultado, retornar o objeto selecionado para o controller
  
    created: function(){
      this.initialPlaceholder = this.placeholder;

      this.loadingResult = false;

      // Função de validação de entrada de dados
      var processDataEntry = function(){

        
      };

      

      this.closeArtist = function(){
        this.selectedArtist = null;
        this.initialPlaceholder = this.placeholder;
      }

      this.closeField = function(){
        this.selectedArtist = null;
        this.initialPlaceholder = this.placeholder;
        this.searchvalue = ""
      }

    },
    methods: {
      resultSelect: function(value){

        this.searchvalue = value.songName 
          ? value.songName + ', ' + value.artistName:
          value.artistName

        this.selectedObject = value;
        this.results = [];
        sessionPersistence.song.set(value)
        
        if(value.type == "artist"){
          this.selectedArtist = value
          this.searchvalue = ""
        }
        else{
          this.selectedArtist = null
        }

        // Evento de click fornecido pelo controller
        //this.clickEvent(value);
      }
    }
  }
</script>

<template lang="pug">
  .campo-busca

    .campo-borda
      
      //- INPUT
      .artista-selecionado(v-if="selectedArtist")
        span.icone
          i.fa.fa-user
        span.nome
          |{{selectedArtist.artistName}}
        //- a.link-apagar(v-on:click="closeArtist()" href="")
        //- 	i.fa.fa-times

      input.campo(type="text"
        :placeholder="initialPlaceholder"
        v-model="searchvalue"
        tabindex="1"
      )
    
    
    ul.resultados-lista(role="menu" v-if="results.length > 0")
      //-li.resultado(v-for="result in results" :class="result[itemStyle]")
      li.resultado(v-for="result in results")

        a.resultado-link(href="#" v-on:click="resultSelect( result )" tabindex="2")

          span.icone.musica(v-if="result['type'] == 'song'")
            i.fa.fa-music
          span.icone.artista(v-if="result['type'] == 'artist'")
            i.fa.fa-user

          span.nome-musica {{result['songName']}}
          |  - 
          span.nome-artista {{result['artistName']}}

    a.icone-status.link-apagar-resultado(v-on:click="closeField()" href="#" v-if="searchvalue != '' || selectedArtist || loadingResult")
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

  @font-typeWriter: 'Kingthings Trypewriter', monospace;

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
        font-family: @font-typeWriter;
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
      top: 15px;
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