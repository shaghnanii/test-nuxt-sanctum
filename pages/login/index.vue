<template>
  <div class="container mt-5">
    <form method="POST" @submit="submitHandler">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" v-model="form.email" class="form-control" id="exampleInputEmail1"
               aria-describedby="emailHelp" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" v-model="form.password" id="exampleInputPassword1"
               placeholder="Password">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "index",
  auth: 'guest',
  data() {
    return {
      form: {
        email: 'test@example.com',
        password: 'password'
      },
      errors: [],
      loading: false,
    }
  },
  created() {
  },

  methods: {
    ...mapActions('authModule', ['login']),

    async submitHandler(event) {
      event.preventDefault();
      this.errors = [];
      this.loading = true
      try {
        const response = await this.login(this.form)

        if (response.status === 422) {
          this.$toast.info({
            title: "Failed to login",
            message: response.data.message,
          })
          this.errors = response.data.errors
          console.log("422: ", this.errors)
        } else if (response.status === 401) {
          this.$toast.info({
            message: response.data.message
          })
          this.errors[0].email = 'lsomdg';
          console.log("401: ", this.errors)
        } else if (response.status === 200) {
          this.$toast.success({
            message: response.data.message
          })
        }
      } catch (err) {
        this.loading = false
        // this.$notification.error({
        //   message: err.message,
        // })
      }
    }
  }
}
</script>

<style scoped>

</style>
