interface Edges {
  from: number,
  to: number,
  value: number
}

interface Nodes {
  id: number, 
  label: string, 
}

interface Character {
  name: string
}

class CharacterManagerClass {
  private nodes = new Object();
  private lastNodeId = 0;
  
  GenerateEdges ():Array<Edges> {
    return [];
  }

  GenerateNodes ():Array<Nodes> {
    return Object.keys(this.nodes).reduce((final, current) => {
      final.push({
        id: this.nodes[current],
        label: current,
      });

      return final;
    }, new Array<Nodes>());
  }

  AddCharacter (character: Character):void {
    if(!this.nodes[character.name]) {
      this.nodes[character.name] = ++this.lastNodeId;
    }
  }
}

export { 
  CharacterManagerClass,
  Edges,
  Nodes,
  Character
} ;