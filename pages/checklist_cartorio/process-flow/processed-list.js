export default ()=>{
	var _processed = [];
	var toValidate = (item, answerNumber)=>{
		if(!item) throw new TypeError("An item must be added.");
		if(typeof item != "object") throw new TypeError("An item must be an object.");
		if(!item.text) throw new TypeError("An item must have a 'text'.");
		if(!item.type) throw new TypeError("An item must have a 'type'.");
		if(item.type == "question" && typeof answerNumber != "number") throw new TypeError("A question must have an answer number.");
		if(item.type == "question" && !item.answers) throw new TypeError("A question must have an 'answers'.");
		if(item.type == "question" && !Array.isArray(item.answers)) throw new TypeError("A question 'answers' must be an array.");
		if(item.type == "flow") throw new TypeError("A 'flow' cannot be used to processed.");
	};
	return {
		add: (toAdd, answerNumber)=>{
			toValidate(toAdd, answerNumber);
			var _objToAdd = {
				text: toAdd.text
			};
			if(toAdd.type=="question"){
				_objToAdd.isQuestion = toAdd.type=="question";
				_objToAdd.answer = toAdd.answers[answerNumber];
			}
			_processed.push(_objToAdd);
		},
		get: ()=>{
			return _processed;
		}
	}
}