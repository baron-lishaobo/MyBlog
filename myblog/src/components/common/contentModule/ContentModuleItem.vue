<template>
<div>
<a-row type="flex" justify="space-around" align="middle" style="height:120px" >
  <a-col :span="7" class="left">  <slot name="item-title"></slot></a-col>
  <a-col :span="1"></a-col>
  <a-col :span="7" class="left">   <slot></slot></a-col>
  <a-col :span="1"></a-col>
  <a-col :span="7" class="left">  <slot></slot></a-col>
</a-row>

</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>