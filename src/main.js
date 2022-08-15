import { createApp } from 'vue';

import router from './router.js';
import store from './store/index.js';

import App from './App.vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseToast from './components/UI/BaseToast.vue';

import Toast from 'vue-toastification';

const app = createApp(App);

const options = {
    draggable: false
}
app.use(Toast, options);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-toast', BaseToast);

app.mount('#app');