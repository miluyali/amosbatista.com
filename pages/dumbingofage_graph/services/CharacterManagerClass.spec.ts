import { CharacterManagerClass, Character, Nodes, Edges } from "./CharacterManagerClass";

describe("Dumbing of Age Graph Char Controller", () => {

  it("must be a class", () => {
    const actual = new CharacterManagerClass();
    expect(actual).toBeInstanceOf(CharacterManagerClass);
  });

  it("must return a empty list if there's no char", () => {
    const charController = new CharacterManagerClass();

    const actualEdges = charController.GenerateEdges();
    const expectedEdges: Array<Edges> = [];
    expect(actualEdges).toEqual(expectedEdges);

    const actualNodes = charController.GenerateNodes();
    const expectedNodes: Array<Nodes> = [];
    expect(actualNodes).toEqual(expectedNodes);
  });

  it("must receive a page, with one character, and return a node without vertices", () => {
    const charController = new CharacterManagerClass();

    const newChar: Character = {
      name: "Joyce"
    };

    charController.TryAddCharacter(newChar);
    const expectedNodes:Array<Nodes> = [{
      id: 1,
      label: "Joyce"
    }];
    expect(charController.GenerateNodes()).toEqual(expectedNodes);
  });

  it("must receive a page with one character already added, and must return a node without repeted values", () => {
    const charController = new CharacterManagerClass();

    const newChar: Character = {
      name: "Joyce"
    };
    charController.TryAddCharacter(newChar);

    const repeatedChar: Character = {
      name: "Joyce"
    };
    charController.TryAddCharacter(newChar);
  
    const expectedNodes:Array<Nodes> = [{
      id: 1,
      label: "Joyce"
    }];
    expect(charController.GenerateNodes()).toEqual(expectedNodes);
  });
  
  it("must receive another character and must return a node list", () => {
     const charController = new CharacterManagerClass();

    const firstChar: Character = {
      name: "Joyce"
    };
    charController.TryAddCharacter(firstChar);
    const secondChar: Character = {
      name: "Sarah"
    };
    charController.TryAddCharacter(secondChar);
    const thirdChar: Character = {
      name: "Dorothy"
    };
    charController.TryAddCharacter(thirdChar);
  
    const expectedNodes:Array<Nodes> = [{
      id: 1,
      label: "Joyce"
    },{
      id: 2,
      label: "Sarah"
    }, {
      id: 3,
      label: "Dorothy"
    }];
    expect(charController.GenerateNodes()).toEqual(expectedNodes);
  });
  
  it("must receive one character and generate an empty edge list", () => {
    const charController = new CharacterManagerClass();
    
    const newChar: Character = {
      name: "Liz"
    };
    charController.TryAddCharacter(newChar);

    const actualEdges = charController.GenerateEdges();
    const expectedEdges: Array<Edges> = [];
    expect(actualEdges).toEqual(expectedEdges);
  });
  
  it("must receive two nodes and create an edge", () => {
    const charController = new CharacterManagerClass();
    
    charController.TryAddCharacter( { name: "Walky" });
    charController.TryAddCharacter( { name: "Danny" });
    
    const nodes = charController.GenerateNodes();
    const node1 = 0, node2 = 1;
    charController.AddInteraction(nodes[node1], nodes[node2]);
    
    const expectedEdges =  [
      { from: 1, to: 2, value: 1 }
    ];
    
    expect(expectedEdges).toEqual(charController.GenerateEdges());
  });
  
  it("must receive 3 nodes and generate an edge of these chars", () => {
    const charController = new CharacterManagerClass();
    
    charController.TryAddCharacter({ name: "Dinah" });
    charController.TryAddCharacter({ name: "Becky" });
    charController.TryAddCharacter({ name: "Leslie" });
    
    const nodes = charController.GenerateNodes();
    charController.AddNodesMomentum(nodes);
    
    const actualEdges = charController.GenerateEdges();
    const expectedEdges: Array<Edges> = [
      { from: 3, to: 1, value: 1 },
      { from: 3, to: 2, value: 1 },
      { from: 2, to: 1, value: 1 },
    ];
    expect(actualEdges).toEqual(expectedEdges);
    
  });
  
  it("must receive 5 nodes and generate an edge of these chars", () => {
    const charController = new CharacterManagerClass();
    
    charController.TryAddCharacter({ name: "Ruth" });
    charController.TryAddCharacter({ name: "Jennifer" });
    charController.TryAddCharacter({ name: "Carla" });
    charController.TryAddCharacter({ name: "Aghata" });
    charController.TryAddCharacter({ name: "Sierra"});
    
    const nodes = charController.GenerateNodes();
    charController.AddNodesMomentum(nodes);
    
    const actualEdges = charController.GenerateEdges();
    const expectedEdges: Array<Edges> = [
      { from: 5, to: 1, value: 1 },
      { from: 5, to: 2, value: 1 },
      { from: 5, to: 3, value: 1 },
      { from: 5, to: 4, value: 1 },
      { from: 4, to: 1, value: 1 },
      { from: 4, to: 2, value: 1 },
      { from: 4, to: 3, value: 1 },
      { from: 3, to: 1, value: 1 },
      { from: 3, to: 2, value: 1 },
      { from: 2, to: 1, value: 1 },
    ];
    expect(actualEdges).toEqual(expectedEdges);
    
  });
});