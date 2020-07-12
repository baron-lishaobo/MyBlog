<template>
  <div id="mian">
<a-layout type="flex">
      <a-layout-header :style="{position:'fixed',zIndex:1,width:'100%'}"><MainTabBar/></a-layout-header>
      <a-layout>
        <a-layout-content :style="{marginTop:'65px'}"><router-view/></a-layout-content>
      </a-layout>

      <a-layout-footer :style="{textAlign:'center'}">
         Baron's Blog ©2020 Created by Baron

      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import "assets/css/base.less"
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
export default {
  name:'Index',
  components:{
MainTabBar
  }
}
</script>

<style  scoped>
#mina > .ant-layout-sider{
  background-color:hotpink;

}
</style>