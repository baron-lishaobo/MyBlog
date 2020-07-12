<template>
  
<div :style="{width:contentModuleWidth,height:contentModuleHeigth}" class="content-module">
<slot></slot>
</div>

</template>

<script>
export default {
props:{
  contentModuleWidth:{
    type:String,
    default:''
  },  
  contentModuleHeigth:{
    type:String,
    default:''
  }
}
}
</script>

<style scoped>
.content-module{
  background-color:white;
}
</style>