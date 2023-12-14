import { App } from "nativescript-vue";
import { createPinia } from "pinia";

if (module.hot) {
  module.hot.accept();
}

export const bootApp = (app: App) => {
  const pinia = createPinia();

  app.use(pinia);
  // app.use(router);

  // app.config.globalProperties.$L = localize;
};
