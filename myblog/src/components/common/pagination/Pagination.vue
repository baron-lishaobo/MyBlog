<template>
  <div class="pagination">
    <a-pagination
    show-quick-jumper
    :default-current="1"
    :total="totalPage"
    @change="onChange" />
  </div>
</template>
<script>


export default {
  name:'Pagination',
  props:{
totalPage:{
  type:Number,
  default:500
}
  },
  methods: {
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
}
</script>


<style lang="less" scoped>
.pagination{
  display: flex;
  margin: 65px auto;

}
</style>