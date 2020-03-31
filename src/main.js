import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
<<<<<<< HEAD
import quillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

=======
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
>>>>>>> 376bb54aacb8ec629284beaf4832cb9a77167b99

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(axios)
<<<<<<< HEAD
Vue.use(quillEditor, /* { default global options } */)

=======
Vue.use(ElementUI);
>>>>>>> 376bb54aacb8ec629284beaf4832cb9a77167b99

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  el: '#app',
  render: h => h(App)
});
