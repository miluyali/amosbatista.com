<template lang="pug">
  #graphContainer
</template>

<script>
import vis from 'vis';

export default {
  mounted () {
    const nodes = new vis.DataSet([
      { id: 1, label: "Joyce", shape: "circularImage", image: "\\teste" },
      { id: 2, label: "Sarah" },
      { id: 3, label: "Dorothy" },
      { id: 4, label: "Walky" },
      { id: 5, label: "Jennifer" },
    ]);

    // create an array with edges
    const edges = new vis.DataSet([
      { from: 1, to: 2, value: 1 },
      { from: 1, to: 3, value: 5 },
      { from: 2, to: 3, value: 2 },
      { from: 2, to: 4, value: 1 },
      { from: 3, to: 5, value: 9 },
    ]);

    // create a network

    const container = document.getElementById("graphContainer");
    const data = {
      nodes: nodes,
      edges: edges,
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