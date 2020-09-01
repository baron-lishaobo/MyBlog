<template>
<div>
<a-row>
  <tab-bar>
    <a-col :span="2"><a-avatar size="large"  :src="portrait" /></a-col>
    <a-col :span="3"></a-col>

    <a-col :span="3">
    <tab-bar-item path="/home" :activeColor="activeColor">
    <div slot="item-icon"><a-icon type="home" theme="twoTone" /></div>
    <div slot="item-icon-active"><a-icon type="home" spin :style="{color:'hotpink'}" /></div>
    <div slot="item-text">首页 </div>
    </tab-bar-item>
    </a-col>

     <a-col :span="3">
    <tab-bar-item path="/technology" :activeColor="activeColor">
 <div slot="item-icon"><a-icon type="bug" theme="twoTone" /></div>
    <div slot="item-icon-active"><a-icon type="bug" spin :style="{color:'hotpink'}" /></div>
      <div slot="item-text">技术
      </div>
    </tab-bar-item>
    </a-col>

      <a-col :span="3">
    <tab-bar-item path="/life" :activeColor="activeColor">
 <div slot="item-icon"><a-icon type="heart" theme="twoTone" /></div>
    <div slot="item-icon-active"><a-icon type="heart" spin :style="{color:'hotpink'}" /></div>
      <div slot="item-text">生活</div>
    </tab-bar-item>
   </a-col>

      <a-col :span="3">
    <tab-bar-item path="/readbooks" :activeColor="activeColor">
 <div slot="item-icon"><a-icon type="book" theme="twoTone"  /></div>
    <div slot="item-icon-active"><a-icon type="book" spin :style="{color:'hotpink'}" /></div>
      <div slot="item-text">读书</div>
    </tab-bar-item>
      </a-col>

        <a-col :span="3">
    <tab-bar-item path="/profile" :activeColor="activeColor">
 <div slot="item-icon"><a-icon type="smile" theme="twoTone" /></div>
    <div slot="item-icon-active"><a-icon type="smile" spin :style="{color:'hotpink'}" /></div>
      <div slot="item-text">关于我</div>
    </tab-bar-item>
      </a-col>
<a-col :span="1"></a-col>
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
  import portrait from 'assets/img/profile/portrait.jpeg'
  

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
      
    },data(){
      return{
        placements:['1','2','3'],
        activeColor:'green',
        portrait:portrait
      }
    }
  }
</script>

<style scoped>

</style>
