import { CharacterManagerFormatter } from "./CharacterManagerFormatter";
import { Nodes, Edges } from './CharacterManagerClass'

describe("formatter", () => {
  it("must reduce the edge and node content by a give minimal value", () => {
    const nodes = [{"id":1,"label":"becky"},{"id":2,"label":"joyce"},{"id":3,"label":"hank"},{"id":4,"label":"asma"},{"id":5,"label":"jennifer"}];
    const edges = [{"from":2,"to":1,"value":362},{"from":3,"to":1,"value":1},{"from":3,"to":2,"value":1},{"from":4,"to":2,"value":1},{"from":4,"to":3,"value":1},{"from":5,"to":1,"value":1},{"from":5,"to":2,"value":222},{"from":5,"to":3,"value":1},{"from":5,"to":4,"value":1},{"from":6,"to":1,"value":104},{"from":6,"to":2,"value":400},{"from":6,"to":1,"value":5},{"from":6,"to":4,"value":5},{"from":6,"to":5,"value":188},{"from":7,"to":1,"value":13}]
    const formatter = new CharacterManagerFormatter(nodes, edges);
    
    const expectedNodes: Array<Nodes> = [
      { id: 1, label: 'becky' },     
      { id: 2, label: 'joyce' },     
      { id: 4, label: 'asma' },      
      { id: 5, label: 'jennifer' }
    ];
    const expectedEdges: Array<Edges> = [
      { from: 2, to: 1, value: 362 },
      { from: 5, to: 2, value: 222 },
      { from: 6, to: 1, value: 104 },
      { from: 6, to: 2, value: 400 },
      { from: 6, to: 1, value: 5 },
      { from: 6, to: 4, value: 5 },
      { from: 6, to: 5, value: 188 },
      { from: 7, to: 1, value: 13 }
    ];
    const mininalValue = 2
    const actual = formatter.filterByMininalValue(mininalValue);
    
    expect(actual.nodes).toEqual(expectedNodes);
    expect(actual.edges).toEqual(expectedEdges);
  });  

});