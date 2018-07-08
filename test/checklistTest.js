import chai from "chai"
let expect = chai.expect

import checklist from '../pages/checklist_cartorio/checklist-process.js'
import checklistLoad from '../pages/checklist_cartorio/checklist-retrieve.js'

describe('checkListProcessorTest', ()=>{
	it('should return a function when receives a checklist data', ()=>{
		var checklistData = {};
		var checklistInstance = checklist(checklistData);

		expect(typeof checklistInstance.resolve).to.be.equal('function');
	});

	it('should return a next object when resolve, without parameters', ()=>{
		var checklistData = {
			type: "task",
			text: "Must process to next step",
			next: {
				type: "task",
				text: "This is a next step",
				next: null
			}
		};
		var checklistInstance = checklist(checklistData);

		var expected = {
			type: "task",
			text: "This is a next step",
			next: null
		}
		var actual = checklistInstance.resolve();

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);
		expect(actual.next).to.be.equal(expected.next);
	});

	it('should return null when resolve, without parameters, and it is at end of structure', ()=>{
		var checklistData = {
			type: "end",
			text: "Last step",
			next: null
		};
		var checklistInstance = checklist(checklistData);

		var expected = null
		var actual = checklistInstance.resolve();

		expect(actual).to.be.null;
	});

	it('should return the first element of a checklist question, when resolve, with an answer index', ()=>{
		var checklistData = {
			type: "question",
			text: "A questionary with 3 questions",
			answers: ["yes", "no", "maybe"],
			next: [
				{
					type: "task",
					text: "Correct step",
					next: null
				},
				{
					type: "task",
					text: "Wrong step",
					next: null
				},
				{
					type: "task",
					text: "Wrong step",
					next: null
				}
			]
		};
		var checklistInstance = checklist(checklistData);

		var expected = {
			type: "task",
			text: "Correct step",
			next: null
		};
		var actual = checklistInstance.resolve(0);

		expect(actual.type).to.be.equal(expected.type);
		expect(actual.text).to.be.equal(expected.text);
		expect(actual.next).to.be.equal(expected.next);
	});

	it('shoud return a sequence of objects, until return null, at end of structure', ()=>{
		var checklistData = {
			type: "question",
			text: "A questionary with 2 questions",
			answers: ["yes", "no"],
			next: [
				{
					type: "task",
					text: "Wrong step",
					next: null
				},
				{
					type: "task",
					text: "A task with a questionary",
					next: {
						type: "question",
						text: "A questionary with 3 questions",
						answers: ["yes", "no", "maybe"],
						next: [
							{
								type: "task",
								text: "Wrong step",
								next: null
							},
							{
								type: "task",
								text: "Correct step",
								next: null
							},
							{
								type: "task",
								text: "Wrong step",
								next: null
							}
						]
					}
				}
			]
		};
		var checklistInstance = checklist(checklistData);

		var actual = checklistInstance.resolve(1);

		expect(actual.type).to.be.equal("task");
		expect(actual.text).to.be.equal("A task with a questionary");
		expect(typeof actual.next).to.be.equal("object");

		actual = checklistInstance.resolve();

		expect(actual.type).to.be.equal("question");
		expect(actual.text).to.be.equal("A questionary with 3 questions");
		expect(actual.next.length).to.be.equal(3);

		actual = checklistInstance.resolve(1);

		expect(actual.type).to.be.equal("task");
		expect(actual.text).to.be.equal("Correct step");
		expect(actual.next).to.be.null;
	});

	it('shoud load the initial json data', ()=>{
		var questionaryData = checklistLoad();
		var checklistInstance = checklist(questionaryData);
		var actual = checklistInstance.resolve();
		expect(typeof actual.text).to.be.equal("string");
	});
})


export default {}
