import chai from "chai"
let expect = chai.expect

import processedChecklist from '../pages/checklist_cartorio/process-flow/processed-list.js'
import checklistData from "./checklistExampleData.json"

describe('checkListProcessorTest', ()=>{

	it('should be a function', ()=>{
		expect(typeof processedChecklist).to.be.equal('function');
	});

	it('should store a "task" type checklist item, and show it in the "processed" method', ()=>{
		var processed = processedChecklist();
		var itemToTest = 0;
		processed.add(checklistData.nodes[itemToTest]);

		var expected = {
			"text": "Should review field 'Name'"
		}
		var actual = processed.get()[itemToTest];

		expect(actual.text).to.be.equal(expected.text);
	});

	it('should store a "question" type item, and a option I choose, and show the item and the choosen answer', ()=>{
		var processed = processedChecklist();
		var itemToTest = 2;
		var answerNumber = 2;
		processed.add(checklistData.nodes[itemToTest], answerNumber);

		var expected = {
			text: "Do he have an ID?",
			isQuestion: true,
			answer: "yes"
		};
		var theFistItem = 0;
		var actual = processed.get()[theFistItem];

		expect(actual.text).to.be.equal(expected.text);
		expect(actual.isQuestion).to.be.equal(expected.isQuestion);
		expect(actual.answer).to.be.equal(expected.answer);
	});

	it('should raise errors if data is badly formated', ()=>{
		var processed = processedChecklist();

		var undefinedItem = undefined;
		expect(()=>{processed.add(undefinedItem)}).to.throw();

		var nonObject = 1;
		expect(()=>{processed.add(nonObject)}).to.throw();

		var emptyObject = {};
		expect(()=>{processed.add(emptyObject)}).to.throw();

		var withoutType = {
			text: "Some text"
		};
		expect(()=>{processed.add(withoutType)}).to.throw();

		var questionWithoutAnswerNumber = {
			text: 'A question text',
			type: "question"
		};
		expect(()=>{processed.add(questionWithoutAnswerNumber)}).to.throw();

		var answerNumber = 0;

		var questionWithoutAnswerNumber = {
			text: 'A question text',
			type: "question",
			isQuestion: true
		};
		expect(()=>{processed.add(questionWithoutAnswerNumber, answerNumber)}).to.throw();

		var questionAnswersWrongType = {
			text: 'A question text',
			type: "question",
			isQuestion: true,
			answers: "wrong answer"
		};
		expect(()=>{processed.add(questionAnswersWrongType, answerNumber)}).to.throw();

		var flow = {
			text: 'A question text',
			type: "flow"
		};
		expect(()=>{processed.add(flow)}).to.throw();
	});
});


export default {}
