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
  private nodesFromObject: any = {};
  private lastNodeId = 0;
  
  private edges = new Array<Edges>();
  
  GenerateEdges ():Array<Edges> {
    return this.edges;
  }

  GenerateNodes ():Array<Nodes> {
    return Object.keys(this.nodesFromObject).reduce((final, current) => {
      final.push({
        id: this.nodesFromObject[current] as number,
        label: current,
      });

      return final;
    }, new Array<Nodes>());
  }

  TryAddCharacter (character: Character) :void {
    if(!this.nodesFromObject[character.name]) {
      this.nodesFromObject[character.name] = ++this.lastNodeId;
    }
  }
  
  AddInteraction (node1: Nodes, node2: Nodes) {
    const newEdge: Edges = {
      from: node1.id,
      to: node2.id,
      value: 1
    }
    this.edges.push(newEdge);
  }
  
  AddNodesMomentum(nodes: Array<Nodes>): void {
    const currentNode = nodes.pop();
    
    if(!currentNode) {
      return;
    }
    
    nodes.forEach(node => {
      this.AddInteraction(currentNode, node);
    });
    
    this.AddNodesMomentum(nodes);
  }
}

export { 
  CharacterManagerClass,
  Edges,
  Nodes,
  Character
} ;