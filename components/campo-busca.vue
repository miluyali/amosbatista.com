<script>
    import vueMeta from '../../components/meta.vue'
    import linkStyle from '../../components/external-link-style.vue'

    export default {
        components: {vueMeta, linkStyle},
        data () {
            return {
                meta: {
                    title: "Censure minha música",
                    description: "Checklist",
                    thumbnail: "https://amosbatista.com/thumbnails/portfolio.jpg",
                    url: "/checklist",
                    type: "post"
                }
            }
        },
        props: [
            'generationPromise',
            'searchvalue',
            'placeholder',
            'selectedObject',
            'itemStyle',
            'itemThumbnail',
            'clickEvent',
            'selectedArtist',
            'placeholderWithArtist'
        ]
    }
</script>


<template lang="pug">
    
    vue-meta(:metadata="meta")
    link-style

    .campo-busca
        .campo-borda
            
            //- INPUT
            .artista-selecionado(v-hide="!selectedArtist")
                span.icone
                    i.fa.fa-user
                span.nome
                    |{{selectedArtist.artistName}}
            //- TODO v-model deve ser inicializado no data
            input.campo(type="text", :placeholder="initialPlaceholder" v-model="searchvalue" tabindex="1")
        
        
        ul.resultados-lista(role="menu" v-show="results.length > 0")
            li.resultado(v-for="result in results" v-class="result[itemStyle]")

                a.resultado-link(href="" v-on:click="resultSelect( result )" tabindex="2")

                    span.icone.musica(v-show="result['type'] == 'song'")
                        i.fa.fa-music
                    span.icone.artista(v-show="result['type'] == 'artist'")
                        i.fa.fa-user

                    span.nome-musica {{result['songName']}}
                    |  - 
                    span.nome-artista {{result['artistName']}}

        a.icone-status.link-apagar-resultado(v-on:click="closeField()" href="" v-hide="searchvalue == '' && !selectedArtist || loadingResult")
            i.fa.fa-times

        span.icone-status.carregando-resultado(v-hide="!loadingResult")
            i.fa.fa-refresh.fa-spin.fa-fw
</template>


<style lang="less">
    @altura_campo_busca: 55px;

    .campo-busca{
        position: relative;
        margin-top: 20px;

        .campo-borda{

            .borda();
            width: 99.7%;
            padding: 7px 0px 3px 0px;
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
                        
                    }

                    .icone.musica{
                        color: @cor_icone_musica;
                    }

                    .icone.artista{
                        color: @cor_icone_artista;
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
