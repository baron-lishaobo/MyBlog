<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div class="tab-bar-item" @click="itemClick">
    <div class="tab-bar-item-content" v-if="!isActive"><slot name="item-icon"></slot></div>
    <div class="tab-bar-item-content" v-else><slot name="item-icon-active"></slot></div>
    <div class="tab-bar-item-content" :style="activeStyle" ><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item1(/category) = false
        // /home -> item1(/cart) = true
        // /home -> item1(/profile) = true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        //history:跳转到指定url,替换history栈中最后一个记录,点击后提会返回至上上一个页面
        //使用同push\
        //push:向history栈中添加一个新的记录点击后退会返回上一个页面
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style lang="less" scoped>

  .tab-bar-item {
    /* flex: 1; */
    display: flex;
    height: auto;
    font-size: 24px;
    // border: 1px solid grey;
    border-radius: 8px;
    margin-left:12px ;
    margin-top: 12px;
    margin-bottom: 12px;
   
  }
  .tab-bar-item-content{
    
    margin: 8 auto;
    font-family:LiSu,STLiti,"Microsoft YaHei","微软雅黑","MicrosoftJhengHei","华文细黑","STHeiti,MingLiu "
}
</style>
