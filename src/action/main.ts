import App from '~/action/App.svelte';
import '~/shared/styles.css';
import { mount } from 'svelte';

mount(App, {
	target: document.querySelector('#app') as HTMLDivElement,
});
