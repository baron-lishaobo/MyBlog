<template>
<div class="content-module" :style="{width,height}">
<a-row type="flex" justify="space-around" align="middle" >
<slot></slot>
</a-row>

</div>
</template>

<script>
export default {
props:{
width:{
  type:String,
  default:'400px'
},
height:{
  type:String,
  default:'420px'
}
}
}
</script>

<style scoped>
.content-module{
  background-color:greenyellow;
}
</style>