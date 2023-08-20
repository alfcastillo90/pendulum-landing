import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'typeface-lato';
import { createApp } from 'vue';
import App from './App.vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMousePointer, faExchangeAlt, faCode, faHdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faLinkedin, faGithub, faMousePointer, faExchangeAlt, faCode, faHdd);

const app = createApp(App);

// Registra el componente global de Font Awesome
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
