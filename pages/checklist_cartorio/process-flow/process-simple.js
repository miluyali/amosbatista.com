import Processed from "./processed-list"

export default (checklistData)=>{
	var processed = Processed();
	var lastProcessed = checklistData[0];
	return {
		resolve: (stepChoice)=>{
			var current;

			if(lastProcessed.type == "end"){
				return lastProcessed;
			}

			if(lastProcessed.type == "question" && stepChoice != undefined){
				processed.add(lastProcessed, stepChoice);
				current = checklistData[lastProcessed.next[stepChoice]];
			}
			else{
				processed.add(lastProcessed);
				current = checklistData[lastProcessed.next];
			}
			lastProcessed = current;
			return current;
		},
		getProcessed: ()=>{
			return processed.get();
		}
	}
}