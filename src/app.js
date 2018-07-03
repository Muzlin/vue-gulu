import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import Button_group from './button-group'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', Button_group)

new Vue({
  el: '#app',
  data: {
    defLoading: false,
    l2: false
  }
})