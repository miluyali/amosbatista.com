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
      const formattedData = formatter.filterByMininalValue(5);
      const options = { 
        width: "100%",
        height: "500px",
        autoResize: true,
        layout: {
          randomSeed: 949842,
        },
        nodes: {
          color:  "#229db3",
          font: {
            size: 30,
          }
        },
        edges: {
          smooth: false,
        },
        physics: {
          barnesHut: { gravitationalConstant: -400000 },
          stabilization: { iterations: 3500 },
          hierarchicalRepulsion: {
            centralGravity: 500,
          },
          solver: "barnesHut"
        },
      };
      const nodesDataSet = new vis.DataSet(formattedData.nodes);
      let chart; 
      
      const renderReset = function () {
        chart = new vis.Network(container, {
          nodes: nodesDataSet,
          edges: new vis.DataSet(formattedData.edges)
        }, options);
        chart.on("click", chartClick);
      }
            
      //console.log("Cluster", chart.getSeed());
      const chartClick = function (params) {
        
        const connectedNodeIds = chart.getConnectedNodes(params.nodes[0]);
        if(params.nodes.length <= 0) {
          renderReset();
          
          return;
        }
        const nodesToChange = [];
        connectedNodeIds.push(params.nodes[0]);
        connectedNodeIds.forEach(nodeId => {
          const nodeToChange = formattedData.nodes.slice().find(node => {
            return node.id == nodeId
          })
          if(nodeToChange) {
            nodesToChange.push({
              color:  "#fe8786",
              font: {
                size: 35,
                bold: { mod: 'bold'},
              },
              label: nodeToChange.label,
              id: nodeToChange.id,
            });  
          }
        });
        const nodesToUpdate = formattedData.nodes.slice().map(oldNodes => {
          const nodeToUpdate = nodesToChange.find( nodeToUpdate => {
            return nodeToUpdate.id == oldNodes.id
          });
          
          return nodeToUpdate || oldNodes;
        });
        chart = new vis.Network(container, {
          nodes: nodesToUpdate,
          edges: new vis.DataSet(formattedData.edges)
        }, options);
        chart.on("click", chartClick);  
      }
      
      renderReset();
    }
  }
</script>

<style>
  #graphContainer {
    width: 100%;
    height: 100%;
  }
</style>