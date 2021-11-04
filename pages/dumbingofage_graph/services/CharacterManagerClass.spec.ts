import { CharacterManagerClass, Character, Nodes, Edges } from "./CharacterManagerClass";

describe("Dumbing of Age Graph Char Controller", () => {

  it("must be a class", () => {
    const actual = new CharacterManagerClass();
    expect(actual).toBeInstanceOf(CharacterManagerClass);
  });

  it("must return a empty list if there's no char", () => {
    const charController = new CharacterManagerClass();

    const actualEdges = charController.GenerateEdges();
    const expectedEdges = [];
    expect(actualEdges).toEqual(expectedEdges);

    const actualNodes = charController.GenerateNodes();
    const expectedNodes = [];
    expect(actualNodes).toEqual(expectedNodes);
  });

  it("must receive a page, with one character, and return a node without vertices", () => {
    const charController = new CharacterManagerClass();

    const newChar: Character = {
      name: "Joyce"
    };

    charController.AddCharacter(newChar);
    const expectedNodes:Array<Nodes> = [{
      id: 1,
      label: "Joyce"
    }];
    expect(charController.GenerateNodes()).toEqual(expectedNodes);
  });

  it("must receive a page with one character already added, and must return a node without repetead values", () => {
    const charController = new CharacterManagerClass();

    const newChar: Character = {
      name: "Joyce"
    };

    charController.AddCharacter(newChar);

    const repeatedChar: Character = {
      name: "Joyce"
    };
    charController.AddCharacter(newChar);
  
    const expectedNodes:Array<Nodes> = [{
      id: 1,
      label: "Joyce"
    }];
    expect(charController.GenerateNodes()).toEqual(expectedNodes);
  });


});