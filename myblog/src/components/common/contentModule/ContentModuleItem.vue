<template>
<div class="contentModuleItem">
  <div class="moduleTitleLeft"> <slot name="moduleTitleLeft"></slot></div>
<div class="moduleTitleRight" :style="activeStyle" @click="itemClick"><slot name="moduleTitleRight"></slot></div>
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
.contentModuleItem{
  display: flex;
   
  line-height: 46px;
  box-shadow: 0 2px 0 rgba(163, 162, 162, 0.3);
}
.moduleTitleLeft{
text-align: left ;
flex: 1;
}
.moduleTitleRight{
  width: 60px;
  right: 10px;
  position: absolute;
  
}
</style>