import chai from "chai"
let expect = chai.expect

import checklistProcessorClass from '../pages/checklist_cartorio/process-flow/process-simple.js'
import checklistData from "./checklist-simple-example.json"

describe('checklist - Simple processor', ()=>{

	it('should be a function', ()=>{
		expect(typeof checklistProcessorClass).to.be.equal('function');
	});

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

		var expectedProcessed = [{
			"text": "Should review field 'Name'"
		}];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
	});

	it('should resolve two times and return a question', ()=>{
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

		var expectedProcessed = [
			{
				"text": "Should review field 'Name'"
			},
			{
				"text": "Should review field 'Address'",
			}
		];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
		expect(actualProcessed[1].text).to.be.equal(expectedProcessed[1].text);

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

		var expectedProcessed = [
			{
				"text": "Should review field 'Name'"
			},
			{
				"text": "Should review field 'Address'",
			},
			{
				"text": "Do he have an ID?",
				"isQuestion": true,
				"answer": "no"
			}
		];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
		expect(actualProcessed[1].text).to.be.equal(expectedProcessed[1].text);
		expect(actualProcessed[2].text).to.be.equal(expectedProcessed[2].text);
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

		var expectedProcessed = [
			{
				"text": "Should review field 'Name'"
			},
			{
				"text": "Should review field 'Address'",
			},
			{
				"text": "Do he have an ID?",
				"isQuestion": true,
				"answer": "yes"
			}
		];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
		expect(actualProcessed[1].text).to.be.equal(expectedProcessed[1].text);
		expect(actualProcessed[2].text).to.be.equal(expectedProcessed[2].text);
		expect(actualProcessed[2].isQuestion).to.be.equal(expectedProcessed[2].isQuestion);
		expect(actualProcessed[2].answer).to.be.equal(expectedProcessed[2].answer);
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

		var expectedProcessed = [
			{
				"text": "Should review field 'Name'"
			},
			{
				"text": "Should review field 'Address'",
			},
			{
				"text": "Do he have an ID?",
				"isQuestion": true,
				"answer": "yes"
			}
		];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
		expect(actualProcessed[1].text).to.be.equal(expectedProcessed[1].text);
		expect(actualProcessed[2].text).to.be.equal(expectedProcessed[2].text);
		expect(actualProcessed[2].isQuestion).to.be.equal(expectedProcessed[2].isQuestion);
		expect(actualProcessed[2].answer).to.be.equal(expectedProcessed[2].answer);
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

		var expectedProcessed = [
			{
				"text": "Should review field 'Name'"
			},
			{
				"text": "Should review field 'Address'",
			},
			{
				"text": "Do he have an ID?",
				"isQuestion": true,
				"answer": "yes"
			},
			{
				"text": "Check the first digit of ID"
			}
		];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
		expect(actualProcessed[1].text).to.be.equal(expectedProcessed[1].text);
		expect(actualProcessed[2].text).to.be.equal(expectedProcessed[2].text);
		expect(actualProcessed[2].isQuestion).to.be.equal(expectedProcessed[2].isQuestion);
		expect(actualProcessed[2].answer).to.be.equal(expectedProcessed[2].answer);
		expect(actualProcessed[3].text).to.be.equal(expectedProcessed[3].text);
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

		var expectedProcessed = [
			{
				"text": "Should review field 'Name'"
			},
			{
				"text": "Should review field 'Address'",
			},
			{
				"text": "Do he have an ID?",
				"isQuestion": true,
				"answer": "yes"
			},
			{
				"text": "Check the first digit of ID"
			},
			{
				"text": "Check the last digit of ID"
			},
			{
				"text": "Are they numbers?",
				"isQuestion": true,
				"answer": "yes"
			}
		];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
		expect(actualProcessed[1].text).to.be.equal(expectedProcessed[1].text);
		expect(actualProcessed[2].text).to.be.equal(expectedProcessed[2].text);
		expect(actualProcessed[2].isQuestion).to.be.equal(expectedProcessed[2].isQuestion);
		expect(actualProcessed[2].answer).to.be.equal(expectedProcessed[2].answer);
		expect(actualProcessed[3].text).to.be.equal(expectedProcessed[3].text);
		expect(actualProcessed[4].text).to.be.equal(expectedProcessed[4].text);
		expect(actualProcessed[5].text).to.be.equal(expectedProcessed[5].text);
		expect(actualProcessed[5].isQuestion).to.be.equal(expectedProcessed[5].isQuestion);
		expect(actualProcessed[5].answer).to.be.equal(expectedProcessed[5].answer);
	});

	it('should return the next task after the last task of second flow, returning to main flow', ()=>{
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

		var expectedProcessed = [
			{
				"text": "Should review field 'Name'"
			},
			{
				"text": "Should review field 'Address'",
			},
			{
				"text": "Do he have an ID?",
				"isQuestion": true,
				"answer": "yes"
			},
			{
				"text": "Check the first digit of ID"
			},
			{
				"text": "Check the last digit of ID"
			},
			{
				"text": "Are they numbers?",
				"isQuestion": true,
				"answer": "yes"
			},
			{
				"text": "Everthing is alright"
			}
		];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
		expect(actualProcessed[1].text).to.be.equal(expectedProcessed[1].text);
		expect(actualProcessed[2].text).to.be.equal(expectedProcessed[2].text);
		expect(actualProcessed[2].isQuestion).to.be.equal(expectedProcessed[2].isQuestion);
		expect(actualProcessed[2].answer).to.be.equal(expectedProcessed[2].answer);
		expect(actualProcessed[3].text).to.be.equal(expectedProcessed[3].text);
		expect(actualProcessed[4].text).to.be.equal(expectedProcessed[4].text);
		expect(actualProcessed[5].text).to.be.equal(expectedProcessed[5].text);
		expect(actualProcessed[5].isQuestion).to.be.equal(expectedProcessed[5].isQuestion);
		expect(actualProcessed[5].answer).to.be.equal(expectedProcessed[5].answer);
		expect(actualProcessed[6].text).to.be.equal(expectedProcessed[6].text);
	});

	it('should return the last task in the main flow', ()=>{
		var clonedChecklist =  JSON.parse(JSON.stringify(checklistData));
		var processor = checklistProcessorClass(clonedChecklist);
		
		var expected = {
			"type": "end",
			"text": "All task are done"
		};
		var answerToFirst = 2;
		processor.resolve();
		processor.resolve();
		processor.resolve(answerToFirst);
		processor.resolve();
		processor.resolve();
		var answerToSecond = 0;
		processor.resolve(answerToSecond);
		processor.resolve();
		var actual = processor.resolve();

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);	

		var expectedProcessed = [
			{
				"text": "Should review field 'Name'"
			},
			{
				"text": "Should review field 'Address'",
			},
			{
				"text": "Do he have an ID?",
				"isQuestion": true,
				"answer": "yes"
			},
			{
				"text": "Check the first digit of ID"
			},
			{
				"text": "Check the last digit of ID"
			},
			{
				"text": "Are they numbers?",
				"isQuestion": true,
				"answer": "yes"
			},
			{
				"text": "Everthing is alright"
			},
			{
				"text": "Should review field 'Salary'"
			}
		];

		var actualProcessed = processor.getProcessed();
		expect(actualProcessed[0].text).to.be.equal(expectedProcessed[0].text);
		expect(actualProcessed[1].text).to.be.equal(expectedProcessed[1].text);
		expect(actualProcessed[2].text).to.be.equal(expectedProcessed[2].text);
		expect(actualProcessed[2].isQuestion).to.be.equal(expectedProcessed[2].isQuestion);
		expect(actualProcessed[2].answer).to.be.equal(expectedProcessed[2].answer);
		expect(actualProcessed[3].text).to.be.equal(expectedProcessed[3].text);
		expect(actualProcessed[4].text).to.be.equal(expectedProcessed[4].text);
		expect(actualProcessed[5].text).to.be.equal(expectedProcessed[5].text);
		expect(actualProcessed[5].isQuestion).to.be.equal(expectedProcessed[5].isQuestion);
		expect(actualProcessed[5].answer).to.be.equal(expectedProcessed[5].answer);
		expect(actualProcessed[6].text).to.be.equal(expectedProcessed[6].text);
		expect(actualProcessed[7].text).to.be.equal(expectedProcessed[7].text);
	});
})


export default {}
