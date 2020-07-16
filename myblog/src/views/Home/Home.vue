<template>
<div class="home">
<SearchInput/>
<a-row type="flex" >
  <a-col :span="1"></a-col>
  <a-col :span="15">
    <div class="home-carousel">
    <Carousel :images="images"></Carousel>
    </div>
    </a-col>
  <a-col :span="1"></a-col>
  <a-col :span="6" class="left">
    <Card cardTitle='Technology Category' cardWidth='340px' cardHeight='180px'>
      <div slot='card-content'>
<div class="home-tag">
  <Tag color="pink">C#</Tag>
  <Tag>Javascript</Tag>
  <Tag color="purple">Vue</Tag>
  <Tag color="cyan">Java</Tag>
  <Tag color="orange">Docker</Tag>
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
<a-col :span="1"></a-col>

<a-col :span="5">
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="150px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="150px"></MainContentModule>
</a-col>

  <a-col :span="11">
  <a-layout-content>
<MainContentModule contentModuleWidth="96%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="96%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="96%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="96%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="96%" contentModuleHeigth="140px"></MainContentModule>

  </a-layout-content>

  </a-col>

<a-col :span="5">
<a-layout-sider class="content-layout-sider" >
 <MainContentModule contentModuleWidth="90%" contentModuleHeigth="150px"></MainContentModule>
 <MainContentModule contentModuleWidth="90%" contentModuleHeigth="160px"></MainContentModule>
 <MainContentModule contentModuleWidth="90%" contentModuleHeigth="120px"></MainContentModule>

</a-layout-sider>
</a-col>
</a-layout>
</a-row>


<a-row>
  <a-col :span="8"></a-col>
  <a-col :span="12">
    <Pagination/>
  </a-col>
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
import MainContentModule from 'components/content/mainContentModule/MainContentModule.vue'
import Pagination from 'components/common/pagination/Pagination.vue'
import Tag from 'components/common/tag/Tag.vue'

import SearchInput from 'components/common/searchInput/SearchInput.vue';
import img1 from 'assets/img/home/1.jpg';
import img2 from 'assets/img/home/2.jpg';
import img3 from 'assets/img/home/3.jpg';
import img4 from 'assets/img/home/4.jpg';
import {getHomeData} from 'network/home';
export default {
  name: 'Home',
  components: {
      Carousel,
      MainContentModule,
      Card,
      SearchInput,
      MainAnchor,
      BackTop,
      Pagination,
      Tag

  },
  data(){
    return {

       images:[img1,img2,img3,img4]
    }
  },
  computed:{

  },
  methods:{
    GetImages(){
      console.log(this.images)
    }
  },
  created(){
//     getHomeData().then(res=>{
//   console.log(res)
// })
  },
  mounted(){
    console.log(this.images)
  }
}
</script>

<style scoped>
.left{
  background-color:red ;
}
.home{
  /* margin: 12px auto; */
}
.home-carousel{
  margin: 5px auto;
}

.content-layout-sider{
max-width:100% !important;
width:100% !important;
background-color:lavender !important
}

.home-tag{
  display: flex;
  margin: 5px auto;
  padding: 5px;
}
</style>
