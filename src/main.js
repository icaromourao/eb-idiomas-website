import { createApp } from 'vue';
import VueScroolTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueScroolTo, {
  easing: 'ease-in',
  lazy: false,
  offset: -90,
  force: true,
  cancelable: true,
  x: false,
  y: true,
});

app.config.productionTip = false;

app.mount('#app');
