<template>
  <div>
<a-layout>
      <a-layout-header><MainTabBar/></a-layout-header>
      <a-layout>
         <a-layout-sider>Sider</a-layout-sider>
        <a-layout-content><router-view/></a-layout-content>
        <a-layout-sider>Sider</a-layout-sider>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar.vue'
export default {
  name:'Index',
  components:{
MainTabBar
  }
}
</script>