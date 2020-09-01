<template>
  <div class="readbooks">
  <SearchInput/>
   
  <a-row>
      <a-col :span="6"></a-col>
  <a-col :span="11">
    <a-layout-content>
      <AList/>
    </a-layout-content>

  </a-col>
  </a-row>
  <BackTop/>
  </div>
</template>

<script>
import SearchInput from 'components/common/searchInput/SearchInput.vue';
import BackTop from 'components/common/backTop/BackTop.vue'

import AList from 'components/common/list/AList.vue'
export default {
  components:{
    SearchInput,
    BackTop,
    AList
  }
}
</script>
