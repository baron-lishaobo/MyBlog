<template>
<div class="main-content-nodule">
  <a-row type="flex" justify="space-around" align="middle" style="margin:8px auto" >
    
<ContentModule :contentModuleWidth="contentModuleWidth" :contentModuleHeigth="contentModuleHeigth">
<ContentModuleItem>
  
<div class="content-module-title-left" slot="moduleTitleLeft"><a :href="contentHref" target="_blank" :articleTitle="articleTitle">{{articleTitle}}</a> </div>
  <div class="content-module-title-right" slot="moduleTitleRight"><a  :href="contentHref" target="_blank">More</a></div>
  
  <div class="content-module-content" slot="moduleContent" :contents="articleTitle">222222</div>
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
props:{
contentModuleWidth:{
  type:String
},
contentModuleHeigth:{
  type:String
},
articleTitle:{
  type:String,
  default:'Article Title'
}
,
contentHref:{
  type:String,
  default:'#'
},contents:{
  type:Array,
  default(){
    return[]
  }
}
},
components:{
ContentModule,
ContentModuleItem
}
}
</script>

<style lang="less" scoped>
.main-content-module{
  width: 100%;
}
.content-module-title-left{

}
.content-module-title{
  
  text-align: right;
}
.content-module-content{

}
</style>