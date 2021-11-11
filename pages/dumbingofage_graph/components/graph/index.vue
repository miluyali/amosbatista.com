<template lang="pug">
  #graphContainer
</template>

<script>
  import vis from 'vis';
  import { CharacterManagerFormatter } from '../../services/CharacterManagerFormatter'
  import * as nodes from '../../data/nodes'
  import * as edges from '../../data/edges'

  export default {
    mounted () {
      
      const container = document.getElementById("graphContainer");
      const formatter = new CharacterManagerFormatter(nodes.default, edges.default);
      const formattedData = formatter.filterByMininalValue(10);
      const options = { 
        width: "100%",
        height: "500px",
        autoResize: true,
        nodes: {
          scaling: {
            min: 16,
            max: 32,
          },
        },
        edges: {
          smooth: false,
        },
        physics: {
          //barnesHut: { gravitationalConstant: -50000 },
          stabilization: { iterations: 3500 },
          hierarchicalRepulsion: {
            centralGravity: 5,
          },
          solver: "forceAtlas2Based"
        },
      };
      const chart = new vis.Network(container, {
        nodes: formattedData.nodes,
        edges: formattedData.edges
      }, options);
      
      console.log("Cluster", chart.getSeed());
    }
  }
</script>

<style>
  #graphContainer {
    width: 100%;
    height: 100%;
  }
</style>