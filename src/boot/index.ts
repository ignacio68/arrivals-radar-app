// import { router } from '@/routes';
import { App } from 'nativescript-vue';
import { createPinia } from 'pinia';

if (module.hot) {
	module.hot.accept();
}

export const bootApp = (app: App) => {
	const pinia = createPinia();

	app.use(pinia);
	// app.use(router);
};
