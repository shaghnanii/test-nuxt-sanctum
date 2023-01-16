// these are asynchronous

export default {
  async index({ commit }, url) {
    try {
      return await this.$axios.get(url);
    }
    catch (err){
      return err.response
    }
  },

  async show({ commit }, payload) {
    try {
      return await this.$axios.get(`${payload.url}/${payload.id}`);
    }
    catch (err){
      return err.response
    }
  },

  async store({ commit }, payload) {
    try {
      console.log("paylaod: ", payload)
      return await this.$axios.post(`${payload.url}`, payload.data);
    }
    catch (err){
      return err.response
    }
  },

  async update({ commit }, payload) {
    try {
      return await this.$axios.post(`${payload.url}/${payload.id}?_method=put`, payload.data);
    }
    catch (err){
      return err.response
    }
  },

  async destroy({ commit }, data) {
    try {
      return await this.$axios.delete(`${data.url}/${data.id}`);
    }
    catch (err){
      return err.response
    }
  }
}
