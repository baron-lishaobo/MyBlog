<template>
  <div class="search-input" :style="{backgroundImage:img}">
     <a-row type="flex">
    <a-col :span="6"></a-col>
    <a-col :span="12" style="margin:85px 0">
      <p class="height-150">
      <a-input-search
       placeholder="海棠同学,Good Good Study, Day Day Up"
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
import img from 'assets/img/search/search.jpg';
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
.search-input{
  width: 100%;
  height: 180px;
  text-align: center;
}
</style>