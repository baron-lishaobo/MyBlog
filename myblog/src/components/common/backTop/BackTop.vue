<template>
  <div id="back-top">
    <a-back-top>
        <slot></slot>
      <div class="ant-back-top-inner">
        <a-icon type="up" />
      </div>
    </a-back-top>
  </div>
</template>
<style scoped>
#back-top{
margin-bottom:220px ;
}
.ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color:pink;
  color: #fff;
  text-align: center;
  font-size: 20px;
}

</style>
