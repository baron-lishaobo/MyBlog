<template>
  <div>
  <Anchor>
  <AnchorItem anchorHref="#1" anchorTitle="1"></AnchorItem>
  <AnchorItem anchorHref="#2" anchorTitle="12"></AnchorItem>
  <AnchorItem anchorHref="#3" anchorTitle="123"></AnchorItem>
  <AnchorItem anchorHref="#4" anchorTitle="1555"></AnchorItem>
  <AnchorItem anchorHref="#5" anchorTitle="1666"></AnchorItem>
</Anchor>
  </div>
</template>

<script>
import Anchor from 'components/common/anchor/Anchor.vue';
import AnchorItem from 'components/common/anchor/AnchorItem.vue';
export default {
  name:'MainAnchor',
  components:{
      Anchor,
      AnchorItem
},
  data(){
    return{

  }
}
}
</script>