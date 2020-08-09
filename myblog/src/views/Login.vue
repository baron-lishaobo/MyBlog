<template>


</template>

<script>

export default {
   
    methods:{
  getVierificationCode() {
      this.http.get("/api/User/getVierificationCode").then(x => {
        console.log(x);
      })}
    },
    created(){
        this.getVierificationCode();
    }
}
</script>

<style lang="less" scoped>

</style>