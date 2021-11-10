<template lang="pug">
  #graphContainer
</template>

<script>
  import vis from 'vis';
  import { CharacterManagerFacade } from './../../services/CharacterManagerFacade'

  export default {
    mounted () {
      const charController = new CharacterManagerFacade();
      
      charController.TryAddCharacterPage(["Dorotyh"]);
      charController.TryAddCharacterPage(["Dorotyh", "Joyce", "Sarah"]);
      charController.TryAddCharacterPage(["Joyce", "Sarah"]);
      charController.TryAddCharacterPage(["Joyce", "Sarah"]);
      charController.TryAddCharacterPage(["Joyce", "Joe"]);
      charController.TryAddCharacterPage(["Joyce", "Jacob"]);
      const nodesEdges = charController.GenerateNodesAndEdges();
      
      const container = document.getElementById("graphContainer");
      const data = {
        nodes: nodesEdges.nodes,
        edges: nodesEdges.edges,
      };
      const options = { 
        width: "100%",
        height: "500px",
        autoResize: true,
      };
      new vis.Network(container, data, options);
    }
  }
</script>

<style>
  #graphContainer {
    width: 100%;
    height: 100%;
  }
</style>