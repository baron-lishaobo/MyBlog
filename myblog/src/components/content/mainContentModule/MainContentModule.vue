<template>
<div>
  <a-row>
<ContentModule width="330px" height="1300px">
<ContentModuleItem>
  <div slot="moduleTitle">Title</div>
  <div slot="moduleContent">Content</div>
</ContentModuleItem>
</ContentModule>
  </a-row>
</div>
</template>

<script>
import ContentModule from 'components/common/contentModule/ContentModule.vue'
import ContentModuleItem from 'components/common/contentModule/ContentModuleItem.vue'
export default {
name:'MainContentModule',
components:{
ContentModule,
ContentModuleItem
}
}
</script>

<style lang="less" scoped>

</style>