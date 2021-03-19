import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./main.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt,faChevronLeft, faGlobeAfrica, faBars, faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSignInAlt, faChevronLeft, faGlobeAfrica, faBars, faHeart)



createApp(App).component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router).use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MY_API_KEY,
  },
}).mount("#app");
