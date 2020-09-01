<template>
<div class="home">
<SearchInput/>
<a-row type="flex" >
  <a-col :span="2"></a-col>
  <a-col :span="15">
    <div class="home-carousel">
    <Carousel  :images="images"></Carousel>
    </div>
    </a-col>
  <!-- <a-col :span="1"></a-col> -->
  <a-col :span="6">
    <Card cardTitle='Technology Category' cardWidth='100%' cardHeight='260px'>
      <div slot='card-content'>
<div class="home-tag">
  <Tag color="pink">C#</Tag>
  <Tag>Javascript</Tag>
  <Tag color="purple">Vue</Tag>
  <Tag color="cyan">Java</Tag>
  <Tag color="orange">Docker</Tag>
  <Tag color="green">Go</Tag>
  <Tag color="red">Python</Tag>
 
  </div>
<div class="home-tag">
   <Tag color="green">Go</Tag>
  <Tag color="red">Python</Tag>
</div>
      </div>
    </Card>
    </a-col>
</a-row>


<a-row>
<a-layout>
<a-col :span="2"></a-col>

<a-col :span="4">
  <!-- <a-layout-sider class="content-layout-sider" > -->
    <Calendar/>
  <!-- </a-layout-sider> -->
</a-col>

  <a-col :span="11">
  <a-layout-content >
    <AList/>
  </a-layout-content>
  </a-col>

<a-col :span="5">
<a-layout-sider class="content-layout-sider left" ></a-layout-sider>
</a-col>
</a-layout>
</a-row>

<BackTop/>
</div>
</template>

<script>
// @ is an alias to /src
import BackTop from 'components/common/backTop/BackTop.vue'
import MainAnchor from 'components/content/mainAnchor/MainAnchor.vue'
import Carousel from 'components/common/carousel/Carousel.vue';
import Card from 'components/common/card/Card.vue';
import Tag from 'components/common/tag/Tag.vue'
import SearchInput from 'components/common/searchInput/SearchInput.vue';
import AList from 'components/common/list/AList.vue'
import Calendar from 'components/common/calendar/Calendar.vue'

import img1 from 'assets/img/home/1.jpg';
import img2 from 'assets/img/home/2.jpg';
import img3 from 'assets/img/home/3.gif';
import img4 from 'assets/img/home/4.gif';
import {getHomeData} from 'network/home';
export default {
  name: 'Home',
  components: {
      Carousel,
      Card,
      SearchInput,
      MainAnchor,
      BackTop,
      Tag,
      AList,
      Calendar

  },
  data(){
    return {

       images:[img1,img2,img3,img4],
       DemoList:[]
    }
  },
  computed:{
reverseDemoList(){
  return this.DemoList.reverse();
}
  },
  methods:{
    GetImages(){
    },
    GetDemoPages(){
      this.http.post('api/App_News/getDemoPageList').then(x=>this.DemoList=x.data);
      
    }
  },
  created(){


  },
  mounted(){
    this.GetDemoPages();
    
  }
}
</script>

<style lang="less" scoped>
.left{
  background-color:red ;
}
.home-carousel{
  margin:10px auto;
}

.content-layout-sider{
max-width:100% !important;
// width:100% !important;
background-color: #f6f6f6 !important;
    &.left{
       margin-right: 12px;
       margin-top: 20px !important;
      }
}

.home-tag{
  display: flex;
  margin: 5px auto;
  padding: 5px;
}
</style>
