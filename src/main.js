import "./css/tailwind.css";
import "./css/global.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// fontawesome import
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);

const app = createApp(App);
// FontAwesomeIcon 컴포넌트를 전역으로 등록
app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
