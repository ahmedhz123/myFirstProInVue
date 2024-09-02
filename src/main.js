import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const vueApp = createApp(App);
vueApp.use(router).use(createPinia()).mount("#app");

vueApp.directive("changeFontFamily", (ele, ord) => {
  ele.style.fontFamily = ord.value;
});

vueApp.directive("changFontWeight", (ele, ord) => {
  ele.style.fontWeight = ord.value;
});

vueApp.directive("changeFontStyle", (ele, ord) => {
  ele.style.fontStyle = ord.value;
});

vueApp.directive("changeTextDeco", (ele, ord) => {
  ele.style.textDecoration = ord.value;
});

vueApp.directive("changeWidth", (ele, ord) => {
  ele.style.width = ord.value + "%";
});
