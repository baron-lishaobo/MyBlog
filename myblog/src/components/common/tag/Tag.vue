<template>
  <div class="common-tag">
      <a-tag :color="color">
        <slot></slot>
      </a-tag>
  </div>
</template>


<script>


export default {
name:'Tag',
props:{
  tagSrc:{
    type:String,
    default:''
  },
  color:{
    type:String,
    default:'#108ee9'
  }
}

}
</script>