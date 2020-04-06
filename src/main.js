import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import axios from 'axios'
import quillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(axios)
Vue.use(quillEditor, /* { default global options } */)

<<<<<<< HEAD
Vue.use(ElementUI);

=======
>>>>>>> d8048aef5d7d5232987de1377c402c32fa1a7fec
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
