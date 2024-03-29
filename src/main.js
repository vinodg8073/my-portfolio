import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far, fab)
dom.watch();
// import AOS from 'aos'
import 'aos/dist/aos.css'
import mitt from 'mitt';
const emitter = mitt();
const app=createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.config.globalProperties.emitter = emitter;
app.mount('#app')


// createApp(App).use(router).mount('#app')
