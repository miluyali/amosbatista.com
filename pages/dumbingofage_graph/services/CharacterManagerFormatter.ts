import { Nodes, Edges } from './CharacterManagerClass';

interface Processed {
  nodes:  Array<Nodes>,
  edges:  Array<Edges>
}
class CharacterManagerFormatter {
  constructor (
    private nodes = new Array<Nodes>(),
    private edges = new Array<Edges>(),
  )  {}
  
  filterByMininalValue(minimal: number): Processed {
    const filteredEdges = this.edges.filter( edge => {
      return edge.value > minimal;
    });
    return {
      nodes: this.nodes.filter(node => {
        return filteredEdges.find( edge => {
          return edge.from == node.id || edge.to == node.id
        })
      }),
      edges: filteredEdges
    }
  }
  
}

export {
  CharacterManagerFormatter
}