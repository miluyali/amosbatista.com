<template lang="pug">
  .doa
    h1
      | Dumbing of Age - The graph
    graph-component
</template>

<script>
import graphComponent from './components/graph';

export default {
  components: { graphComponent }
}
</script>

<style>
  graph-component {
    width: 100%;
  }
</style>