import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app-vue-header',
    render: r => r(App),
  } 
});

export const { bootstrap, mount, unmount } = vueLifecycles