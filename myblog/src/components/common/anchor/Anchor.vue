<template>
<div>
  <a-anchor :affix="false" :wrapper-style="wrapperStyle"  :get-current-anchor="getCurrentAnchor" :target-offset="targetOffset">
   <slot></slot>
  </a-anchor>
</div>
</template>
<script>
export default {
  data() {
    return {
      targetOffset: undefined,
      wrapperStyle:{
        width:'80px',
        maxHeight:'calc(100vh-300px) !important',
        //marginLeft:'-88px',
      //  paddingLeft:'4px',
       // overflow:'auto',
        //position:'relative'


      }
    }
  },
  methods:{
    getCurrentAnchor(){

        }
  },
  mounted() {
    this.targetOffset = window.innerHeight / 2;
  },
};
</script>
