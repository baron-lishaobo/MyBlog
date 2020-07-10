<template>
<div class="home">
<SearchInput/>
<a-row type="flex" >
  <a-col :span="1"></a-col>
  <a-col :span="15">
    <div class="home-carousel">
    <Carousel>
    <div slot="image-1"><img :src="img1" alt=""> </div>
    <div slot="image-2"><img :src="img2" alt=""> </div>
    <div slot="image-3"><img :src="img3" alt=""> </div>
    <div slot="image-4"><img :src="img4" alt=""> </div>
    </Carousel>
    </div>
    </a-col>
  <a-col :span="1"></a-col>
  <a-col :span="6" class="left">
    <Card cardTitle='Card Title Test' cardWidth='340px' cardHeight='180px'>
      <div slot='card-content'>
        <p>Test1</p>
        <p>Test2</p>
        <p>Test3</p>
      </div>
    </Card>
    </a-col>

</a-row>
<a-row type="flex" justify="space-around" align="middle" style="margin:10px auto" >
  <MainContentModule></MainContentModule>
  <MainContentModule></MainContentModule>
  <MainContentModule></MainContentModule>
    <a-col>
      <BackTop><MainAnchor/></BackTop>
    </a-col>
</a-row>
</div>
</template>

<script>
// @ is an alias to /src
import BackTop from 'components/common/backTop/BackTop.vue'
import MainAnchor from 'components/content/mainAnchor/MainAnchor.vue'
import Carousel from 'components/common/carousel/Carousel.vue';
import Card from 'components/common/card/Card.vue';
import MainContentModule from 'components/content/mainContentModule/MainContentModule.vue'
import SearchInput from 'components/common/searchInput/SearchInput.vue';
import img1 from 'assets/img/home/5.jpg';
import img2 from 'assets/img/home/2.jpg';
import img3 from 'assets/img/home/3.jpg';
import img4 from 'assets/img/home/4.gif';
export default {
  name: 'Home',
  components: {
      Carousel,
      MainContentModule,
      Card,
      SearchInput,
      MainAnchor,
      BackTop

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

  }
}
</script>

<style scoped>
.left{
  background-color:red ;
}
.home{
  margin: 12px auto;
}
.home-carousel{
  margin: 5px auto;
}
</style>
