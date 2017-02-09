import Vue from 'vue'

import App from './root/components/App.vue'

import router from './router'

import store from './vuex'

// import './assets/js/nav.js'

//import './assets/js/nav-toggle.js'


new Vue({

router,

store,

el: '#app',

render: h => h(App)

})
