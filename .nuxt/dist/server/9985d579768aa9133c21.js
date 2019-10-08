exports.ids=[7,6],exports.modules={135:function(e,t,o){"use strict";o.r(t);var n=o(33),r=o(92);const c=()=>JSON.parse(sessionStorage.getItem("censurador_search"))||{},l=(e,t)=>{const o=c();return o[t]=e,(e=>{sessionStorage.setItem("censurador_search",JSON.stringify(e))})(o),o};var d={song:{set:e=>l(e,"selectedSong"),get:()=>(e=>c()[e])("selectedSong")},clear:()=>{sessionStorage.clear("censurador_search")}},f={data:()=>({results:[],selectedArtist:null,selectedObject:null,searchvalue:""}),props:{placeholder:String,clickEvent:Function,placeholderWithArtist:String},watch:{searchvalue:function(e,t){var o=this;return""==e&&(o.results=[]),Object(r.default)({searchValue:e,artistName:o.selectedArtist?o.selectedArtist.artistName:null,songName:o.selectedArtist?e:null}).then(function(t){""!=e&&t?o.results=t.slice(0,9):(o.results=[],o.selectedObject=void 0),o.loadingResult=!1},function(e){console.log(e),o.loadingResult=!1})}},created:function(){this.initialPlaceholder=this.placeholder,this.loadingResult=!1;this.closeArtist=function(){this.selectedArtist=null,this.initialPlaceholder=this.placeholder},this.closeField=function(){this.selectedArtist=null,this.initialPlaceholder=this.placeholder,this.searchvalue=""}},methods:{resultSelect:function(e){this.searchvalue=e.songName?e.songName+", "+e.artistName:e.artistName,this.selectedObject=e,this.results=[],d.song.set(e),"artist"==e.type?(this.selectedArtist=e,this.searchvalue=""):this.selectedArtist=null}}},h=o(1);var m=Object(h.a)(f,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"campo-busca"},[e._ssrNode('<div class="campo-borda">'+(e.selectedArtist?'<div class="artista-selecionado"><span class="icone"><i class="fa fa-user"></i></span><span class="nome">'+e._ssrEscape(e._s(e.selectedArtist.artistName))+"</span></div>":"\x3c!----\x3e")+'<input type="text"'+e._ssrAttr("placeholder",e.initialPlaceholder)+' tabindex="1"'+e._ssrAttr("value",e.searchvalue)+' class="campo"></div>'+(e.results.length>0?'<ul role="menu" class="resultados-lista">'+e._ssrList(e.results,function(t){return'<li class="resultado"><a href="#" tabindex="2" class="resultado-link">'+("song"==t.type?'<span class="icone musica"><i class="fa fa-music"></i></span>':"\x3c!----\x3e")+("artist"==t.type?'<span class="icone artista"><i class="fa fa-user"></i></span>':"\x3c!----\x3e")+'<span class="nome-musica">'+e._ssrEscape(e._s(t.songName))+'</span> - <span class="nome-artista">'+e._ssrEscape(e._s(t.artistName))+"</span></a></li>"})+"</ul>":"\x3c!----\x3e")+(""!=e.searchvalue||e.selectedArtist||e.loadingResult?'<a href="#" class="icone-status link-apagar-resultado"><i class="fa fa-times"></i></a>':"\x3c!----\x3e")+(e.loadingResult?'<span class="icone-status carregando-resultado"><i class="fa fa-refresh fa-spin fa-fw"></i></span>':"\x3c!----\x3e"))])},[],!1,function(e){var t=o(94);t.__inject__&&t.__inject__(e)},null,"46496482").exports,x={data:()=>({buscaGeral:"",resultadoBusca:null}),methods:{fazerResultado:function(){const e=d.song.get();this.$nuxt.$router.replace({path:`/censurador/${e.idAPI}`})}},components:{linkStyle:n.a,campoBusca:m},created(){this.buscaGeral=""}};var v=Object(h.a)(x,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"conteudo-central"},[this._ssrNode('<div class="bg"><div class="bg-degrade"></div></div>'),t("link-style"),this._ssrNode('<h1 class="titulo-site">Censure minha música!</h1><p class="descricao">Como seria se em pleno séc. 21, ainda estivéssemos sob Regime Militar? Será que todas as músicas que ouvimos hoje seriam permitidas em plena época de Ditadura? Descubra se seu artista favorito sofreria censura. </p>'),t("campo-busca",{attrs:{placeholder:"Informe o nome da música ou artista","placeholder-with-artist":"Informe o nome da música"}}),this._ssrNode('<div class="confirmacao-pesquisa"><button tabindex="3" class="btn-pesquisa">Iniciar Censura<span class="icone"><i class="fa fa-gavel"></i></span></button></div>')],2)},[],!1,function(e){var t=o(96);t.__inject__&&t.__inject__(e)},null,"17b58c91");t.default=v.exports},33:function(e,t,o){"use strict";var n={head:function(){return{link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Fjalla+One|Source+Serif+Pro:400,700"},{rel:"favicon",href:"~/static/favicon.ico"},{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.0.9/css/all.css",integrity:"sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1",crossorigin:"anonymous"}]}}},r=o(1),component=Object(r.a)(n,function(){var e=this.$createElement;return(this._self._c||e)("div",[])},[],!1,null,null,"5afc7480");t.a=component.exports},57:function(e,t,o){"use strict";var n=o(17),r=o.n(n);const c={get:e=>new Promise((t,o)=>{r.a.get(e).then(e=>{t(e)}).catch(e=>{o(e)})})};t.a=c},69:function(e,t,o){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},70:function(e,t,o){e.exports=o.p+"fonts/df8583a.ttf"},71:function(e,t,o){var content=o(95);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=o(6).default;e.exports.__inject__=function(e){n("4b4e6238",content,!0,e)}},72:function(e,t,o){var content=o(97);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);var n=o(6).default;e.exports.__inject__=function(e){n("164289b8",content,!0,e)}},73:function(e,t,o){e.exports=o.p+"img/701e0e1.jpg"},92:function(e,t,o){"use strict";o.r(t);var n=o(57);t.default=function(param){return new Promise(function(e,t){var o="";o=param.artist&&""!=param.artist.artistName?`?artistName=${param.artist.artistName}&songName=${param.songName}`:`?searchValue=${param.searchValue}`,n.a.get("https://methodman.com.br/searchSong"+o).then(function(t){e(t.data.result)}).catch(function(e){t(e)})})}},94:function(e,t,o){"use strict";o.r(t);var n=o(71),r=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,function(){return n[e]})}(c);t.default=r.a},95:function(e,t,o){t=e.exports=o(5)(!1);var n=o(69)(o(70));t.push([e.i,"@font-face{font-family:Kingthings Trypewriter;src:url("+n+")}.campo-busca{position:relative;margin-top:20px}.campo-busca .campo-borda{border:1px solid #969392;border-radius:3px;width:100%;padding:7px 3px 3px;display:inline-block;overflow-x:hidden}.campo-busca .campo-borda:focus{box-shadow:0 3px 3px 1px #0d0d0c}.campo-busca .campo-borda .artista-selecionado,.campo-busca .campo-borda .campo{font-family:Open Sans,sans-serif;background-color:transparent}.campo-busca .campo-borda .artista-selecionado{float:left;margin:1px 0 4px 15px;padding:2px 5px;font-size:90%;background-color:#edf2fd;color:#0d0d0c;border-radius:3px}.campo-busca .campo-borda .artista-selecionado .icone,.campo-busca .campo-borda .artista-selecionado .nome{margin-right:10px}.campo-busca .campo-borda .campo{color:#edf2fd;float:left;width:100%;margin-left:10px;font-size:75%;border:none;font-family:Kingthings Trypewriter,monospace}.campo-busca .campo-borda .campo:focus{outline:none}.campo-busca .resultados-lista{opacity:1;transition:all .5s ease;position:absolute;list-style:none;background-color:#fafafa;border:1px solid #969392;border-radius:3px;top:15px;width:100%;padding:10px 0 0}.campo-busca .resultados-lista .resultado{margin:0 0 5px 10px}.campo-busca .resultados-lista .resultado .resultado-link,.campo-busca .resultados-lista .resultado .resultado-link:hover{color:#0d0d0c}.campo-busca .resultados-lista .resultado .resultado-link .icone{margin-right:10px;color:#6d7878}.campo-busca .resultados-lista.ng-hide{opacity:0}.campo-busca .localidade{position:absolute;max-width:85%;left:10px;bottom:-25px;padding:5px 20px;font-size:60%;background-color:#2853a4;color:#0d0d0c}.campo-busca .icone-status{position:absolute;top:4px;right:10px;font-size:100%;color:#edf2fd}@media (min-width:620px){.campo-busca .campo-borda .campo{font-size:100%}.campo-busca .icone-status{font-size:150%;top:0}}",""])},96:function(e,t,o){"use strict";o.r(t);var n=o(72),r=o.n(n);for(var c in n)"default"!==c&&function(e){o.d(t,e,function(){return n[e]})}(c);t.default=r.a},97:function(e,t,o){t=e.exports=o(5)(!1);var n=o(69),r=n(o(70)),c=n(o(73));t.push([e.i,"@font-face{font-family:Kingthings Trypewriter;src:url("+r+")}body{margin:0}a{color:inherit}a,a:hover{text-decoration:none}input{font:inherit}ul{padding:0}li{list-style:none}body{font-size:20px;font-family:Open Sans,sans-serif;background-color:#000}.bg{width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;background-image:url("+c+");background-size:cover;background-position:top}.bg .bg-degrade{width:100%;height:100vh;background:rgba(0,0,0,.8) 25%;background:radial-gradient(rgba(0,0,0,.8) 25%,#000)}.main-container{position:relative;margin:0 auto;width:96%}.descricao{font-family:Kingthings Trypewriter,monospace;text-align:justify;color:#edf2fd;line-height:90%}.ocultar{opacity:0!important;z-index:-2!important}.botao{font-size:80%;font-weight:700;padding:3px 5px;border-radius:3px;margin:0 0 5px 5px;color:#0d0d0c;display:inline-block}.botao .fa{margin-right:3px}.titulo-site{font-family:Fjalla One,sans-serif;color:#edf2fd;text-align:center;font-size:500%;text-transform:uppercase;letter-spacing:-6px;line-height:90%;text-shadow:0 2px #0d0d0c}.conteudo-central{width:75%;margin:0 auto}.conteudo-central .titulo-site{width:575px;margin:50px auto 0;font-size:500%}.conteudo-central .descricao{font-family:Kingthings Trypewriter,monospace;text-align:justify;color:#edf2fd;line-height:90%}.conteudo-central .confirmacao-pesquisa{width:100%;padding:15px 0}.conteudo-central .confirmacao-pesquisa .btn-pesquisa{padding:10px;font-size:100%;font-weight:700;color:#edf2fd;float:right;background-color:#7d3e12;border-radius:3px}.conteudo-central .confirmacao-pesquisa .btn-pesquisa:hover{background-color:#cf6317}.conteudo-central .confirmacao-pesquisa .btn-pesquisa[disabled]{background-color:#949e96}.conteudo-central .confirmacao-pesquisa .btn-pesquisa .icone{margin-left:5px}@media (max-width:700px){.conteudo-central .titulo-site{width:auto;font-size:400%}}.container-loading-screen{transition:all .5s ease;z-index:2;position:fixed;width:100%;height:100%;top:0;left:0;background-color:rgba(0,0,0,.9)}.container-loading-screen .error-screen,.container-loading-screen .loading-screen{position:absolute;width:100%;height:190px;background-color:rgba(0,0,0,.9);top:25%;left:0;transition:all .5s ease;color:#edf2fd}.container-loading-screen .error-screen .titulo,.container-loading-screen .loading-screen .titulo{width:75%;margin:auto}.container-loading-screen .error-screen .detalhes-descricao,.container-loading-screen .loading-screen .detalhes-descricao{width:75%;margin:auto;font-family:Open Sans,sans-serif}.container-loading-screen .error-screen .detalhes-descricao .icone,.container-loading-screen .loading-screen .detalhes-descricao .icone{font-size:300%;width:15%;float:left}.container-loading-screen .error-screen .detalhes-descricao .descricao,.container-loading-screen .loading-screen .detalhes-descricao .descricao{margin:0;width:85%;float:left}.container-loading-screen .error-screen .detalhes-descricao .link-retorno,.container-loading-screen .loading-screen .detalhes-descricao .link-retorno{color:#edf2fd;background-color:#9c1916;margin-top:10px}@media (max-width:600px){.container-loading-screen .error-screen .detalhes-descricao .descricao,.container-loading-screen .error-screen .detalhes-descricao .icone,.container-loading-screen .loading-screen .detalhes-descricao .descricao,.container-loading-screen .loading-screen .detalhes-descricao .icone{width:100%}.container-loading-screen .error-screen .titulo,.container-loading-screen .loading-screen .titulo{font-size:320%}}",""])}};
//# sourceMappingURL=9985d579768aa9133c21.js.map