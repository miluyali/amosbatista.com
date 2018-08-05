<script>
	export default {
		props: [
			'checkListProcessed'
		],
		data: function () {
            return {}
        }
	}
</script>

<template>	
	<div class="checklist">
		<h2 class="answer-title">Checklist:</h2>
	    <ul class="answers-list">
	       <li class="answer" v-if="checkListProcessed.length <= 0">
	           Nenhuma etapa iniciada
	       </li>
	       <li class="answer" v-for="check in checkListProcessed">
	            <span class="answer-icon">
	               <i class="fa fa-check" />
	            </span>
	            {{check.text}}
	            <p class="answer-content" v-if="check.isQuestion==true">
	                R: 
	                <span>
	                    {{check.answer}}
	                </span>
	            </p>
	       </li> 
	       
	    </ul>
    </div>
</template>

<style lang="less">

    @lateral-color: #3B56A8;
    @lateral-text-color: white;
    @yes-clear-color: hsla(120, 45%, 65%, 1);
    @no-clear-color: hsla(5, 75%, 65%, 1);

    @base-font: 'Open Sans', sans-serif;
    @font-light: 300;
    @font-heavy: 700;

	.checklist{
        background-color: @lateral-color;
        color: @lateral-text-color;
        overflow-y: scroll;
        height: 100vh;
        .answer-title{
            margin: 17px 0 0 0;
            padding: 0 10px;
        }
        .answers-list{
            margin: 40px 0;
            .answer{
                padding: 10px 10px 0 10px;
                font-size: 75%;
                .answer-content{
                    margin: 0;
                    text-indent: 20px;
                    span{
                        font-weight: @font-heavy;
                    }
                }
                .yes{
                    color: @yes-clear-color;
                }
                .no{
                    color: @no-clear-color;
                }
            }
        }
    }
</style>