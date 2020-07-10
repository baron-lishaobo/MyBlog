<template>
<div>
<a-row>
  <tab-bar>
    <a-col :span="3"></a-col>
    <a-col :span="6">Logo</a-col>

    <a-col :span="2">
    <tab-bar-item path="/home">
      <div slot="item-text">首页 </div>
    </tab-bar-item>
    </a-col>

     <a-col :span="2">
    <tab-bar-item path="/technology">

      <div slot="item-text">技术
      </div>
    </tab-bar-item>
    </a-col>

      <a-col :span="2">
    <tab-bar-item path="/life">

      <div slot="item-text">生活</div>
    </tab-bar-item>
   </a-col>

      <a-col :span="2">
    <tab-bar-item path="/readbooks">

      <div slot="item-text">读书</div>
    </tab-bar-item>
      </a-col>

        <a-col :span="2">
    <tab-bar-item path="/profile">

      <div slot="item-text">关于我</div>
    </tab-bar-item>
      </a-col>

      <a-col :span="2">
    <tab-bar-item path="/login">

      <div slot="item-text">登录/注册</div>
    </tab-bar-item>
      </a-col>

  </tab-bar>
  </a-row>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    },data(){
      return{
        placements:['1','2','3']
      }
    }
  }
</script>

<style scoped>

</style>
