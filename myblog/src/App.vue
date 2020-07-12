<template>
  <div id="app">
<Index/>
  </div>
</template>

<script>
import Index from 'views/Index.vue';
import BScroll from 'better-scroll';
export default {
    name: 'app',
    components: {
      Index,
      BScroll
    }
  }
</script>
<style>

#app{
  width: 100%;
  
}
</style>
