import chai from "chai"
let expect = chai.expect

import checklist from '../pages/checklist_cartorio/process-flow/process.js'
import checklistLoad from '../pages/checklist_cartorio/checklist-retrieve.js'

describe('checkListProcessorTest', ()=>{
	var fullChecklistData = {
		type: "flow",
		nodes: [
			{
				type: "task",
				text: "Should review field 'Name'"
			},
			{
				type: "task",
				text: "Should review field 'Address'"
			},
			{
				type: "question",
				text: "Do he have an ID?",
				answers: ["no", "unknown", "yes"],
				next: [
					{
						type: "end",
						text: "He must has an ID"
					},
					{
						type: "end",
						text: "You have to know"
					},
					{
						type: "flow",
						nodes: [
							{
								type: "task",
								text: "Check the first digit of ID"
							},
							{
								type: "task",
								text: "Check the last digit of ID"
							},
							{
								type: "question",
								text: "Are they numbers?",
								answers: ["yes", "unknown", "no"],
								next: [
									{
										type: "task",
										text: "Everthing is alright"
									},
									{
										type: "end",
										text: "You have to know"
									},
									{
										type: "end",
										text: "No, it's wrong"
									}
								]
							}	
						]
					}
				]
			},
			{
				type: "task",
				text: "Should review field 'Salary'"
			},
			{
				type: "task",
				text: "All task are done"
			}
		]
	};

	it('should return a function when receives a checklist data', ()=>{
		var checklistData = {};
		var checklistInstance = checklist(checklistData);

		expect(typeof checklistInstance.resolve).to.be.equal('function');
	});



})


export default {}
