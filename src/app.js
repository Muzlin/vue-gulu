import Vue from 'vue'
import Button from './button'
import Button_group from './button-group'
import Icon from './icon'

Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', Button_group);

new Vue({
  el: '#app',
  data: {
    defLoading: false,
    l2: false
  }
});


/* 单元测试 */

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies);
const expect = chai.expect;
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-settings')
}

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  });
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq('#i-loading')
}

{
  let div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('1');
  vm.$el.remove();
  vm.$destroy()
}

{
  let div = document.createElement('div');
  document.body.appendChild(div);
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  });
  vm.$mount(div);
  let svg = vm.$el.querySelector('svg');
  let {order} = window.getComputedStyle(svg);
  expect(order).to.eq('2');
  vm.$el.remove();
  vm.$destroy()
}

/* 单元测试 按钮点击事件 */

{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  });
  vm.$mount();
  let spy = chai.spy(function () {});
  vm.$on('click',spy);
  let button = vm.$el;
  button.click();
  expect(spy).to.have.been.called();
  vm.$el.remove();
  vm.$destroy()
}