<template>
  <a-carousel arrows autoplay>
    <div
      slot="prevArrow"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow"  class="custom-slick-arrow" style="right: 10px;">
      <a-icon type="right-circle" />
    </div>
    <div v-for="(image,index) in images"  :key="index"  :images="images">
         <div class="carousel-image"> <img :src="image" alt=""></div>
    </div>
  
  </a-carousel>
</template>
<script>
export default {
  name:'Carousel',
  props:{
    images:{
      type:Array,
      default(){
        return []
      }
    }
  },
  mounted(){
  }
};
</script>
<style scoped>

.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 210px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.carousel-image img{
  width: 100%;
}
</style>
