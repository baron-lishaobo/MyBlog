<template>
<div class="technology">
<SearchInput/>

<a-row>

  <a-col :span="6"></a-col>
  <a-col :span="12">
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>

<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>
<MainContentModule contentModuleWidth="100%" contentModuleHeigth="140px"></MainContentModule>

  </a-col>
</a-row>
  <a-col :span="8"></a-col>
  <a-col :span="12">
    <Pagination/>
  </a-col>
<BackTop/>
</div>

</template>

<script>
import SearchInput from 'components/common/searchInput/SearchInput.vue';
import MainContentModule from 'components/content/mainContentModule/MainContentModule.vue'
import BackTop from 'components/common/backTop/BackTop.vue'
import Pagination from 'components/common/pagination/Pagination.vue'

export default {
  components:{
    SearchInput,
    MainContentModule,
    BackTop,
    Pagination
  }
}
</script>
