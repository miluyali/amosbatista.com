import Processed from "./processed-list"

export default (initialChecklistdata)=>{
	var checklistData = initialChecklistdata;
	var processed = Processed();
	var checkToSend;
	var flowStack = [];
	
	checklistData = checklistData.nodes;
	checkToSend = checklistData.shift();
	
	return {
		resolve: (stepChoice)=>{
			var current;
			var currentFlow = [];

			if(flowStack.length <= 0){
				currentFlow = checklistData;
			}
			else{
				currentFlow = flowStack[flowStack.length - 1];
			}

			current = currentFlow[0];
			
			while(flowStack.length > 0 && currentFlow.length <= 0){
				currentFlow = flowStack[flowStack.length - 1];

				if(currentFlow.length <= 0){
					flowStack.pop();
				}
			}

			if(stepChoice == undefined){
				processed.add(checkToSend);	
				checkToSend = current;
				currentFlow.shift();
			}
			else{
				processed.add(checkToSend, stepChoice);
				current = checkToSend;

				if(current.next[stepChoice].type == "flow"){
					flowStack.push(current.next[stepChoice].nodes);
					checkToSend = current.next[stepChoice].nodes.shift();
				}
				else{
					checkToSend = current.next[stepChoice];
				}
			}
			return checkToSend;
		},
		getProcessed: ()=>{
			return processed.get();
		}
	}
}