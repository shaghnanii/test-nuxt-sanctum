<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active"  v-if="!$auth.loggedIn">
          <div @click="$router.push('/login')" class="nav-link">Back to Login <span class="sr-only">(current)</span></div>
        </li>
        <li class="nav-item" v-if="$auth.loggedIn">
          <div @click="$auth.logout()" class="nav-link" href="#">Logout</div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "index",
  middleware: ['auth'],

}
</script>

<style scoped>

</style>
