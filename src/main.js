import { createApp } from 'vue'
import App from './App.vue';
// Router
import router from './router'
// Global css
import './assets/main.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMountainSun , faStar, faTent, faMountain} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faMountainSun, faStar, faTent, faMountain);
// Bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
