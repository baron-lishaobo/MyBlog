<template>
  <div class="module-card">
    <a-card :title="cardTitle" :bordered="false"  :style="{width:cardWidth,height:cardHeight}">
      <slot name="card-content"></slot>

    </a-card>
  </div>
</template>

<script>
export default {
  name:'Card',
  props:{
    cardTitle:{
type:String,
default:'card Title'
    },
    cardWidth:{
      type:String,
      default:'240px'
},cardHeight:{
      type:String,
      default:'200px'
}
  },
  computed:{

  }
}
</script>

<style lang="less" scoped>
.module-card{
  background:#ececec;
  padding:10px
}
</style>