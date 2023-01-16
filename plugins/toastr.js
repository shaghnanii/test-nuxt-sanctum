import CxltToastr from 'cxlt-vue2-toastr'
import Vue from 'vue';

var toastrConfigs = {
  position: 'top right',
  showDuration: 5000,
  hideDuration: 1000,
  timeOut: 5000,
  closeButton: true,
  progressBar: true,
}
Vue.use(CxltToastr, toastrConfigs)
