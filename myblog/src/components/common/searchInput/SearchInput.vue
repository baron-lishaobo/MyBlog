<template>
  <div class="search-input" :style="{backgroundImage:img}">
     <a-row type="flex">
    <a-col :span="6"></a-col>
    <a-col :span="12" style="margin:55px 0">
      <p class="height-100">
      <a-input-search
       placeholder="input search text"
       enter-buttot="Search"
       size="large"
       @search="onSearch"
       ></a-input-search>
      </p>
    </a-col>
    <a-col :span="6"></a-col>
  </a-row>
  </div>
</template>

<script>
import img from 'assets/img/home/3.jpg';
export default {
  created(){
const backgroundimage=img;
this.img=`url(${backgroundimage})`
  },
  data(){
    return{
img:""
      }
  },
  methods:{
     onSearch(value){
      console.log(value);
    }
  }
}
</script>

<style lang="less" scoped>

</style>