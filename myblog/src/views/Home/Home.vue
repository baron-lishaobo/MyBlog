<template>
<div class="home">
  <a-row type="flex" class="left" style="margin-bottom:10px">
    <a-col :span="6"><p class="height-100" style="height:120px;"></p></a-col>
    <a-col :span="12" style="margin:50px 0">
      <a-input-search
       placeholder="input search text"
       enter-buttot="Search"
       size="large"
       @search="onSearch"
       ></a-input-search>
    </a-col>
    <a-col :span="6"></a-col>
  </a-row>
<a-row type="flex" >
  <a-col :span="16">
    <Carousel>
    <div slot="image-1"><img :src="img1" alt=""> </div>
    <div slot="image-2"><img :src="img2" alt=""> </div>
    <div slot="image-3"><img :src="img3" alt=""> </div>
    <div slot="image-4"><img :src="img4" alt=""> </div>
    </Carousel>
    </a-col>
<a-col :span="1"></a-col>
  <a-col :span="6" class="left" style="margin-right:10px;">
    <p class="height-100">col-6</p>
    </a-col>
</a-row>

<a-row type="flex" justify="space-around" align="middle" style="height:120px" >
  <a-col :span="7" class="left"><p class="height-100">col-4</p></a-col>
  <a-col :span="1"></a-col>
  <a-col :span="7" class="left"> <p class="height-50">col-4</p></a-col>
  <a-col :span="1"></a-col>
  <a-col :span="7" class="left"><p class="height-50">col-6</p></a-col>
</a-row>


</div>
</template>

<script>
// @ is an alias to /src
import Carousel from 'components/common/carousel/Carousel.vue';
//import img from "C:/Study/012_Vue/MyBlog/myblog/src/assets/img/home/1.jpg"
import img1 from 'assets/img/home/5.jpg';
import img2 from 'assets/img/home/2.jpg';
import img3 from 'assets/img/home/3.jpg';
import img4 from 'assets/img/home/4.gif';
export default {
  name: 'Home',
  components: {
Carousel
  },
  data(){
    return {
img1:img1,
img2:img2,
img3:img3,
img4:img4
    }
  },
  computed:{

  },
  methods:{
    onSearch(value){
      console.log(value);
    }
  }
}
</script>

<style scoped>
.left{
  background-color:red ;
}
</style>
