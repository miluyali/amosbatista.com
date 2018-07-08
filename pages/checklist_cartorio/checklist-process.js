export default (initialChecklistdata)=>{
	var checklistData = initialChecklistdata;
	return {
		resolve: (stepChoice)=>{
			if(stepChoice == undefined){
				checklistData = checklistData.next;
			}
			else{
				checklistData = checklistData.next[stepChoice];
			}
			return checklistData;
		}
	}
	
}