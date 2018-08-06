<script>
	export default {
		props: [
			'checkListProcessed'
		],
		data: function () {
            return {
                filterByAlerts: false
            }
        },

        computed: {
            checklistFilter: function(){
                if (this.filterByAlerts==true){
                    return this.checkListProcessed.filter( function(value) {
                        return !value.isQuestion
                            ? value
                            : false
                    });
                }
                else{
                    return this.checkListProcessed;
                }
            }
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
           <li class="answer" v-if="checkListProcessed.length > 0">

                <div class="control-group">
                    <label class="control control-checkbox">
                        Filtrar por alertas
                        <input type="checkbox" v-model="filterByAlerts"  />
                        <div class="control_indicator"></div>
                    </label>
                </div>
           </li>
	       <li class="answer" v-for="check in checklistFilter">
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

                .control {
                    font-family: arial;
                    display: block;
                    position: relative;
                    padding-left: 30px;
                    margin-bottom: 5px;
                    padding-top: 3px;
                    cursor: pointer;
                    font-size: 16px;
                }
                .control input {
                    position: absolute;
                    z-index: -1;
                    opacity: 0;
                }
                .control_indicator {
                    position: absolute;
                    top: 2px;
                    left: 0;
                    height: 20px;
                    width: 20px;
                    background: #d3d3d3;
                    border: 0px solid #000000;
                }
                .control-radio .control_indicator {
                    border-radius: undefined%;
                }

                .control:hover input ~ .control_indicator,
                .control input:focus ~ .control_indicator {
                    background: #c0c0c0;
                }

                .control input:checked ~ .control_indicator {
                    background: #d1d1d1;
                }
                .control:hover input:not([disabled]):checked ~ .control_indicator,
                .control input:checked:focus ~ .control_indicator {
                    background: #0e6647d;
                }
                .control input:disabled ~ .control_indicator {
                    background: #e6e6e6;
                    opacity: 0.6;
                    pointer-events: none;
                }
                .control_indicator:after {
                    box-sizing: unset;
                    content: '';
                    position: absolute;
                    display: none;
                }
                .control input:checked ~ .control_indicator:after {
                    display: block;
                }
                .control-checkbox .control_indicator:after {
                    left: 8px;
                    top: 4px;
                    width: 3px;
                    height: 8px;
                    border: solid #3B56A8;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                }
                .control-checkbox input:disabled ~ .control_indicator:after {
                    border-color: #7b7b7b;
                }
            }
        }
    }
</style>