<template>
<div class="contentModuleItem">
<div :style="activeStyle" @click="itemClick"><slot name="moduleTitle"></slot></div>
<div><slot name="moduleContent"></slot></div>
</div>
</template>

<script>
export default {

}
</script>


<script>
export default {
  name:'ContentModuleItem',
  props:{
  path:String,
  activeColor:{
    type:String,
    default:'red'
  }
},
  methods:{
itemClick(){
  this.$router.replace(this.path);
}
},
computed:{
  isActive(){
return this.$route.path.indexOf(this.path)!==-1;
  },
  activeStyle(){
    return this.isActive?{color:this.activeColor}:{}
  }
}
}
</script>
<style scoped>

</style>