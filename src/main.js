import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import quillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(axios)
Vue.use(quillEditor, /* { default global options } */)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  el: '#app',
  render: h => h(App)
});
