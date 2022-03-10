import { createApp } from 'vue'


import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import Vuex from 'vuex'

import store  from './store' 


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios, Vuelidate, Vuelidate.deault, Vuex)
app.mount('#app')

