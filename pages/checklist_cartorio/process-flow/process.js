import Processed from "./processed-list"

export default (initialChecklistdata)=>{
	var checklistData = initialChecklistdata;
	var processed = Processed();
	var checkToSend;
	
	if(checklistData.type == "flow"){
		checklistData = checklistData.nodes;
	}	
	if(Array.isArray(checklistData)){
		checkToSend = checklistData.shift();
	}
	return {
		resolve: (stepChoice)=>{
			var current;

			if(checklistData.type == "flow"){
				checklistData = checklistData.nodes;
			}

			if(Array.isArray(checklistData)){
				current = checklistData.shift();
			}
			
			if(stepChoice == undefined){
				processed.add(checkToSend);	
				checkToSend = current;
			}
			else{
				processed.add(checkToSend, stepChoice);
				current = checkToSend;
				checkToSend = current.next[stepChoice];
			}
			
			return checkToSend;
		},
		getProcessed: ()=>{
			return processed.get();
		}
	}
}