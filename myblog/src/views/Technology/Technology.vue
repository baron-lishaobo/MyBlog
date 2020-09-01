<template>
<div class="technology">
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
  data(){
    return {
    DemoList:[]
    }
  },
  methods:{
       GetDemoPages(){
      this.http.post('api/App_News/getDemoPageList').then(x=>this.DemoList=x.data);  
      },
  },
   mounted(){
    this.GetDemoPages();
      },
  components:{
    SearchInput,
    BackTop,
    AList
  },computed:{
    reverseDemoList(){
  return this.DemoList.reverse();
}
  }
}
</script>
