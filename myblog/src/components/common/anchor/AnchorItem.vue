<template>

 <a-anchor-link :href="anchorHref" :title="anchorTitle" />

</template>

<script>

export default {
  props:{
    anchorHref:{
      type:String
    },
    anchorTitle:{
      type:String
    }
  }
}
</script>