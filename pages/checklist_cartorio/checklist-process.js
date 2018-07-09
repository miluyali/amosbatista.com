export default (initialChecklistdata)=>{
	var checklistData = initialChecklistdata;
	var checklistProcessed = [];
	var addToProcessed = function(step, answerNumber){
		var stepToAdd = {
			text: step.text
		};
		if(step.type=="question"){
			stepToAdd.isQuestion = step.type=="question";
			stepToAdd.answer = step.answers[answerNumber];
		}
		checklistProcessed.push(stepToAdd);
	};
	return {
		resolve: (stepChoice)=>{
			if(checklistData.type=="end"){
				addToProcessed(checklistData);
				return checklistData;
			}
			if(stepChoice == undefined){
				addToProcessed(checklistData);
				checklistData = checklistData.next;
			}
			else{
				addToProcessed(checklistData, stepChoice);
				checklistData = checklistData.next[stepChoice];
			}
			return checklistData;
		},
		getProcessed: ()=>{
			return checklistProcessed;
		}
	}
}