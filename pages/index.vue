<template>
  <div class="">
    <div class="loader"></div>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    this.$router.push('/main-menu')
  }
}
</script>

<style>
.loader{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url('//upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Phi_fenomeni.gif/50px-Phi_fenomeni.gif')
  50% 50% no-repeat rgb(249,249,249);
}
</style>
