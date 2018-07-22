import chai from "chai"
let expect = chai.expect

import checklistProcessorClass from '../pages/checklist_cartorio/process-flow/process.js'
import checklistData from "./checklistExampleData.json"

describe('checkListProcessorTest', ()=>{

	it('should be a function', ()=>{
		expect(typeof checklistProcessorClass).to.be.equal('function');
	});

	/*it('should receive a checklist, and, at resolve, must return the fisrt task', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);

		var expected = {
			"type": "task",
			"text": "Should review field 'Name'"
		};
		var actual = processor.resolve();

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);

	});*/

	it('should receive a checklist, and, at resolve, must return the second task', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "task",
			"text": "Should review field 'Address'"
		};
		var actual = processor.resolve();

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);

	});

	it('should resolve three times and return a question', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "question",
			"text": "Do he have an ID?",
			"answers": ["no", "unknown", "yes"]
		};
		processor.resolve();
		var actual = processor.resolve();

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);
		expect(actual.answers[0]).to.be.equal(expected.answers[0]);

	});

	it('should return a end task, after answer no to first question', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "end",
			"text": "He must has an ID"
		};
		var answer = 0;
		processor.resolve();
		processor.resolve();
		var actual = processor.resolve(answer);

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);		
	});

	it('should return the first item of second flow, after answer "yes" to first question', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "task",
			"text": "Check the first digit of ID"
		};
		var answer = 2;
		processor.resolve();
		processor.resolve();
		var actual = processor.resolve(answer);

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);		
	});

	it('should return the question of second flow', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "question",
			"text": "Are they numbers?",
			"answers": ["yes", "unknown", "no"],
		};
		var answer = 2;
		processor.resolve();
		processor.resolve();
		processor.resolve(answer);
		processor.resolve();
		var actual = processor.resolve();

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);	
		expect(actual.answers[0]).to.be.equal(expected.answers[0]);
	});

	it('should return an end task when I answer "no" to second question', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "end",
			"text": "You have to know"
		};
		var answerToFirst = 2;
		processor.resolve();
		processor.resolve();
		processor.resolve(answerToFirst);
		processor.resolve();
		processor.resolve();
		var answerToSecond = 1;
		var actual = processor.resolve(answerToSecond);

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);	
	});

	it('should return a simple task when I answer "yes" to second question', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "task",
			"text": "Everthing is alright"
		};
		var answerToFirst = 2;
		processor.resolve();
		processor.resolve();
		processor.resolve(answerToFirst);
		processor.resolve();
		processor.resolve();
		var answerToSecond = 0;
		var actual = processor.resolve(answerToSecond);

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);	
	});

	it('should return the next task after the last task of second flow, returnning to main flow', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "task",
			"text": "Should review field 'Salary'"
		};
		var answerToFirst = 2;
		processor.resolve();
		processor.resolve();
		processor.resolve(answerToFirst);
		processor.resolve();
		processor.resolve();
		var answerToSecond = 0;
		processor.resolve(answerToSecond);
		var actual = processor.resolve();

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);	
	});
})


export default {}
